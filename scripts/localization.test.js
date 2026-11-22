import assert from "node:assert/strict";
import test from "node:test";
import { recipes } from "../public/recipes/index.js";
import { recipeForLocale, translations } from "../public/src/localization.js";
import { recipeHref } from "../public/src/recipe-links.js";
import { nutritionPer100g } from "../public/src/nutrition.js";

test("each registered recipe has a complete second language", () => {
  assert.deepEqual(Object.keys(translations).sort(), recipes.map(recipe => recipe.id).sort());
  for (const recipe of recipes) {
    const alternate = recipe.lang === "fr" ? "en" : "fr";
    const copy = translations[recipe.id];
    const translated = recipeForLocale(recipe, alternate);
    assert.ok(copy.title && copy.description, recipe.id);
    assert.equal(translated.lang, alternate === "fr" ? "fr" : "en-GB");
    assert.equal(copy.groupTitles.length, recipe.groups.length, recipe.id);
    if (Number.isFinite(recipe.servings)) assert.equal(translated.servings, recipe.servings, recipe.id);
    const translatedIngredients = translated.groups.flatMap(group => group.ingredients);
    for (const [index, ingredient] of recipe.groups.flatMap(group => group.ingredients).entries()) {
      const localized = translatedIngredients[index];
      for (const field of ["grams", "gramRange", "gramVariants", "weightEstimate"]) {
        assert.deepEqual(localized[field], ingredient[field], `${recipe.id}/${ingredient.id}/${field}`);
      }
      if (Number.isFinite(ingredient.quantity)) assert.equal(localized.quantity, ingredient.quantity, recipe.id);
    }
    assert.deepEqual(
      Object.keys(copy.ingredients).sort(),
      recipe.groups.flatMap(group => group.ingredients.map(ingredient => ingredient.id)).sort(),
      recipe.id,
    );
    assert.deepEqual(Object.keys(copy.steps).sort(), recipe.steps.map(step => step.id).sort(), recipe.id);
    for (const original of recipe.steps) {
      const step = copy.steps[original.id];
      assert.ok(step.title && step.instructions.every(Boolean), `${recipe.id}/${original.id}`);
      assert.equal(step.instructions.length, original.instructions.length, `${recipe.id}/${original.id}`);
      assert.equal(step.timerLabels?.length ?? 0, original.timers?.length ?? 0, `${recipe.id}/${original.id} timers`);
    }
    if (recipe.nutrition) assert.deepEqual(nutritionPer100g(translated), nutritionPer100g(recipe));
  }
});

test("recipe links retain the selected language", () => {
  assert.equal(recipeHref("lemon-meringue-pie", "en"), "recipe.html?recipe=lemon-meringue-pie");
  assert.equal(recipeHref("lemon-meringue-pie", "fr"), "recipe.html?recipe=lemon-meringue-pie&lang=fr");
});

test("recipe plans preserve their step links and have complete translations", () => {
  function checkStages(stages, copy, localized, stepIds, path) {
    assert.ok(stages.length, path);
    assert.equal(copy?.length, stages.length, path);
    for (const [index, stage] of stages.entries()) {
      const key = `${path}/${index}`;
      assert.ok(stage.title && stage.detail, key);
      assert.ok(copy[index].title && copy[index].detail, key);
      assert.equal(localized[index].title, copy[index].title, key);
      assert.equal(localized[index].detail, copy[index].detail, key);
      assert.equal(localized[index].step, stage.step, key);
      if (stage.step) assert.ok(stepIds.has(stage.step), key);
      if (stage.branches) {
        checkStages(stage.branches, copy[index].branches, localized[index].branches, stepIds, key);
      }
    }
  }

  for (const recipe of recipes.filter(recipe => recipe.plan)) {
    const alternate = recipe.lang === "fr" ? "en" : "fr";
    const localized = recipeForLocale(recipe, alternate);
    const stepIds = new Set(recipe.steps.map(step => step.id));
    checkStages(recipe.plan, translations[recipe.id].plan, localized.plan, stepIds, recipe.id);
  }
});

test("instruction-linked timers have the same valid position and duration in both languages", () => {
  for (const recipe of recipes) {
    const alternate = recipe.lang === "fr" ? "en" : "fr";
    const localized = recipeForLocale(recipe, alternate);
    for (const [stepIndex, step] of recipe.steps.entries()) {
      for (const [timerIndex, timer] of (step.timers ?? []).entries()) {
        if (timer.afterInstruction === undefined) continue;
        const path = `${recipe.id}/${step.id}/${timerIndex}`;
        const translatedStep = localized.steps[stepIndex];
        const translatedTimer = translatedStep.timers[timerIndex];
        assert.ok(Number.isInteger(timer.afterInstruction), path);
        assert.ok(timer.afterInstruction >= 1 && timer.afterInstruction <= step.instructions.length, path);
        assert.ok(translatedStep.instructions[timer.afterInstruction - 1], path);
        assert.equal(translatedTimer.afterInstruction, timer.afterInstruction, path);
        assert.equal(translatedTimer.minutes, timer.minutes, path);
        assert.ok(translations[recipe.id].steps[step.id].timerLabels[timerIndex], path);
      }
    }
  }
});

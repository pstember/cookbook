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

function checkActions(stage, copy, localized, path) {
  for (const field of ["title", "heat", "wait", "timing"]) {
    if (!stage[field] && !copy[field]) continue;
    assert.ok(stage[field]?.trim() && copy[field]?.trim(), `${path}/${field}`);
    assert.equal(localized[field], copy[field], `${path}/${field}`);
  }
  assert.ok(stage.title?.trim(), path);
  assert.equal(copy.instructions.length, stage.instructions.length, path);
  assert.ok([...stage.instructions, ...copy.instructions].every(text => typeof text === "string" && text.trim()), path);
  assert.deepEqual(localized.instructions, copy.instructions, path);
  assert.ok(stage.instructions.length || stage.options?.length, path);

  const timers = stage.timers ?? [];
  assert.equal(localized.timers?.length ?? 0, timers.length, `${path}/timers`);
  for (const [index, timer] of timers.entries()) {
    const key = `${path}/timer-${index + 1}`;
    const translated = localized.timers[index];
    const translatedLabel = copy.timerLabels?.[index] ?? copy.timers?.[index]?.label;
    assert.ok(timer.label?.trim() && translatedLabel?.trim(), key);
    assert.equal(translated.label, translatedLabel, key);
    assert.ok(Number.isFinite(timer.minutes) && timer.minutes > 0, key);
    assert.ok(Number.isInteger(timer.afterInstruction), key);
    assert.ok(timer.afterInstruction >= 1 && timer.afterInstruction <= stage.instructions.length, key);
    assert.equal(translated.afterInstruction, timer.afterInstruction, key);
    assert.equal(translated.minutes, timer.minutes, key);
  }
}

test("stages and choices have matching bilingual actions, pills and instruction-linked timers", () => {
  for (const recipe of recipes) {
    const alternate = recipe.lang === "fr" ? "en" : "fr";
    const localized = recipeForLocale(recipe, alternate);
    const translated = translations[recipe.id];
    for (const [index, stage] of recipe.steps.entries()) {
      const copy = translated.steps[stage.id];
      const local = localized.steps[index];
      const path = `${recipe.id}/${stage.id}`;
      checkActions(stage, copy, local, path);
      const options = stage.options ?? [];
      assert.equal(copy.options?.length ?? 0, options.length, path);
      if (options.length) assert.ok(options.length >= 2, path);
      for (const [i, option] of options.entries()) {
        checkActions(option, copy.options[i], local.options[i], `${path}/option-${i + 1}`);
      }
    }
    for (const field of ["allergens", "setup"]) {
      if (field === "setup" && !recipe.setup && !translated.setup) continue;
      assert.ok(Array.isArray(recipe[field]), `${recipe.id}/${field}`);
      assert.equal(translated[field]?.length, recipe[field].length, `${recipe.id}/${field}`);
      assert.ok([...translated[field], ...recipe[field]].every(text => typeof text === "string" && text.trim()), recipe.id);
    }
    assert.deepEqual(Object.keys(translated.storage ?? {}).sort(), Object.keys(recipe.storage ?? {}).sort(), recipe.id);
    for (const [location, text] of Object.entries(recipe.storage ?? {})) {
      assert.ok(["counter", "fridge", "freezer"].includes(location), `${recipe.id}/storage/${location}`);
      assert.ok(text.trim() && translated.storage[location].trim(), `${recipe.id}/storage/${location}`);
    }
  }
});

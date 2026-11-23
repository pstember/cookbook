import assert from "node:assert/strict";
import test from "node:test";
import { recipes } from "../public/recipes/index.js";
import { recipeForLocale } from "../public/src/localization.js";
import { recipeHref } from "../public/src/recipe-links.js";
import { nutritionPer100g } from "../public/src/nutrition.js";

const languages = ["en", "fr"];

function checkText(record, field, path) {
  for (const language of languages) {
    assert.ok(record.copy[language][field]?.trim(), `${path}/${field} (${language})`);
  }
}

test("each recipe has bilingual titles, ingredients and shared quantities", () => {
  for (const recipe of recipes) {
    checkText(recipe, "title", recipe.id);
    checkText(recipe, "description", recipe.id);
    for (const group of recipe.groups) {
      checkText(group, "title", recipe.id);
      for (const ingredient of group.ingredients) {
        checkText(ingredient, "name", `${recipe.id}/${ingredient.id}`);
      }
    }

    for (const language of languages) {
      const localized = recipeForLocale(recipe, language);
      assert.equal(localized.lang, language === "fr" ? "fr" : "en-GB");
      assert.equal(localized.title, recipe.copy[language].title);
      assert.equal(localized.description, recipe.copy[language].description);
      if (Number.isFinite(recipe.servings)) assert.equal(localized.servings, recipe.servings, recipe.id);
      for (const [groupIndex, group] of recipe.groups.entries()) {
        const localizedGroup = localized.groups[groupIndex];
        assert.equal(localizedGroup.title, group.copy[language].title);
        for (const [index, ingredient] of group.ingredients.entries()) {
          const localizedIngredient = localizedGroup.ingredients[index];
          assert.equal(localizedIngredient.id, ingredient.id);
          assert.equal(localizedIngredient.name, ingredient.copy[language].name);
          for (const field of ["grams", "gramRange", "gramVariants", "weightEstimate"]) {
            assert.deepEqual(localizedIngredient[field], ingredient[field], `${recipe.id}/${ingredient.id}/${field}`);
          }
          if (Number.isFinite(ingredient.quantity)) assert.equal(localizedIngredient.quantity, ingredient.quantity);
        }
      }
      if (recipe.nutrition) assert.deepEqual(nutritionPer100g(localized), nutritionPer100g(recipe));
    }
  }
});

test("recipe links retain the selected language", () => {
  assert.equal(recipeHref("lemon-meringue-pie", "en"), "recipe.html?recipe=lemon-meringue-pie");
  assert.equal(recipeHref("lemon-meringue-pie", "fr"), "recipe.html?recipe=lemon-meringue-pie&lang=fr");
});

test("recipe plans preserve their step links and have complete translations", () => {
  function checkStages(stages, localized, language, stepIds, path) {
    assert.ok(stages.length, path);
    assert.equal(localized.length, stages.length, path);
    for (const [index, stage] of stages.entries()) {
      const key = `${path}/${index}`;
      for (const field of ["title", "detail"]) {
        checkText(stage, field, key);
        assert.equal(localized[index][field], stage.copy[language][field], key);
      }
      assert.equal(localized[index].step, stage.step, key);
      if (stage.step) assert.ok(stepIds.has(stage.step), key);
      if (stage.branches) {
        checkStages(stage.branches, localized[index].branches, language, stepIds, key);
      }
    }
  }

  for (const recipe of recipes.filter(recipe => recipe.plan)) {
    const stepIds = new Set(recipe.steps.map(step => step.id));
    for (const language of languages) {
      const localized = recipeForLocale(recipe, language);
      checkStages(recipe.plan, localized.plan, language, stepIds, recipe.id);
    }
  }
});

function checkActions(stage, localized, language, path) {
  for (const field of ["title", "heat", "wait", "timing"]) {
    if (field !== "title" && !languages.some(tag => stage.copy[tag][field])) continue;
    checkText(stage, field, path);
    assert.equal(localized[field], stage.copy[language][field], `${path}/${field}`);
  }
  const { en, fr } = stage.copy;
  assert.equal(en.instructions.length, fr.instructions.length, path);
  assert.ok([...en.instructions, ...fr.instructions].every(text => typeof text === "string" && text.trim()), path);
  assert.deepEqual(localized.instructions, stage.copy[language].instructions, path);
  assert.ok(en.instructions.length || stage.options?.length, path);

  const timers = stage.timers ?? [];
  assert.equal(localized.timers?.length ?? 0, timers.length, `${path}/timers`);
  for (const [index, timer] of timers.entries()) {
    const key = `${path}/timer-${index + 1}`;
    const translated = localized.timers[index];
    checkText(timer, "label", key);
    assert.equal(translated.label, timer.copy[language].label, key);
    assert.ok(Number.isFinite(timer.minutes) && timer.minutes > 0, key);
    assert.ok(Number.isInteger(timer.afterInstruction), key);
    assert.ok(timer.afterInstruction >= 1 && timer.afterInstruction <= en.instructions.length, key);
    assert.equal(translated.afterInstruction, timer.afterInstruction, key);
    assert.equal(translated.minutes, timer.minutes, key);
  }
}

test("stages and choices have matching bilingual actions, pills and instruction-linked timers", () => {
  for (const recipe of recipes) {
    const en = recipeForLocale(recipe, "en");
    const fr = recipeForLocale(recipe, "fr");
    for (const [index, stage] of recipe.steps.entries()) {
      const path = `${recipe.id}/${stage.id}`;
      const options = stage.options ?? [];
      if (options.length) assert.ok(options.length >= 2, path);
      for (const [language, localized] of [["en", en], ["fr", fr]]) {
        const local = localized.steps[index];
        checkActions(stage, local, language, path);
        assert.equal(local.id, stage.id, path);
        assert.deepEqual(local.uses, stage.uses, path);
        assert.deepEqual(local.duration, stage.duration, path);
        assert.equal(local.options?.length ?? 0, options.length, path);
        for (const [i, option] of options.entries()) {
          checkActions(option, local.options[i], language, `${path}/option-${i + 1}`);
        }
      }
    }
    for (const field of ["allergens", "setup"]) {
      if (field === "setup" && !en.setup && !fr.setup) continue;
      assert.ok(Array.isArray(en[field]), `${recipe.id}/${field}`);
      assert.equal(fr[field]?.length, en[field].length, `${recipe.id}/${field}`);
      assert.ok([...en[field], ...fr[field]].every(text => typeof text === "string" && text.trim()), recipe.id);
    }
    assert.deepEqual(Object.keys(fr.storage ?? {}).sort(), Object.keys(en.storage ?? {}).sort(), recipe.id);
    for (const [location, text] of Object.entries(en.storage ?? {})) {
      assert.ok(["counter", "fridge", "freezer"].includes(location), `${recipe.id}/storage/${location}`);
      assert.ok(text.trim() && fr.storage[location].trim(), `${recipe.id}/storage/${location}`);
    }
  }
});

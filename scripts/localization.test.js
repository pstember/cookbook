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
      assert.equal(localized.grams, ingredient.grams, `${recipe.id}/${ingredient.id}`);
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

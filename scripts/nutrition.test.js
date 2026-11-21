import assert from "node:assert/strict";
import test from "node:test";
import { recipes } from "../public/recipes/index.js";
import { nutritionPer100g } from "../public/src/nutrition.js";

test("nutrition uses the finished batch weight and ignores the serving count", () => {
  const recipe = {
    servings: 2,
    groups: [{ ingredients: [{ id: "sugar", food: "sugar", grams: 40 }, { id: "water", food: "water", grams: 120 }] }],
    nutrition: { finishedWeightGrams: 125 },
  };
  const estimates = nutritionPer100g(recipe);
  assert.equal(estimates.sugars, 32);
  assert.equal(estimates.kcal, 128);
  assert.deepEqual(nutritionPer100g({ ...recipe, servings: 4 }), estimates);
});

test("registered recipes with nutrition have finite values and a finished yield", () => {
  for (const recipe of recipes.filter(entry => entry.nutrition)) {
    const values = nutritionPer100g(recipe);
    assert.ok(Object.values(values).every(value => Number.isFinite(value) && value >= 0), recipe.id);
    assert.ok(values.sugars <= values.carbs, recipe.id);
    assert.ok(values.saturates <= values.fat, recipe.id);
  }
});

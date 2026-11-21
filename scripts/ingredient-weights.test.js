import assert from "node:assert/strict";
import test from "node:test";
import { recipes } from "../public/recipes/index.js";
import { recipeForLocale } from "../public/src/localization.js";

const isPositiveWeight = value => Number.isFinite(value) && value > 0;

function checkWeight(ingredient, label) {
  const { grams, gramRange, gramVariants, weightEstimate } = ingredient;
  assert.equal(
    [grams, gramRange, gramVariants].filter(value => value !== undefined).length,
    1,
    `${label} needs exactly one gram amount, range or set of variants`,
  );
  if (grams !== undefined) assert.ok(isPositiveWeight(grams), `${label} has invalid grams`);
  if (gramRange !== undefined) {
    assert.ok(
      Array.isArray(gramRange) && gramRange.length === 2 &&
        Number.isFinite(gramRange[0]) && gramRange[0] >= 0 &&
        isPositiveWeight(gramRange[1]) && gramRange[0] < gramRange[1],
      `${label} has an invalid gram range`,
    );
  }
  if (gramVariants !== undefined) {
    assert.ok(
      Array.isArray(gramVariants) && gramVariants.length >= 2 && gramVariants.every(isPositiveWeight),
      `${label} has invalid gram variants`,
    );
  }
  if (weightEstimate !== undefined) assert.equal(typeof weightEstimate, "boolean", label);
}

test("every ingredient has a gram weight in both languages", () => {
  for (const recipe of recipes) {
    for (const language of ["en", "fr"]) {
      const localized = recipeForLocale(recipe, language);
      for (const group of localized.groups ?? []) {
        for (const ingredient of group.ingredients) {
          checkWeight(ingredient, `${recipe.id}/${ingredient.id} (${language})`);
        }
      }
    }
  }
});

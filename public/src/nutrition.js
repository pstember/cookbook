import { foodData } from "../recipes/nutrition-data.js";

export function nutritionPer100g(recipe) {
  const nutrients = ["kj", "kcal", "fat", "saturates", "carbs", "sugars", "fibre", "protein", "salt"];
  const ingredients = recipe.groups.flatMap(group => group.ingredients);
  const finishedWeight = recipe.nutrition.finishedWeightGrams;
  if (!Number.isFinite(finishedWeight) || finishedWeight <= 0) {
    throw new Error("Nutrition requires a positive finished weight in grams.");
  }

  return Object.fromEntries(nutrients.map(nutrient => {
    const total = ingredients.reduce((sum, ingredient) => {
      const value = foodData[ingredient.food]?.[nutrient];
      if (!Number.isFinite(value) || !Number.isFinite(ingredient.grams)) {
        throw new Error(`Missing ${nutrient} data or ingredient weight for ${ingredient.id}.`);
      }
      return sum + value * ingredient.grams / 100;
    }, 0);
    return [nutrient, total * 100 / finishedWeight];
  }));
}

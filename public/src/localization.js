import savoury from "../translations/savoury.js";
import pastry from "../translations/pastry.js";
import cakes from "../translations/cakes.js";
import other from "../translations/other.js";

export const translations = { ...savoury, ...pastry, ...cakes, ...other };

export const locale = new URLSearchParams(globalThis.location?.search).get("lang") === "fr" ? "fr" : "en";
export const ui = (english, french) => locale === "fr" ? french : english;

const frenchCategories = new Map([
  ["Main dishes", "Plats principaux"],
  ["Sides", "Accompagnements"],
  ["Breakfast & brunch", "Petits-déjeuners et brunchs"],
  ["Baking basics", "Bases de pâtisserie"],
  ["Desserts", "Desserts"],
]);

export function categoryLabel(category, language = locale) {
  return language === "fr" ? frenchCategories.get(category) ?? category : category;
}

export function catalogueHref(language = locale) {
  return language === "fr" ? "./?lang=fr" : "./";
}

export function recipeForLocale(recipe, language = locale) {
  const original = recipe.lang === "fr" ? "fr" : "en";
  const translation = translations[recipe.id];
  if (original === language || !translation) return recipe;

  const { groupTitles, ingredients, steps, times, batchTins, safety, source, nutrition, image, ...text } = translation;
  const result = { ...recipe, ...text, lang: language === "fr" ? "fr" : "en-GB" };
  if (recipe.groups) {
    result.groups = recipe.groups.map((group, index) => ({
      ...group,
      title: groupTitles?.[index] ?? group.title,
      ingredients: group.ingredients.map(ingredient => ({ ...ingredient, ...ingredients?.[ingredient.id] })),
    }));
  }
  if (recipe.steps) {
    result.steps = recipe.steps.map(step => {
      const { timerLabels, ...copy } = steps?.[step.id] ?? {};
      return {
        ...step,
        ...copy,
        timers: step.timers?.map((timer, index) => ({ ...timer, label: timerLabels?.[index] ?? timer.label })),
      };
    });
  }
  if (recipe.times) result.times = recipe.times.map((time, index) => ({ ...time, ...times?.[index] }));
  if (recipe.batches) result.batches = recipe.batches.map((batch, index) => ({ ...batch, tins: batchTins?.[index] ?? batch.tins }));
  if (recipe.source) result.source = { ...recipe.source, ...source };
  if (recipe.nutrition) result.nutrition = { ...recipe.nutrition, ...nutrition };
  if (recipe.image) result.image = { ...recipe.image, ...image };
  if (recipe.safety && safety) {
    result.safety = {
      ...recipe.safety,
      title: safety.title,
      notes: safety.notes,
      sources: recipe.safety.sources?.map((entry, index) => ({
        ...entry,
        label: safety.sourceLabels?.[index] ?? entry.label,
      })),
    };
  }
  return result;
}

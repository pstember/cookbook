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

function localize(value, language) {
  if (Array.isArray(value)) return value.map(item => localize(item, language));
  if (value === null || typeof value !== "object") return value;

  const { copy, ...shared } = value;
  return {
    ...Object.fromEntries(Object.entries(shared).map(([key, entry]) => [key, localize(entry, language)])),
    ...copy?.[language],
  };
}

export function recipeForLocale(recipe, language = locale) {
  const { $schema, schemaVersion, ...fields } = recipe;
  return { ...localize(fields, language), lang: language === "fr" ? "fr" : "en-GB" };
}

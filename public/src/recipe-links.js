import { locale } from "./localization.js";

export function recipeHref(id, language = locale) {
  const query = new URLSearchParams({ recipe: id });
  if (language === "fr") query.set("lang", "fr");
  return `recipe.html?${query}`;
}

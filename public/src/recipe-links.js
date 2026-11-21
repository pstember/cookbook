export function recipeHref(id) {
  return `recipe.html?${new URLSearchParams({ recipe: id })}`;
}

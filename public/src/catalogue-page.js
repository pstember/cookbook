import { recipes } from "../recipes/index.js";
import { recipeHref } from "./recipe-links.js";

const categoryStyles = new Map([
  ["Main dishes", { tone: "green", art: "saucepan" }],
  ["Sides", { tone: "blue", art: "salad" }],
  ["Breakfast & brunch", { tone: "oat", art: "toast" }],
  ["Baking basics", { tone: "yellow", art: "rolling" }],
  ["Desserts", { tone: "pink", art: "pie" }],
]);

const legacyAnchors = new Set(["#recipe", "#ingredients", "#method", "#pregnancy-safety", "#nutrition"]);
const { search, hash } = window.location;
const requestedRecipe = new URLSearchParams(search).get("recipe");
const recipeHash = hash === "#pregnancy-safety" ? "#method" : hash;

if (requestedRecipe !== null) {
  window.location.replace(recipeHref(requestedRecipe) + recipeHash);
} else if (legacyAnchors.has(hash)) {
  window.location.replace(recipeHref("lemon-meringue-pie") + recipeHash);
} else {
  renderCatalogue();
}

function searchText(value) {
  return value.normalize("NFKD").replace(/\p{Diacritic}/gu, "").toLowerCase().replaceAll("œ", "oe").replaceAll("æ", "ae");
}

function renderCatalogue() {
  const tools = document.getElementById("catalogue-tools");
  const field = document.getElementById("recipe-search");
  const filters = document.getElementById("catalogue-filters");
  const results = document.getElementById("catalogue-results");
  const catalogue = document.getElementById("catalogue-groups");
  const empty = document.getElementById("catalogue-empty");
  const cardTemplate = document.getElementById("recipe-card-template");
  const categories = new Map();
  let selected = "";

  for (const recipe of recipes) {
    if (!categories.has(recipe.category)) categories.set(recipe.category, { entries: [] });
    const ingredients = (recipe.groups ?? []).flatMap(group => group.ingredients ?? []);
    const keywords = searchText([
      recipe.title, recipe.category, recipe.qualifier, recipe.description,
      ...ingredients.map(ingredient => ingredient.name),
    ].join(" "));
    categories.get(recipe.category).entries.push({ recipe, keywords });
  }

  const orderedCategories = [...new Set([...categoryStyles.keys(), ...categories.keys()])]
    .filter(category => categories.has(category));

  for (const category of orderedCategories) {
    const group = categories.get(category);
    const { tone, art } = categoryStyles.get(category) ?? { tone: "blue", art: "saucepan" };
    const section = document.createElement("section");
    section.className = `catalogue-category tone-${tone}`;
    group.section = section;
    const title = document.createElement("h3");
    title.textContent = category;
    const list = document.createElement("ul");
    list.className = "catalogue-grid";

    for (const entry of group.entries) {
      const { recipe } = entry;
      const card = cardTemplate.content.cloneNode(true);
      card.querySelector(".catalogue-card-link").href = recipeHref(recipe.id);
      if (recipe.lang) card.querySelector(".catalogue-card-copy").lang = recipe.lang;
      const artwork = card.querySelector(".catalogue-card-art");
      artwork.querySelector("use").setAttribute("href", `assets/illustrations/icons.svg#art-${art}`);
      if (recipe.image?.src) {
        const media = card.querySelector(".catalogue-card-image");
        media.addEventListener("error", () => {
          media.hidden = true;
          artwork.removeAttribute("hidden");
        }, { once: true });
        media.src = recipe.image.src;
        media.hidden = false;
        artwork.setAttribute("hidden", "");
      }
      card.querySelector(".catalogue-card-title").textContent = recipe.title;
      const description = card.querySelector(".catalogue-card-description");
      description.textContent = recipe.description ?? "";
      description.hidden = !recipe.description;
      const qualifier = card.querySelector(".catalogue-card-qualifier");
      qualifier.textContent = recipe.qualifier ?? "";
      qualifier.hidden = !recipe.qualifier;
      entry.card = card.firstElementChild;
      list.append(card);
    }

    section.append(title, list);
    catalogue.append(section);
  }

  function updateResults() {
    const query = searchText(field.value.trim()).split(/\s+/).filter(Boolean);
    let count = 0;

    for (const [category, { section, entries }] of categories) {
      let categoryCount = 0;
      for (const { card, keywords } of entries) {
        const isMatch = (!selected || selected === category) && query.every(word => keywords.includes(word));
        card.hidden = !isMatch;
        if (isMatch) categoryCount += 1;
      }
      section.hidden = categoryCount === 0;
      count += categoryCount;
    }

    const countText = count === 1 ? "1 recipe" : `${count} recipes`;
    results.textContent = count ? countText : "No matching recipes";
    empty.hidden = count > 0 || recipes.length === 0;
  }

  function selectCategory(category) {
    selected = category;
    for (const button of filters.children) {
      button.setAttribute("aria-pressed", String(button.value === selected));
    }
    updateResults();
  }

  filters.hidden = categories.size < 2;
  if (categories.size > 1) {
    for (const category of ["", ...orderedCategories]) {
      const button = document.createElement("button");
      button.className = "button";
      button.type = "button";
      button.value = category;
      button.textContent = category || "All recipes";
      button.setAttribute("aria-pressed", String(!category));
      button.addEventListener("click", () => selectCategory(category));
      filters.append(button);
    }
  }

  document.getElementById("reset-catalogue").addEventListener("click", () => {
    field.value = "";
    selectCategory("");
    field.focus();
  });
  field.addEventListener("input", updateResults);
  tools.hidden = recipes.length === 0;
  updateResults();
}

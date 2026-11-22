import { recipes } from "../recipes/index.js";
import { catalogueHref, categoryLabel, locale, recipeForLocale, ui } from "./localization.js";
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
  localizeCatalogue();
  renderCatalogue();
}

function localizeCatalogue() {
  const copy = {
    brand: ui("The Little Cookbook", "Le petit livre de cuisine"),
    skip: ui("Skip to the recipe index", "Aller au répertoire des recettes"),
    index: ui("Recipe index", "Répertoire des recettes"),
    heroStart: ui("The Little", "Le petit livre"),
    heroEnd: ui(" Cookbook", " de cuisine"),
    intro: ui("Find your next recipe and keep your place as you cook.", "Trouvez une recette et suivez-la à votre rythme."),
    browse: ui("Browse recipes", "Voir les recettes"),
    searchLabel: ui("Search by recipe or ingredient", "Chercher par recette ou ingrédient"),
    emptyHelp: ui("Try another ingredient or clear the filters to see all recipes.", "Essayez un autre ingrédient ou effacez les filtres pour voir toutes les recettes."),
    clear: ui("Clear filters", "Effacer les filtres"),
  };

  document.documentElement.lang = ui("en-GB", "fr");
  document.title = copy.brand;
  document.querySelector('meta[name="description"]').content = ui(
    "Browse The Little Cookbook, an illustrated collection of recipes with step-by-step methods.",
    "Parcourez Le petit livre de cuisine, un recueil illustré de recettes expliquées pas à pas.",
  );
  for (const node of document.querySelectorAll("[data-copy]")) {
    node.textContent = copy[node.dataset.copy];
  }
  document.getElementById("catalogue-home").href = catalogueHref();
  document.getElementById("recipe-search").placeholder = ui("Recipe or ingredient", "Recette ou ingrédient");
  document.getElementById("catalogue-filters").setAttribute("aria-label", ui("Filter by category", "Filtrer par catégorie"));
  document.querySelector(".language-switch").setAttribute("aria-label", ui("Language", "Langue"));

  function updateLanguageLinks() {
    const section = window.location.hash === "#recipes" ? "#recipes" : "";
    for (const code of ["en", "fr"]) {
      const link = document.getElementById(`language-${code}`);
      link.href = catalogueHref(code) + section;
      if (locale === code) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    }
  }

  updateLanguageLinks();
  window.addEventListener("hashchange", updateLanguageLinks);
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

  for (const original of recipes) {
    const recipe = recipeForLocale(original);
    const alternate = recipeForLocale(original, locale === "fr" ? "en" : "fr");
    if (!categories.has(recipe.category)) categories.set(recipe.category, { entries: [] });
    const words = [recipe.category, categoryLabel(recipe.category, "fr")];
    for (const copy of [recipe, alternate]) {
      words.push(copy.title, copy.qualifier, copy.description);
      for (const group of copy.groups ?? []) {
        words.push(...(group.ingredients ?? []).map(ingredient => ingredient.name));
      }
    }
    categories.get(recipe.category).entries.push({ recipe, keywords: searchText(words.join(" ")) });
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
    title.textContent = categoryLabel(category);
    const list = document.createElement("ul");
    list.className = "catalogue-grid";

    for (const entry of group.entries) {
      const { recipe } = entry;
      const card = cardTemplate.content.cloneNode(true);
      card.querySelector(".catalogue-card-link").href = recipeHref(recipe.id);
      if (recipe.lang) card.querySelector(".catalogue-card-copy").lang = recipe.lang;
      const artwork = card.querySelector(".catalogue-card-art");
      artwork.querySelector("use").setAttribute("href", `assets/illustrations/icons.svg#art-${art}`);
      const thumbnail = recipe.thumbnail ?? recipe.image?.src;
      if (thumbnail) {
        const media = card.querySelector(".catalogue-card-image");
        media.addEventListener("error", () => {
          media.hidden = true;
          artwork.removeAttribute("hidden");
        }, { once: true });
        media.src = thumbnail;
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

    const countText = count === 1 ? ui("1 recipe", "1 recette") : ui(`${count} recipes`, `${count} recettes`);
    results.textContent = count ? countText : ui("No matching recipes", "Aucune recette trouvée");
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
      button.textContent = category ? categoryLabel(category) : ui("All recipes", "Toutes les recettes");
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

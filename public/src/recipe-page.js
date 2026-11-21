import { recipes } from "../recipes/index.js";
import { foodData } from "../recipes/nutrition-data.js";
import { catalogueHref, categoryLabel, locale, recipeForLocale, ui } from "./localization.js";
import { nutritionPer100g } from "./nutrition.js";
import { recipeHref } from "./recipe-links.js";
import { renderStepIllustration } from "./step-illustration.js";
import { addTimer } from "./timers.js";

const recipeId = new URLSearchParams(window.location.search).get("recipe");
const originalRecipe = recipes.find(entry => entry.id === recipeId);
const languageTag = ui("en-GB", "fr");
const bookTitle = ui("The Little Cookbook", "Le petit livre de cuisine");
const iconsPath = "assets/illustrations/icons.svg";
const svgNamespace = "http://www.w3.org/2000/svg";
const byId = id => document.getElementById(id);

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function icon(name, className = "icon") {
  const svg = document.createElementNS(svgNamespace, "svg");
  const use = document.createElementNS(svgNamespace, "use");
  svg.setAttribute("class", className);
  svg.setAttribute("aria-hidden", "true");
  use.setAttribute("href", `${iconsPath}#${name}`);
  svg.append(use);
  return svg;
}

function sourceLink({ label, url }) {
  const text = label || url;
  if (!/^https?:\/\//i.test(url ?? "")) return document.createTextNode(text);
  const link = element("a", null, text);
  link.href = url;
  return link;
}

function localizePage() {
  document.documentElement.lang = languageTag;
  if (locale === "fr") {
    for (const node of document.querySelectorAll("[data-fr]")) node.textContent = node.dataset.fr;
    for (const node of document.querySelectorAll("[data-fr-aria-label]")) {
      node.setAttribute("aria-label", node.dataset.frAriaLabel);
    }
    document.querySelector('meta[name="description"]').content = "Un livre de cuisine illustré avec des listes d’ingrédients à cocher et des recettes pas à pas.";
  }
  for (const link of document.querySelectorAll("[data-catalogue-link]")) {
    link.href = catalogueHref() + link.dataset.catalogueLink;
  }

  const switcher = byId("recipe-language");
  const links = [...switcher.querySelectorAll("a")];
  function updateLanguageLinks() {
    for (const link of links) link.href = recipeHref(recipeId ?? "", link.hreflang) + window.location.hash;
  }
  links.find(link => link.hreflang === locale).setAttribute("aria-current", "page");
  updateLanguageLinks();
  window.addEventListener("hashchange", updateLanguageLinks);
  switcher.hidden = false;
}

localizePage();
if (originalRecipe) {
  renderRecipe(recipeForLocale(originalRecipe));
} else {
  document.title = `${ui("Recipe unavailable", "Recette indisponible")} | ${bookTitle}`;
  byId("recipe-unavailable").hidden = false;
}

function renderRecipe(recipe) {
  const storageKey = `cookbook:${recipe.id}:v1`;
  const article = byId("recipe-content");
  const number = new Intl.NumberFormat(languageTag, { maximumFractionDigits: 8 });
  const groups = (recipe.groups ?? []).filter(group => group.ingredients?.length);
  const steps = recipe.steps ?? [];
  const batches = Number.isFinite(recipe.servings) && recipe.servings > 0 ? recipe.batches ?? [] : [];
  const canScale = batches.length > 1;

  function restoreProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));
      if (saved && typeof saved === "object") return saved;
    } catch {
      // The page remains usable with browser storage disabled.
    }
    return {};
  }

  const saved = restoreProgress();
  const state = {
    servings: canScale && batches.some(batch => batch.servings === saved.servings) ? saved.servings : recipe.servings,
    ingredients: new Set(Array.isArray(saved.ingredients) ? saved.ingredients : []),
    steps: new Set(Array.isArray(saved.steps) ? saved.steps : []),
  };
  const ingredientRows = [];
  const stepRows = [];

  function saveProgress() {
    try {
      localStorage.setItem(storageKey, JSON.stringify({
        servings: state.servings,
        ingredients: [...state.ingredients],
        steps: [...state.steps],
      }));
    } catch {
      // Current progress remains available until the page closes.
    }
  }

  function updateCheck(set, id, checked) {
    if (checked) set.add(id);
    else set.delete(id);
    saveProgress();
  }

  function renderHero() {
    const fullTitle = [recipe.qualifier, recipe.title].filter(Boolean).join(" ");
    document.title = `${fullTitle} | ${bookTitle}`;
    byId("recipe-category").textContent = categoryLabel(recipe.category);
    const title = byId("recipe-title");
    if (recipe.qualifier) {
      const badge = element("span", "hero-badge");
      badge.append(icon("sparkle"), element("span", null, recipe.qualifier));
      title.append(badge, document.createTextNode(" "));
    }
    title.append(element("span", "hero-title", recipe.title));
    if (recipe.description) {
      document.querySelector('meta[name="description"]').content = recipe.description;
      const description = byId("recipe-description");
      description.textContent = recipe.description;
      description.hidden = false;
    }
    if (recipe.image?.src) {
      const image = byId("recipe-image");
      image.src = recipe.image.src;
      image.alt = recipe.image.alt ?? "";
      image.hidden = false;
    } else {
      byId("recipe-hero-panel").classList.add("hero--text-only");
    }
    const entries = [...(recipe.times ?? [])];
    if (state.servings != null) {
      entries.push({ label: ui("Serves", "Portions"), value: state.servings, icon: "servings", isServings: true });
    } else if (recipe.yield) {
      entries.push({ label: ui("Yield", "Quantité"), value: recipe.yield, icon: "servings" });
    }
    const facts = byId("recipe-facts");
    facts.hidden = !entries.length;
    facts.style.setProperty("--fact-count", Math.min(entries.length, 4));
    for (const fact of entries) {
      const row = element("div", "fact");
      const value = element("dd", null, typeof fact.value === "number" ? number.format(fact.value) : fact.value);
      if (fact.isServings) {
        value.id = "hero-servings";
        value.setAttribute("aria-live", "polite");
      }
      const label = element("dt", null, fact.label);
      label.prepend(icon(fact.icon ?? "clock", "fact-icon"));
      row.append(label, value);
      facts.append(row);
    }
  }

  function renderIngredients() {
    if (!groups.length) return;
    const grid = byId("ingredient-groups");
    grid.classList.toggle("ingredient-grid--single", groups.length === 1);
    for (const group of groups) {
      const card = element(group.title ? "section" : "div", `ingredient-card tone-${group.tone ?? "yellow"}`);
      if (group.title || group.art) {
        const heading = element("header", "ingredient-card-head");
        if (group.title) heading.append(element("h3", null, group.title));
        if (group.art) heading.append(icon(`art-${group.art}`, "ingredient-art"));
        card.append(heading);
      }
      const list = element("ul", "ingredient-list");
      list.setAttribute("role", "list");
      for (const ingredient of group.ingredients) {
        const row = element("li");
        const label = element("label", "ingredient");
        const checkbox = element("input", "check");
        checkbox.type = "checkbox";
        checkbox.checked = state.ingredients.has(ingredient.id);
        const amount = element("span", "amount");
        const description = element("span", "ingredient-name", ingredient.name);
        const note = element("small", "ingredient-note");
        description.append(note);
        label.append(checkbox, amount, description);
        row.append(label);
        list.append(row);
        ingredientRows.push({ ingredient, label, amount, note, checkbox });
        checkbox.addEventListener("change", () => {
          updateCheck(state.ingredients, ingredient.id, checkbox.checked);
          updateClearIngredients();
        });
      }
      card.append(list);
      grid.append(card);
    }

    if (canScale) {
      const select = byId("servings");
      for (const batch of batches) {
        select.add(new Option(number.format(batch.servings), batch.servings, false, batch.servings === state.servings));
      }
      select.addEventListener("change", () => {
        state.servings = Number(select.value);
        updateBatch();
        saveProgress();
      });
      byId("servings-picker").hidden = false;
    }
    byId("clear-ingredients").addEventListener("click", () => {
      ingredientRows.forEach(({ checkbox }) => { checkbox.checked = false; });
      state.ingredients.clear();
      saveProgress();
      if (ingredientRows.length) ingredientRows[0].checkbox.focus();
      updateClearIngredients();
    });
    updateClearIngredients();
    byId("ingredients").hidden = false;
  }

  function updateClearIngredients() {
    byId("clear-ingredients").disabled = ingredientRows.every(({ checkbox }) => !checkbox.checked);
  }

  function renderSteps() {
    if (!steps.length) return;
    const list = byId("recipe-steps");
    for (const [index, step] of steps.entries()) {
      const item = element("li", `step-card tone-${step.tone ?? "yellow"}`);
      const top = element("div", "step-top");
      const stepNumber = number.format(index + 1);
      const badge = element("span", "step-number", stepNumber);
      badge.setAttribute("aria-hidden", "true");
      const label = element("label", "step-check");
      const checkbox = element("input", "check");
      checkbox.type = "checkbox";
      const stepLabel = ui(`Step ${stepNumber}`, `Étape ${stepNumber}`);
      checkbox.setAttribute("aria-label", ui(`Mark step ${stepNumber} complete`, `Marquer l’étape ${stepNumber} comme terminée`));
      checkbox.checked = state.steps.has(step.id);
      const done = element("span", "step-check-text");
      label.append(checkbox, done);
      top.append(badge, label);

      item.append(top);
      const illustration = renderStepIllustration(recipe.id, step.id);
      if (step.title || step.timing || step.art) {
        const heading = element("div", "step-heading");
        const copy = element("div");
        if (step.title) copy.append(element("h3", null, step.title));
        if (step.timing) {
          const timing = element("p", "step-timing");
          timing.append(icon("clock"), element("span", null, step.timing));
          copy.append(timing);
        }
        heading.append(copy);
        if (step.art && !illustration) heading.append(icon(`art-${step.art}`, "step-art"));
        item.append(heading);
      }

      if (illustration) item.append(illustration);
      const instructions = step.instructions.map(() => element("p"));
      const body = element("div", "step-body");
      body.append(...instructions);
      if (step.tip) {
        const tip = element("p", "step-tip");
        const label = element("strong", null, ui("Tip", "Astuce"));
        tip.append(label, document.createTextNode(` ${step.tip}`));
        body.append(tip);
      }
      item.append(body);

      if (step.timers?.length) {
        const timers = element("div", "timers");
        for (const timer of step.timers) addTimer(timers, step.title ?? stepLabel, timer, icon("clock"));
        item.append(timers);
      }

      stepRows.push({ step, instructions, checkbox });
      function updateStep() {
        item.classList.toggle("is-complete", checkbox.checked);
        done.textContent = checkbox.checked ? ui("Done", "Terminée") : ui("Mark done", "Cocher");
      }
      updateStep();
      checkbox.addEventListener("change", () => {
        updateCheck(state.steps, step.id, checkbox.checked);
        updateStep();
        updateStepProgress();
      });
      list.append(item);
    }
    if (steps.some(step => step.timers?.length)) {
      byId("method-intro").textContent = ui("Mark each step when it’s done, and use the timers if you like.", "Cochez chaque étape une fois terminée. Utilisez les minuteurs si vous le souhaitez.");
    }
    byId("step-progress").max = steps.length;
    updateStepProgress();
    byId("method").hidden = false;
  }

  function updateStepProgress() {
    const completed = stepRows.filter(({ checkbox }) => checkbox.checked).length;
    const count = number.format(completed);
    const total = number.format(steps.length);
    byId("step-count").textContent = ui(`${count} of ${total} complete`, `${count} ${completed > 1 ? "étapes terminées" : "étape terminée"} sur ${total}`);
    byId("step-progress").value = completed;
  }

  function formatGramAmount(ingredient, scale) {
    const format = value => number.format(value * scale);
    const prefix = ingredient.weightEstimate ? "≈ " : "";
    if (ingredient.grams != null) return `${prefix}${format(ingredient.grams)} g`;
    if (ingredient.gramRange) return `${prefix}${ingredient.gramRange.map(format).join("–")}\u00a0g`;
    if (ingredient.gramVariants) return `${prefix}${ingredient.gramVariants.map(format).join(" / ")}\u00a0g`;
    return "";
  }

  function formatSourceAmount(ingredient, scale) {
    const { quantity, unit } = ingredient;
    if (quantity == null) return "";
    const measure = typeof quantity === "number" ? number.format(quantity * scale) : quantity;
    return unit ? `${measure} ${unit}` : measure;
  }

  function originalMeasureNote(ingredient, sourceAmount) {
    if (!sourceAmount) return "";
    const { quantity, unit } = ingredient;
    const gramUnit = /^(?:g|grams?|grammes?)$/i.test(unit?.trim() ?? "");
    if (gramUnit && (typeof quantity === "number" || /^[\d.,\s/–-]+$/.test(quantity))) return "";
    if (!unit && typeof quantity === "number") {
      const name = locale === "fr" ? ingredient.name.replace(/^(?:d[’']|de |du |des )/i, "") : ingredient.name;
      return `${sourceAmount} ${name}`;
    }
    return sourceAmount;
  }

  function updateBatch() {
    const batch = batches.find(entry => entry.servings === state.servings);
    const scale = canScale ? state.servings / recipe.servings : 1;
    const servings = byId("hero-servings");
    if (servings) servings.textContent = typeof state.servings === "number" ? number.format(state.servings) : state.servings;
    for (const { ingredient, label, amount, note } of ingredientRows) {
      const grams = formatGramAmount(ingredient, scale);
      const sourceAmount = formatSourceAmount(ingredient, scale);
      amount.textContent = grams || sourceAmount;
      amount.hidden = !amount.textContent;
      label.classList.toggle("ingredient--unmeasured", amount.hidden);
      let detail = ingredient.note ?? "";
      if (ingredient.eggGrams) {
        const count = ingredient.grams * scale / ingredient.eggGrams;
        if (Number.isInteger(count)) {
          const eggName = count === 1 ? ingredient.eggName : ingredient.eggPlural ?? ingredient.eggNamePlural ?? `${ingredient.eggName}s`;
          detail = ui(`about ${number.format(count)} ${eggName}`, `environ ${number.format(count)} ${eggName}`);
        }
      }
      const original = grams ? originalMeasureNote(ingredient, sourceAmount) : "";
      note.textContent = [...new Set([original, detail].filter(Boolean))].join(" · ");
      note.hidden = !note.textContent;
    }
    for (const { step, instructions } of stepRows) {
      step.instructions.forEach((text, index) => {
        instructions[index].textContent = batch?.tins ? text.replaceAll("{tins}", batch.tins) : text;
      });
    }
    const notes = byId("ingredient-notes");
    notes.replaceChildren();
    if (batch?.tins) {
      const pan = element("p");
      const count = number.format(state.servings);
      pan.append(
        element("strong", null, ui(`For ${count} servings`, `Pour ${count} ${state.servings === 1 ? "portion" : "portions"}`)),
        document.createTextNode(ui(`, use ${batch.tins}.`, `, utiliser ${batch.tins}.`)),
      );
      notes.append(pan);
    }
    if (recipe.ingredientTip) notes.append(element("p", null, recipe.ingredientTip));
  }

  function renderNotes() {
    if (!recipe.notes?.length) return;
    byId("recipe-notes-copy").append(...recipe.notes.map(note => element("p", null, note)));
    byId("recipe-notes").hidden = false;
  }

  function renderSafety() {
    if (!recipe.safety?.notes?.length) return;
    const section = byId("food-safety");
    const heading = element("div", "safety-heading");
    const symbol = element("span", "safety-icon");
    symbol.append(icon("heart"));
    const title = element("h2", null, recipe.safety.title ?? ui("Food safety", "Sécurité alimentaire"));
    title.id = "safety-title";
    heading.append(symbol, title);

    const notes = element("div", "safety-notes");
    for (const note of recipe.safety.notes) {
      const entry = element("div");
      if (note.title) entry.append(element("h3", null, note.title));
      entry.append(element("p", null, note.text));
      notes.append(entry);
    }
    section.append(heading, notes);

    if (recipe.safety.sources?.length) {
      const sources = element("ul", "source-links");
      for (const source of recipe.safety.sources) {
        const item = element("li");
        item.append(sourceLink(source));
        sources.append(item);
      }
      section.append(sources);
    }
    section.hidden = false;
  }

  function renderRelated() {
    if (!recipe.related?.length) return;
    const list = byId("related-recipes-list");
    for (const { id } of recipe.related) {
      const related = recipes.find(entry => entry.id === id);
      if (!related) continue;
      const item = element("li");
      const link = element("a", null, recipeForLocale(related).title);
      link.href = recipeHref(id);
      item.append(link);
      list.append(item);
    }
    byId("related-recipes").hidden = !list.childElementCount;
  }

  function renderSource() {
    if (!recipe.source?.label && !recipe.source?.url) return;
    const source = byId("recipe-source-copy");
    if (recipe.source.credit) source.append(`${recipe.source.credit} `);
    source.append(sourceLink(recipe.source));
    byId("recipe-source").hidden = false;
  }

  function renderNutrition() {
    if (!recipe.nutrition) return;
    const values = nutritionPer100g(recipe);
    const formatNutrient = (value, digits) => value.toLocaleString(languageTag, {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    });
    const table = element("table", "nutrition-table");
    const caption = element("caption", "visually-hidden", ui("Estimated nutrition per 100 g of finished food", "Valeurs nutritionnelles estimées pour 100 g de produit fini"));
    const header = element("thead");
    const columns = element("tr");
    for (const name of [ui("Typical values", "Valeurs moyennes"), ui("Per 100 g", "Pour 100 g")]) {
      const column = element("th", null, name);
      column.scope = "col";
      columns.append(column);
    }
    header.append(columns);
    const body = element("tbody");
    const rows = [
      [ui("Energy", "Énergie"), `${formatNutrient(values.kj, 0)} kJ / ${formatNutrient(values.kcal, 0)} kcal`],
      [ui("Fat", "Matières grasses"), `${formatNutrient(values.fat, 1)} g`],
      [ui("Of which saturates", "Dont acides gras saturés"), `${formatNutrient(values.saturates, 1)} g`, true],
      [ui("Carbohydrates", "Glucides"), `${formatNutrient(values.carbs, 1)} g`],
      [ui("Of which sugars", "Dont sucres"), `${formatNutrient(values.sugars, 1)} g`, true],
      [ui("Fibre", "Fibres alimentaires"), `${formatNutrient(values.fibre, 1)} g`],
      [ui("Protein", "Protéines"), `${formatNutrient(values.protein, 1)} g`],
      [ui("Salt", "Sel"), `${formatNutrient(values.salt, 2)} g`],
    ];
    for (const [name, amount, secondary] of rows) {
      const row = element("tr", secondary ? "nutrition-subrow" : null);
      const label = element("th", null, name);
      label.scope = "row";
      row.append(label, element("td", null, amount));
      body.append(row);
    }
    table.append(caption, header, body);
    byId("nutrition-card").append(table);

    const notes = byId("nutrition-method");
    const ingredients = recipe.groups.flatMap(group => group.ingredients);
    const weight = number.format(recipe.nutrition.finishedWeightGrams);
    const startingWeight = number.format(ingredients.reduce((sum, ingredient) => sum + ingredient.grams, 0));
    notes.append(element("p", "yield-note", ui(`The estimated finished weight for the base recipe is ${weight} g.`, `Le poids final de la recette de base est estimé à ${weight} g.`)));
    const details = element("details", "nutrition-sources");
    details.append(
      element("summary", null, ui("How we calculated it", "Comment les valeurs sont calculées")),
      element("p", null, ui(
        "Each ingredient’s nutrient values are weighted by the amount used. We add the contributions together, then calculate what 100 g of the finished recipe contains.",
        "Nous calculons l’apport de chaque ingrédient en fonction de la quantité utilisée, puis additionnons ces apports et les ramenons à 100 g de produit fini.",
      )),
      element("p", null, [ui(`The base recipe starts with ${startingWeight} g of ingredients.`, `Les ingrédients de la recette de base pèsent ${startingWeight} g avant préparation.`), recipe.nutrition.yieldAssumptions].filter(Boolean).join(" ")),
    );
    if (recipe.nutrition.dataAssumptions) details.append(element("p", null, recipe.nutrition.dataAssumptions));
    const sources = element("ul");
    const foods = new Set(ingredients.map(ingredient => ingredient.food));
    for (const key of foods) {
      const { source, sourceFr, url } = foodData[key];
      if (!url) continue;
      const item = element("li");
      item.append(sourceLink({ label: ui(source, sourceFr ?? source), url }));
      sources.append(item);
    }
    details.append(sources);
    notes.append(details);
    byId("nutrition").hidden = false;
  }

  renderHero();
  renderIngredients();
  renderSteps();
  updateBatch();
  renderNotes();
  renderSafety();
  renderRelated();
  renderNutrition();
  renderSource();
  byId("print").addEventListener("click", () => window.print());
  article.hidden = false;

  const jumpTargets = [
    ["ingredients", ui("Jump to recipe", "Voir la recette")],
    ["method", ui("Jump to method", "Voir la préparation")],
    ["recipe-notes", ui("View recipe notes", "Voir les notes")],
    ["recipe-source", ui("View source", "Voir la source")],
  ];
  const destination = jumpTargets.find(([id]) => !byId(id).hidden);
  if (destination) {
    const [id, label] = destination;
    const jump = byId("recipe-jump");
    jump.href = `#${id}`;
    jump.textContent = label;
    jump.hidden = false;
  }
  const nav = byId("recipe-nav");
  const links = [...nav.querySelectorAll("a")];
  for (const link of links) link.hidden = byId(link.hash.slice(1)).hidden;
  nav.hidden = links.every(link => link.hidden);
  byId("print").hidden = false;
  const target = byId(window.location.hash.slice(1));
  target?.scrollIntoView({ behavior: "instant" });
}

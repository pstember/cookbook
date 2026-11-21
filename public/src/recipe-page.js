import { recipes } from "../recipes/index.js";
import { foodData } from "../recipes/nutrition-data.js";
import { nutritionPer100g } from "./nutrition.js";
import { addTimer } from "./timers.js";

const recipeId = new URLSearchParams(window.location.search).get("recipe");
const recipe = recipes.find(entry => entry.id === recipeId) ?? recipes[0];
const storageKey = `cookbook:${recipe.id}:v1`;
const iconsPath = "assets/illustrations/icons.svg";
const svgNamespace = "http://www.w3.org/2000/svg";
const number = new Intl.NumberFormat("en-GB", { maximumFractionDigits: 1 });
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
  const link = element("a", null, label);
  link.href = url;
  return link;
}

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
  servings: recipe.batches.find(batch => batch.servings === saved.servings)?.servings ?? recipe.servings,
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
  document.title = `${fullTitle} | The Little Cookbook`;
  document.querySelector('meta[name="description"]').content = recipe.description;
  byId("recipe-category").textContent = recipe.category;
  const title = byId("recipe-title");
  if (recipe.qualifier) {
    const badge = element("span", "hero-badge");
    badge.append(icon("sparkle"), element("span", null, recipe.qualifier));
    title.append(badge, document.createTextNode(" "));
  }
  title.append(element("span", "hero-title", recipe.title));
  byId("recipe-description").textContent = recipe.description;
  const image = byId("recipe-image");
  image.src = recipe.image.src;
  image.alt = recipe.image.alt;

  const facts = byId("recipe-facts");
  for (const fact of [...recipe.times, { label: "Serves", value: state.servings, icon: "servings" }]) {
    const row = element("div", "fact");
    const value = element("dd", null, fact.value);
    if (fact.icon === "servings") {
      value.id = "hero-servings";
      value.setAttribute("aria-live", "polite");
    }
    const label = element("dt", null, fact.label);
    label.prepend(icon(fact.icon, "fact-icon"));
    row.append(label, value);
    facts.append(row);
  }
}

function renderIngredients() {
  const groups = byId("ingredient-groups");
  for (const group of recipe.groups) {
    const card = element("section", `ingredient-card tone-${group.tone}`);
    const heading = element("header", "ingredient-card-head");
    heading.append(element("h3", null, group.title), icon(`art-${group.art}`, "ingredient-art"));
    const list = element("ul", "ingredient-list");
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
      ingredientRows.push({ ingredient, amount, note, checkbox });
      checkbox.addEventListener("change", () => {
        updateCheck(state.ingredients, ingredient.id, checkbox.checked);
        updateClearIngredients();
      });
    }
    card.append(heading, list);
    groups.append(card);
  }

  const select = byId("servings");
  for (const batch of recipe.batches) {
    select.add(new Option(batch.servings, batch.servings, false, batch.servings === state.servings));
  }
  select.addEventListener("change", () => {
    state.servings = Number(select.value);
    updateBatch();
    saveProgress();
  });
  byId("clear-ingredients").addEventListener("click", () => {
    ingredientRows.forEach(({ checkbox }) => { checkbox.checked = false; });
    state.ingredients.clear();
    saveProgress();
    if (ingredientRows.length) ingredientRows[0].checkbox.focus();
    updateClearIngredients();
  });
  updateClearIngredients();
}

function updateClearIngredients() {
  byId("clear-ingredients").disabled = ingredientRows.every(({ checkbox }) => !checkbox.checked);
}

function renderSteps() {
  const list = byId("recipe-steps");
  for (const [index, step] of recipe.steps.entries()) {
    const item = element("li", `step-card tone-${step.tone}`);
    const top = element("div", "step-top");
    const badge = element("span", "step-number", index + 1);
    badge.setAttribute("aria-hidden", "true");
    const label = element("label", "step-check");
    const checkbox = element("input", "check");
    checkbox.type = "checkbox";
    checkbox.setAttribute("aria-label", `Mark step ${index + 1}, ${step.title}, complete`);
    checkbox.checked = state.steps.has(step.id);
    const done = element("span", "step-check-text");
    label.append(checkbox, done);
    top.append(badge, label);

    const heading = element("div", "step-heading");
    const title = element("h3", null, step.title);
    const timing = element("p", "step-timing");
    timing.append(icon("clock"), element("span", null, step.timing));
    const copy = element("div");
    copy.append(title, timing);
    heading.append(copy, icon(`art-${step.art}`, "step-art"));

    const instructions = step.instructions.map(() => element("p"));
    const body = element("div", "step-body");
    body.append(...instructions);
    if (step.tip) {
      const tip = element("p", "step-tip");
      tip.append(element("strong", null, "Tip"), document.createTextNode(` ${step.tip}`));
      body.append(tip);
    }
    item.append(top, heading, body);

    if (step.timers?.length) {
      const timers = element("div", "timers");
      for (const timer of step.timers) addTimer(timers, step.title, timer, icon("clock"));
      item.append(timers);
    }

    stepRows.push({ step, instructions, checkbox });
    function updateStep() {
      item.classList.toggle("is-complete", checkbox.checked);
      done.textContent = checkbox.checked ? "Done" : "Mark done";
    }
    updateStep();
    checkbox.addEventListener("change", () => {
      updateCheck(state.steps, step.id, checkbox.checked);
      updateStep();
      updateStepProgress();
    });
    list.append(item);
  }
  byId("step-progress").max = recipe.steps.length;
  updateStepProgress();
}

function updateStepProgress() {
  const completed = stepRows.filter(({ checkbox }) => checkbox.checked).length;
  byId("step-count").textContent = `${completed} of ${recipe.steps.length} complete`;
  byId("step-progress").value = completed;
}

function updateBatch() {
  const batch = recipe.batches.find(entry => entry.servings === state.servings);
  const scale = state.servings / recipe.servings;
  byId("hero-servings").textContent = state.servings;
  for (const { ingredient, amount, note } of ingredientRows) {
    amount.textContent = `${number.format(ingredient.grams * scale)} g`;
    let detail = ingredient.note ?? "";
    if (ingredient.eggGrams) {
      const count = ingredient.grams * scale / ingredient.eggGrams;
      if (Number.isInteger(count)) {
        detail = `about ${count} ${ingredient.eggName}${count === 1 ? "" : "s"}`;
      }
    }
    note.textContent = detail;
    note.hidden = !detail;
  }
  for (const { step, instructions } of stepRows) {
    step.instructions.forEach((text, index) => {
      instructions[index].textContent = text.replaceAll("{tins}", batch.tins);
    });
  }
  const notes = byId("ingredient-notes");
  notes.replaceChildren();
  if (batch.tins) {
    const pan = element("p");
    pan.append(element("strong", null, `For ${state.servings}: `), document.createTextNode(`Use ${batch.tins}.`));
    notes.append(pan);
  }
  if (recipe.ingredientTip) notes.append(element("p", null, recipe.ingredientTip));
}

function renderSafety() {
  if (!recipe.safety) return;
  const section = byId("pregnancy-safety");
  const intro = element("div", "safety-heading");
  const symbol = element("span", "safety-icon");
  symbol.append(icon("heart"));
  const title = element("h2", null, recipe.safety.title);
  title.id = "safety-title";
  intro.append(symbol, title);
  const notes = element("div", "safety-notes");
  for (const note of recipe.safety.notes) {
    const entry = element("div");
    entry.append(element("h3", null, note.title), element("p", null, note.text));
    notes.append(entry);
  }
  const sources = element("ul", "source-links");
  for (const source of recipe.safety.sources) {
    const item = element("li");
    item.append(sourceLink(source));
    sources.append(item);
  }
  section.append(intro, notes, sources);
  section.hidden = false;
}

function renderNutrition() {
  if (!recipe.nutrition) return;
  const values = nutritionPer100g(recipe);
  const table = element("table", "nutrition-table");
  const caption = element("caption", "visually-hidden", "Estimated nutrition per 100 g of finished food");
  const header = element("thead");
  const columns = element("tr");
  for (const name of ["Typical values", "Per 100 g"]) {
    const column = element("th", null, name);
    column.scope = "col";
    columns.append(column);
  }
  header.append(columns);
  const body = element("tbody");
  const rows = [
    ["Energy", `${Math.round(values.kj)} kJ / ${Math.round(values.kcal)} kcal`],
    ["Fat", `${values.fat.toFixed(1)} g`],
    ["Of which saturates", `${values.saturates.toFixed(1)} g`, true],
    ["Carbohydrates", `${values.carbs.toFixed(1)} g`],
    ["Of which sugars", `${values.sugars.toFixed(1)} g`, true],
    ["Fibre", `${values.fibre.toFixed(1)} g`],
    ["Protein", `${values.protein.toFixed(1)} g`],
    ["Salt", `${values.salt.toFixed(2)} g`],
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
  notes.append(element("p", "yield-note", `Estimated baked weight: ${weight} g for the base recipe.`));
  const details = element("details", "nutrition-sources");
  details.append(
    element("summary", null, "How we calculated it"),
    element("p", null, "Each ingredient’s nutrient values are multiplied by its weight, added together and divided by the estimated finished weight to get the values for 100 g."),
    element("p", null, `The base recipe starts with ${startingWeight} g of ingredients. ${recipe.nutrition.yieldAssumptions}`),
    element("p", null, recipe.nutrition.dataAssumptions),
  );
  const sources = element("ul");
  const foods = new Set(ingredients.map(ingredient => ingredient.food));
  for (const key of foods) {
    const { source: label, url } = foodData[key];
    if (!url) continue;
    const item = element("li");
    item.append(sourceLink({ label, url }));
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
renderSafety();
renderNutrition();
if (recipe.source) {
  byId("recipe-source").append("Recipe adapted from ", sourceLink(recipe.source), ".");
}
byId("print").addEventListener("click", () => window.print());
byId("recipe-content").hidden = false;

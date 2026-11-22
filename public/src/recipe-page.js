import { recipes } from "../recipes/index.js";
import { foodData } from "../recipes/nutrition-data.js";
import { catalogueHref, categoryLabel, locale, recipeForLocale, ui } from "./localization.js";
import { nutritionPer100g } from "./nutrition.js";
import { recipeHref } from "./recipe-links.js";
import { renderStepIllustration } from "./step-illustration.js";
import { durationText, element, pills, renderChart, renderTimeline, sourceVolumeMl, stageTime } from "./recipe-guide.js";
import { addTimer } from "./timers.js";

const recipeId = new URLSearchParams(window.location.search).get("recipe");
const originalRecipe = recipes.find(entry => entry.id === recipeId);
const languageTag = ui("en-GB", "fr");
const bookTitle = ui("The Little Cookbook", "Le petit livre de cuisine");
const iconsPath = "assets/illustrations/icons.svg";
const svgNamespace = "http://www.w3.org/2000/svg";
const byId = id => document.getElementById(id);

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
  const chartAmounts = [];
  const setupLines = [];
  article.dataset.category = recipe.category;
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
    byId("recipe-category").textContent = byId("binder-category").textContent = categoryLabel(recipe.category);
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
    const hero = byId("recipe-hero-panel");
    const heroImage = recipe.image?.src;
    const imageSrc = heroImage ?? recipe.thumbnail;
    if (imageSrc) {
      const image = byId("recipe-image");
      image.addEventListener("error", () => {
        image.hidden = true;
        hero.classList.remove("hero--thumbnail");
        hero.classList.add("hero--text-only");
      }, { once: true });
      hero.classList.toggle("hero--thumbnail", !heroImage);
      image.alt = heroImage ? recipe.image.alt ?? "" : "";
      image.src = imageSrc;
      image.hidden = false;
    } else {
      hero.classList.add("hero--text-only");
    }
    const times = recipe.times ?? [];
    const missing = ui("Not recorded", "Non relevé");
    const entries = [
      { label: ui("Total time", "Durée totale"), value: recipe.totalTime || times.find(t => t.highlight === "total")?.value || missing },
      { label: ui("Cooking", "Cuisson"), value: recipe.cookingTime || times.find(t => t.highlight === "cook")?.value || activityTime(["cooking"]) },
      { label: ui("Chill & rest", "Froid et repos"), value: recipe.restTime || times.find(t => t.highlight === "rest")?.value || activityTime(["wait", "chill"]) },
      { label: recipe.yield ? ui("Yield", "Quantité") : ui("Serves", "Portions"), value: state.servings ?? recipe.yield ?? missing, isServings: state.servings != null },
    ];
    const facts = byId("recipe-facts");
    facts.hidden = false;
    for (const fact of entries) {
      const row = element("div", "fact");
      const value = element("dd", null, typeof fact.value === "number" ? number.format(fact.value) : fact.value);
      if (fact.isServings) {
        value.id = "hero-servings";
        value.setAttribute("aria-live", "polite");
      }
      const label = element("dt", null, fact.label);

      row.append(label, value);
      facts.append(row);
    }
  }

  function activityTime(activities) {
    const relevant = steps.filter(step => activities.includes(step.activity) && !step.optional);
    if (!relevant.length) return ui("None", "Aucun");
    if (relevant.some(step => !step.duration || step.durationPerBatch || step.options?.length)) {
      return ui("See stages", "Voir les étapes");
    }
    const range = relevant.reduce(([low, high], { duration }) => [low + duration[0], high + duration[1]], [0, 0]);
    return durationText(range, relevant.some(step => step.durationMinimum));
  }

  function renderGuide() {
    renderTimeline(byId("recipe-timeline"), steps);
    const chart = byId("recipe-chart");
    const setup = element("div", "chart-setup");
    for (const line of recipe.setup ?? []) {
      const node = element("p", null, line);
      setupLines.push({ node, line });
      setup.append(node);
    }
    for (const time of recipe.times ?? []) {
      if (!time.highlight) {
        setup.append(element("p", "setup-fact", [time.label, time.value].join(" · ")));
      }
    }
    if (setup.childElementCount) chart.append(setup);
    renderChart(chart, recipe, chartAmounts);
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
        const volume = element("span", "ingredient-volume");
        label.append(checkbox, amount, description, volume);
        row.append(label);
        list.append(row);
        ingredientRows.push({ ingredient, label, amount, note, volume, checkbox });
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

  function appendInstructions(container, stage, title) {
    const list = element("ol", "step-instructions");
    const lines = stage.instructions.map((instruction, index) => {
      const item = element("li");
      const text = element("span", null, instruction);
      item.append(text);
      for (const timer of stage.timers ?? []) {
        if (timer.afterInstruction !== index + 1) continue;
        const controls = element("div", "timers inline-timers");
        addTimer(controls, title, timer, icon("clock"));
        item.append(controls);
      }
      list.append(item);
      return text;
    });
    if (lines.length) container.append(list);
    return lines;
  }

  function renderSteps() {
    if (!steps.length) return;
    const list = byId("recipe-steps");
    for (const [index, step] of steps.entries()) {
      const item = element("li", `step-card tone-${step.tone ?? "yellow"}`);
      item.id = `step-${step.id}`;
      item.classList.toggle("component-start", !index || steps[index - 1].tone !== step.tone);
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
      const heading = element("div", "step-heading");
      heading.append(element("h3", null, step.title), element("p", "step-timing", stageTime(step)));
      item.append(heading);
      if (illustration) item.append(illustration);
      const details = element("div", "step-details");
      details.append(pills(step));
      const instructions = appendInstructions(details, step, step.title ?? stepLabel);
      if (step.options?.length) {
        const choices = element("div", "step-choice");
        choices.append(element("strong", "choice-label", ui("Choose one", "Au choix")));
        const options = element("div", "step-options");
        for (const option of step.options) {
          const box = element("section", "step-option");
          box.append(element("h4", null, option.title), pills(option));
          appendInstructions(box, option, option.title);
          options.append(box);
        }
        choices.append(options);
        details.append(choices);
      }
      if (step.tip) {
        const tip = element("p", "step-tip");
        tip.append(element("strong", null, ui("Tip", "Astuce")), document.createTextNode(" " + step.tip));
        details.append(tip);
      }
      item.append(details);

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
    if (steps.some(step => step.timers?.length || step.options?.some(option => option.timers?.length))) {
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
    for (const { node, line } of setupLines) node.textContent = line.replaceAll("{tins}", batch?.tins ?? "");
    for (const { ingredient, amount } of chartAmounts) amount.textContent = formatGramAmount(ingredient, scale);
    for (const { ingredient, label, amount, note, volume } of ingredientRows) {
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
      const ml = sourceVolumeMl(ingredient);
      volume.hidden = !ml;
      if (ml) volume.textContent = number.format(ml * scale) + " ml";
      const original = grams && !(ml && ingredient.unit?.toLowerCase() === "ml") ? originalMeasureNote(ingredient, sourceAmount) : "";
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
    const notes = recipe.notes?.length ? recipe.notes : steps.filter(step => step.tip).map(step => step.tip);
    for (const note of notes) {
      const paragraph = element("p", null, typeof note === "string" ? note : note.text);
      if (note.source) paragraph.append(" ", sourceLink(note.source));
      byId("recipe-notes-copy").append(paragraph);
    }
    if (!notes.length) byId("recipe-notes-copy").append(element("p", "empty-note", ui("No additional notes recorded.", "Aucune note complémentaire.")));
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
    if (!recipe.source?.label && !recipe.source?.url) {
      byId("recipe-source-copy").textContent = ui("The author’s cookbook", "Le carnet de recettes de l’auteur");
      byId("recipe-source").hidden = false;
      return;
    }
    const source = byId("recipe-source-copy");
    if (recipe.source.credit) source.append(`${recipe.source.credit} `);
    source.append(sourceLink(recipe.source));
    byId("recipe-source").hidden = false;
  }

  function renderNutrition() {
    if (!recipe.nutrition) {
      byId("nutrition-card").append(element("p", "nutrition-unavailable", ui(
        "Values per 100 g are unavailable for this recipe.", "Les valeurs pour 100 g ne sont pas disponibles pour cette recette.")));
      byId("nutrition").hidden = false;
      return;
    }
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
  renderGuide();
  renderIngredients();
  renderSteps();
  updateBatch();
  renderNotes();
  renderSafety();
  renderRelated();
  renderNutrition();
  const allergens = recipe.allergens?.length ? recipe.allergens : [ui("None identified in the listed ingredients.", "Aucun identifié dans les ingrédients indiqués.")];
  for (const allergen of allergens) byId("allergen-list").append(element("li", null, allergen));
  for (const [key, label] of [["counter", ui("Counter", "À température ambiante")], ["fridge", ui("Fridge", "Réfrigérateur")], ["freezer", ui("Freezer", "Congélateur")]]) {
    const row = element("div");
    row.append(element("dt", null, label), element("dd", null, recipe.storage?.[key] ?? ui("Not tested", "Durée non testée")));
    byId("storage-list").append(row);
  }
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

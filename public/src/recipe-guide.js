import { ui } from "./localization.js";

export function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

const activityLabels = {
  prep: ui("Prep", "Préparation"),
  cooking: ui("Cooking", "Cuisson"),
  wait: ui("Rest", "Repos"),
  chill: ui("Chill", "Au froid"),
};

export function durationText(range, minimum = false) {
  if (!range) return "";
  const [low, high] = range;
  let unit = "min", factor = 1;
  if (high < 1) { unit = "s"; factor = 60; }
  else if (low >= 60 && low % 60 === 0 && high % 60 === 0) { unit = "h"; factor = 1 / 60; }
  const format = value => new Intl.NumberFormat(ui("en-GB", "fr"), { maximumFractionDigits: 1 }).format(value * factor);
  const amount = low === high ? format(low) : `${format(low)}–${format(high)}`;
  return (minimum ? ui("At least ", "Au moins ") : "") + amount + " " + unit;
}

export function stageTime(step) {
  // Authored wording includes qualifications such as per batch, overnight or a choice of oven.
  return step.timing || durationText(step.duration, step.durationMinimum) || step.wait || ui("Untimed", "Durée non relevée");
}

function startTime(minutes) {
  const seconds = Math.round(minutes * 60);
  return [Math.floor(seconds / 3600), String(Math.floor(seconds / 60) % 60).padStart(2, "0"),
    ...(seconds % 60 ? [String(seconds % 60).padStart(2, "0")] : [])].join(":");
}

export function renderTimeline(container, steps) {
  const legend = element("ul", "timeline-legend");
  for (const activity of Object.keys(activityLabels)) {
    if (!steps.some(step => step.activity === activity)) continue;
    const label = element("li", `activity-${activity}`, activityLabels[activity]);
    legend.append(label);
  }
  const scroll = element("div", "timeline-scroll");
  const strip = element("ol", "timeline");
  const weights = steps.map(({ duration }) => duration ? (duration[0] + duration[1]) / 2 : 0);
  const longest = Math.max(1, ...weights);
  const stageNumbers = new Map(steps.map((step, i) => [step.id, i + 1]));
  let elapsed = [0, 0];
  steps.forEach((step, index) => {
    const stage = element("li", `activity-${step.activity}`);
    stage.style.setProperty("--share", String(weights[index] / longest));
    const link = element("a", null, step.title);
    link.href = `#step-${step.id}`;
    let start = elapsed
      ? ui("At ", "À ") + (elapsed[0] === elapsed[1] ? startTime(elapsed[0]) : elapsed.map(startTime).join("–"))
      : ui(`After step ${index}`, `Après l’étape ${index}`);
    if (step.during) {
      const other = stageNumbers.get(step.during);
      start = ui(`During step ${other}`, `Pendant l’étape ${other}`);
      elapsed = null;
    }
    stage.append(link, element("span", null, stageTime(step)), element("small", null, start));
    strip.append(stage);
    if (!step.duration || step.durationMinimum || step.durationPerBatch || step.optional || step.options?.length) elapsed = null;
    else if (elapsed) elapsed = elapsed.map((time, i) => time + step.duration[i]);
  });
  scroll.append(strip);
  container.append(legend, scroll);
}

// Independent ingredient streams share a column. Consecutive actions on the same
// mixture share a cell so the chart remains readable on a printed sheet.
export function chartColumns(steps) {
  const columns = [];
  const lastUse = new Map();
  for (const step of steps) {
    const ingredients = new Set(step.uses);
    if (!ingredients.size) continue;
    const previous = Math.max(-1, ...Array.from(ingredients, id => lastUse.get(id) ?? -1));
    const prior = columns[previous]?.get(step.uses[0]);
    if (prior && prior.ingredients.size === ingredients.size &&
        [...ingredients].every(id => prior.ingredients.has(id) && lastUse.get(id) === previous)) {
      prior.steps.push(step);
      continue;
    }
    const columnIndex = previous + 1;
    const column = columns[columnIndex] ?? new Map();
    const cell = { ingredients, steps: [step] };
    for (const id of ingredients) {
      column.set(id, cell);
      lastUse.set(id, columnIndex);
    }
    columns[columnIndex] = column;
  }
  return columns;
}

export function renderChart(container, recipe, amountRows) {
  const rows = recipe.groups.flatMap(group => group.ingredients.map(ingredient => ({ ingredient, group })));
  const columns = chartColumns(recipe.steps);
  const stepNumbers = new Map(recipe.steps.map((step, i) => [step.id, i + 1]));
  // Break long flows into bands. Screen and print expose the same actions in order.
  for (let offset = 0; offset < columns.length; offset += 4) {
    const band = columns.slice(offset, offset + 4);
    const table = element("table", "recipe-chart");
    const head = table.createTHead();
    const row = head.insertRow();
    const names = [ui("Component", "Élément"), ui("Ingredient", "Ingrédient"), ui("Weight", "Poids"),
      ...band.map((_, i) => ui("Action ", "Action ") + (offset + i + 1))];
    for (const name of names) {
      const th = element("th", null, name);
      th.scope = "col";
      row.append(th);
    }
    const body = table.createTBody();
    const visible = rows.filter(({ group }) => group.ingredients.some(ingredient => band.some(col => col.has(ingredient.id))));
    visible.forEach(({ ingredient, group }, rowIndex) => {
      const tr = body.insertRow();
      tr.className = `tone-${group.tone}`;
      if (group !== visible[rowIndex - 1]?.group) {
        tr.classList.add("component-start");
        const cell = element("th", "chart-group", group.title);
        cell.rowSpan = group.ingredients.length;
        tr.append(cell);
      }
      const name = element("th", "chart-ingredient", ingredient.name);
      name.scope = "row";
      const amount = element("td", "chart-amount");
      amountRows.push({ ingredient, amount });
      tr.append(name, amount);
      for (const col of band) {
        const action = col.get(ingredient.id);
        if (rowIndex && col.get(visible[rowIndex - 1].ingredient.id) === action) continue;
        let end = rowIndex + 1;
        while (end < visible.length && col.get(visible[end].ingredient.id) === action) end++;
        const cell = element("td", action ? "chart-action" : "chart-idle");
        cell.rowSpan = end - rowIndex;
        for (const step of action?.steps ?? []) {
          const link = element("a", null, `${stepNumbers.get(step.id)}. ${step.title}`);
          link.href = `#step-${step.id}`;
          cell.append(link);
        }
        tr.append(cell);
      }
    });
    const scroll = element("div", "chart-scroll");
    scroll.tabIndex = 0;
    scroll.setAttribute("role", "region");
    scroll.setAttribute("aria-label", ui("Ingredient and action chart", "Tableau des ingrédients et des actions"));
    scroll.append(table);
    container.append(scroll);
  }
}

export function pills(stage) {
  const list = element("div", "stage-pills");
  for (const [key, label] of [["heat", ui("Heat", "Chaleur")], ["wait", ui("Wait", "Attente")]]) {
    if (!stage[key]) continue;
    const pill = element("span", `stage-pill pill-${key}`);
    pill.append(element("b", null, label), document.createTextNode(stage[key]));
    list.append(pill);
  }
  return list;
}

export function sourceVolumeMl(ingredient) {
  if (ingredient.volumeMl) return ingredient.volumeMl;
  if (!Number.isFinite(ingredient.quantity)) return null;
  const factor = { ml: 1, cl: 10, dl: 100, l: 1000, litre: 1000, litres: 1000 };
  return ingredient.quantity * (factor[ingredient.unit?.toLowerCase()] ?? 0) || null;
}

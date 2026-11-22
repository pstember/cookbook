import assert from "node:assert/strict";
import test from "node:test";
import { recipes } from "../public/recipes/index.js";
import { chartColumns, stageTime } from "../public/src/recipe-guide.js";

test("every stage describes its timeline activity and ingredient chart rows", () => {
  const activities = ["prep", "cooking", "wait", "chill"];
  const tones = ["yellow", "blue", "pink", "green", "oat"];
  for (const recipe of recipes) {
    const ingredientGroups = new Map();
    for (const group of recipe.groups) {
      assert.ok(tones.includes(group.tone), `${recipe.id}/${group.title}`);
      for (const ingredient of group.ingredients) ingredientGroups.set(ingredient.id, group);
    }
    const chartIngredients = new Set();
    const earlierStages = new Set();
    for (const step of recipe.steps) {
      const path = `${recipe.id}/${step.id}`;
      assert.ok(activities.includes(step.activity), path);
      if (step.during) assert.ok(earlierStages.has(step.during), path);
      earlierStages.add(step.id);
      assert.ok(tones.includes(step.tone), path);
      assert.ok(Array.isArray(step.uses), path);
      assert.equal(new Set(step.uses).size, step.uses.length, path);
      const components = new Set();
      for (const id of step.uses) {
        assert.ok(ingredientGroups.has(id), `${path}/${id}`);
        chartIngredients.add(id);
        components.add(ingredientGroups.get(id));
      }
      if (components.size === 1) assert.equal(step.tone, [...components][0].tone, path);
      if (step.duration !== undefined) {
        assert.ok(Array.isArray(step.duration), path);
        assert.equal(step.duration.length, 2, path);
        const [low, high] = step.duration;
        assert.ok(Number.isFinite(low) && Number.isFinite(high) && low > 0 && high >= low, path);
      }
      if (step.durationMinimum) assert.ok(step.duration, path);
    }
    assert.deepEqual(chartIngredients, new Set(ingredientGroups.keys()), recipe.id);
  }
});

test("ingredient chart keeps independent mixtures apart until the step that joins them", () => {
  const steps = [
    { id: "heat-oven", uses: [] },
    { id: "whisk", uses: ["egg", "sugar"] },
    { id: "melt", uses: ["butter", "chocolate"] },
    { id: "cool", uses: ["chocolate", "butter"] },
    { id: "fold", uses: ["egg", "sugar", "butter", "chocolate"] },
  ];
  const columns = chartColumns(steps);
  assert.equal(columns.length, 2);
  assert.deepEqual(columns[0].get("egg").steps, [steps[1]]);
  assert.equal(columns[0].get("egg"), columns[0].get("sugar"));
  assert.deepEqual(columns[0].get("butter").steps, [steps[2], steps[3]]);
  assert.equal(columns[0].get("butter"), columns[0].get("chocolate"));
  const joined = columns[1].get("egg");
  assert.deepEqual(joined.steps, [steps[4]]);
  assert.ok(steps[4].uses.every(id => columns[1].get(id) === joined));
});

test("stage times retain sourced handoffs, minimums, per-batch qualifiers and untimed cues", () => {
  assert.equal(stageTime({ duration: [0.5, 0.75] }), "30–45 s");
  assert.equal(stageTime({ duration: [4, 5] }), "4–5 min");
  assert.equal(stageTime({ duration: [360, 360], durationMinimum: true }), "At least 6 h");
  assert.equal(stageTime({ duration: [3, 5], timing: "3–5 min per waffle" }), "3–5 min per waffle");
  assert.equal(stageTime({ wait: "Until set" }), "Until set");
  assert.equal(stageTime({}), "Untimed");
});

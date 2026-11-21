import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { recipes } from "../public/recipes/index.js";
import { stepIllustrations } from "../public/step-illustrations/index.js";

const sprite = readFileSync(new URL("../public/assets/illustrations/step-objects.svg", import.meta.url), "utf8");
const symbols = new Set(Array.from(sprite.matchAll(/<symbol id="([^"]+)"/g), match => match[1]));

test("every numbered step has its own valid bilingual illustration", () => {
  const illustratedRecipes = recipes.filter(recipe => recipe.steps?.length);
  assert.deepEqual(Object.keys(stepIllustrations).sort(), illustratedRecipes.map(recipe => recipe.id).sort());
  for (const recipe of illustratedRecipes) {
    const scenes = stepIllustrations[recipe.id];
    assert.deepEqual(Object.keys(scenes).sort(), recipe.steps.map(step => step.id).sort(), recipe.id);
    const compositions = new Set();
    for (const [step, scene] of Object.entries(scenes)) {
      const label = `${recipe.id}/${step}`;
      const { before = [], focus, tool, after, motion, en, fr } = scene;
      assert.ok(en?.trim() && fr?.trim(), `${label} needs two captions`);
      assert.ok(Array.isArray(before) && before.length <= 2, `${label} has too many lead-in objects`);
      const artwork = [...before, focus, tool, after, motion && `motion-${motion}`];
      assert.ok(focus, `${label} has no central object`);
      for (const symbol of artwork.filter(Boolean)) {
        assert.ok(symbols.has(symbol), `${label} refers to missing SVG symbol ${symbol}`);
      }
      const signature = JSON.stringify([before, focus, tool, after, motion]);
      assert.ok(!compositions.has(signature), `${label} repeats another step’s composition`);
      compositions.add(signature);
    }
  }
});

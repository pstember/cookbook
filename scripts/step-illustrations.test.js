import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import test from "node:test";
import { recipes } from "../public/recipes/index.js";
import { stepIllustrations } from "../public/step-illustrations/index.js";
import { stepImagePath } from "../public/src/step-illustration.js";

test("every numbered step has distinct illustrated frames with bilingual captions", () => {
  const illustratedRecipes = recipes.filter(recipe => recipe.steps?.length);
  const publicDirectory = new URL("../public/", import.meta.url);
  const stepAssetDirectory = new URL("assets/illustrations/steps/", publicDirectory);
  const artworkHashes = new Map();
  const files = [];
  assert.deepEqual(Object.keys(stepIllustrations).sort(), illustratedRecipes.map(recipe => recipe.id).sort());

  for (const recipe of illustratedRecipes) {
    const scenes = stepIllustrations[recipe.id];
    assert.deepEqual(Object.keys(scenes).sort(), recipe.steps.map(step => step.id).sort(), recipe.id);
    for (const [step, frames] of Object.entries(scenes)) {
      const label = `${recipe.id}/${step}`;
      assert.ok(Array.isArray(frames) && frames.length, `${label} needs at least one illustrated frame`);
      for (const [index, { en, fr }] of frames.entries()) {
        const assetPath = stepImagePath(recipe.id, step, index, frames.length);
        assert.ok(en?.trim() && fr?.trim(), `${assetPath} needs two captions`);
        const bytes = readFileSync(new URL(assetPath, publicDirectory));
        assert.equal(bytes.toString("ascii", 0, 4), "RIFF", assetPath);
        assert.equal(bytes.toString("ascii", 8, 12), "WEBP", assetPath);
        const hash = createHash("sha256").update(bytes).digest("hex");
        assert.ok(!artworkHashes.has(hash), `${assetPath} repeats ${artworkHashes.get(hash)}`);
        artworkHashes.set(hash, assetPath);
        files.push(assetPath.slice("assets/illustrations/steps/".length));
      }
    }
  }

  const assetFiles = readdirSync(stepAssetDirectory, { recursive: true, withFileTypes: true })
    .filter(entry => entry.isFile())
    .map(entry => `${entry.parentPath.split(/[\\/]/).at(-1)}/${entry.name}`);
  assert.deepEqual(assetFiles.sort(), files.sort(), "each step image must have a caption");
});

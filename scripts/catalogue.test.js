import assert from "node:assert/strict";
import { readdirSync, statSync } from "node:fs";
import test from "node:test";
import { recipes } from "../public/recipes/index.js";

test("every recipe file has a unique catalogue entry and a stable URL", async () => {
  const directory = new URL("../public/recipes/", import.meta.url);
  const files = readdirSync(directory, { recursive: true }).filter(path => /[\\/].+\.json$/.test(path));
  const entries = await Promise.all(files.map(path =>
    import(new URL(path.replaceAll("\\", "/"), directory), { with: { type: "json" } }),
  ));
  assert.equal(recipes.length, entries.length);
  assert.equal(new Set(recipes.map(recipe => recipe.id)).size, recipes.length);
  for (const [index, file] of files.entries()) {
    const { default: recipe } = entries[index];
    assert.ok(recipes.includes(recipe), `Unlisted recipe: ${recipe.id}`);
    assert.match(recipe.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.equal(file.split(/[\\/]/).at(-1), `${recipe.id}.json`);
    assert.equal(recipe.schemaVersion, 1, recipe.id);
    assert.ok(recipe.category, recipe.id);
  }
});

test("recipe links and checklist identifiers refer to distinct entries", () => {
  const ids = new Set(recipes.map(recipe => recipe.id));
  for (const recipe of recipes) {
    const ingredients = (recipe.groups ?? []).flatMap(group => group.ingredients);
    for (const collection of [ingredients, recipe.steps ?? []]) {
      assert.ok(collection.every(entry => entry.id), recipe.id);
      assert.equal(new Set(collection.map(entry => entry.id)).size, collection.length, recipe.id);
    }
    for (const link of recipe.related ?? []) {
      assert.ok(ids.has(link.id) && link.id !== recipe.id, `${recipe.id} links to ${link.id}`);
    }
  }
});

test("every recipe has a local illustration for the catalogue and detail page", () => {
  const publicDirectory = new URL("../public/", import.meta.url);
  for (const recipe of recipes) {
    assert.ok(recipe.image?.src || recipe.thumbnail, `Missing illustration: ${recipe.id}`);
    for (const path of [recipe.thumbnail, recipe.image?.src].filter(Boolean)) {
      const file = statSync(new URL(path, publicDirectory), { throwIfNoEntry: false });
      assert.ok(file?.isFile(), `Missing illustration file for ${recipe.id}: ${path}`);
    }
  }
});

import assert from "node:assert/strict";
import { readdirSync } from "node:fs";
import test from "node:test";
import { recipes } from "../public/recipes/index.js";

test("every recipe file has a unique catalogue entry and a stable URL", async () => {
  const directory = new URL("../public/recipes/", import.meta.url);
  const modules = readdirSync(directory, { recursive: true }).filter(path => /[\\/].+\.js$/.test(path));
  const entries = await Promise.all(modules.map(path => import(new URL(path.replaceAll("\\", "/"), directory))));
  assert.equal(recipes.length, entries.length);
  assert.equal(new Set(recipes.map(recipe => recipe.id)).size, recipes.length);
  for (const { default: recipe } of entries) {
    assert.ok(recipes.includes(recipe), `Unlisted recipe: ${recipe.id}`);
    assert.match(recipe.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(recipe.title && recipe.category, recipe.id);
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

import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import test from "node:test";
import { recipes } from "../public/recipes/index.js";

const publicDirectory = new URL("../public/", import.meta.url);

function readRecipeImage(path) {
  assert.match(path, /\.webp$/, path);
  const bytes = readFileSync(new URL(path, publicDirectory));
  assert.equal(bytes.toString("ascii", 0, 4), "RIFF", path);
  assert.equal(bytes.toString("ascii", 8, 12), "WEBP", path);

  // Read the image dimensions from the lossless, lossy or extended WebP header.
  let size;
  switch (bytes.toString("ascii", 12, 16)) {
    case "VP8L": {
      assert.equal(bytes[20], 0x2f, path);
      const packed = bytes.readUInt32LE(21);
      size = [(packed & 0x3fff) + 1, ((packed >>> 14) & 0x3fff) + 1];
      break;
    }
    case "VP8 ":
      assert.equal(bytes.toString("hex", 23, 26), "9d012a", path);
      size = [bytes.readUInt16LE(26) & 0x3fff, bytes.readUInt16LE(28) & 0x3fff];
      break;
    case "VP8X":
      size = [bytes.readUIntLE(24, 3) + 1, bytes.readUIntLE(27, 3) + 1];
      break;
    default:
      assert.fail(`Unrecognised WebP header in ${path}`);
  }
  assert.deepEqual(size, [640, 480], path);
  return bytes;
}

test("every recipe hero and thumbnail is a 640 × 480 WebP", () => {
  for (const recipe of recipes) {
    for (const path of new Set([recipe.image?.src, recipe.thumbnail].filter(Boolean))) {
      readRecipeImage(path);
    }
  }
});

test("every numbered step has one distinct 640 × 480 WebP and bilingual captions", () => {
  const stepAssetDirectory = new URL("assets/illustrations/steps/", publicDirectory);
  const artworkHashes = new Map();
  const files = [];

  for (const recipe of recipes) {
    for (const step of recipe.steps) {
      const assetPath = step.illustration;
      assert.equal(assetPath, `assets/illustrations/steps/${recipe.id}/${step.id}.webp`);
      assert.ok(step.copy.en.caption?.trim() && step.copy.fr.caption?.trim(), `${assetPath} needs two captions`);
      const hash = createHash("sha256").update(readRecipeImage(assetPath)).digest("hex");
      assert.ok(!artworkHashes.has(hash), `${assetPath} repeats ${artworkHashes.get(hash)}`);
      artworkHashes.set(hash, assetPath);
      files.push(assetPath.slice("assets/illustrations/steps/".length));
    }
  }

  const assetFiles = readdirSync(stepAssetDirectory, { recursive: true, withFileTypes: true })
    .filter(entry => entry.isFile())
    .map(entry => `${entry.parentPath.split(/[\\/]/).at(-1)}/${entry.name}`);
  assert.deepEqual(assetFiles.sort(), files.sort(), "each step image must have a caption");
});

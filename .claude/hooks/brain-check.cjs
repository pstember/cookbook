#!/usr/bin/env node
// Stop hook: lightweight sanity check that .brain/decisions/ stays internally
// consistent. Not a build gate — just a nudge printed at session end so decay
// gets noticed early instead of accumulating silently. Exits 0 always; this
// never blocks anything, it only reports.

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const DECISIONS_DIR = path.join(REPO_ROOT, ".brain", "decisions");
const BRAIN_README = path.join(REPO_ROOT, ".brain", "README.md");

function main() {
  if (!fs.existsSync(DECISIONS_DIR)) {
    return; // no .brain/ yet in this project — nothing to check
  }

  const files = fs
    .readdirSync(DECISIONS_DIR)
    .filter((f) => /^\d{3}-.+\.md$/.test(f))
    .sort();

  if (files.length === 0) {
    return;
  }

  const numbers = files.map((f) => parseInt(f.slice(0, 3), 10));
  const issues = [];

  // Check for duplicate numbers.
  const seen = new Set();
  for (const n of numbers) {
    if (seen.has(n)) {
      issues.push(`Duplicate ADR number detected: ${n}`);
    }
    seen.add(n);
  }

  // Check for a large gap (likely a typo, not just a deleted/renumbered file).
  const sorted = [...seen].sort((a, b) => a - b);
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] - sorted[i - 1] > 5) {
      issues.push(
        `Large gap in ADR numbering between ${sorted[i - 1]} and ${sorted[i]} — check for a typo.`,
      );
    }
  }

  // Check that every ADR file is mentioned in the README index, if the README exists.
  if (fs.existsSync(BRAIN_README)) {
    const readme = fs.readFileSync(BRAIN_README, "utf8");
    for (const f of files) {
      if (!readme.includes(f.replace(/\.md$/, ""))) {
        issues.push(`${f} is not referenced in .brain/README.md's index — consider adding it.`);
      }
    }
  }

  if (issues.length > 0) {
    console.log("[brain-check] .brain/decisions/ drift detected:");
    for (const issue of issues) {
      console.log(`  - ${issue}`);
    }
  }
}

try {
  main();
} catch {
  // Never let this hook's own bugs break the session.
}

process.exit(0);

---
name: verify
description: Verify a Cookbook change before publishing a branch or opening a pull request.
---

# Verify

Review the diff against the base branch. For recipe or JavaScript changes, run `npm run check` and review the affected behavior against [ACCURACY-INVARIANTS.md](ACCURACY-INVARIANTS.md). For UI changes, check relevant screen sizes and interactions if a browser is available. For a change to cooking safety or nutrition, verify the source and the recipe assumptions. Report checks that could not be run.

For a new or revised recipe, follow the review steps in the [recipe authoring guide](../../../docs/recipe-authoring.md). Verify that each timer sits next to its starting instruction and that the stages, durations and cues agree in both languages.

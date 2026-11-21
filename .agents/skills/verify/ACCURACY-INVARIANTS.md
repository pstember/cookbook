# Accuracy invariants — regression corpus

This file is an **append-only** log of bug classes or review gaps this project's `verify` skill has actually caught (or missed and then learned from). It starts empty. Every entry should be a concrete, previously-real failure mode — not a hypothetical "we should probably check for X."

## Rules

- **Append-only in spirit.** New entries get added freely by the `verify` skill's self-improvement phase. Removing or weakening an existing entry requires a separate, human-reviewed PR — never let the loop quietly disarm itself.
- Each entry should be specific enough that a reviewer reading it would know exactly what to look for, not just a vague category.
- If an entry gets promoted into an actual automated check (a lint rule, a test, a CI gate) rather than relying on an agent remembering to look for it, note that here so it's clear the manual check is now belt-and-suspenders, not the only defense.

## Entries

<!-- None yet. Add entries here as real gaps are found, in the form:

### <short title>

**Found:** <date, or PR/issue reference>
**Failure mode:** <what went wrong concretely — inputs/state → wrong behavior>
**What to check:** <what a reviewer should look for to catch this in the future>
**Promoted to automation:** <yes/no — if yes, where>

-->

# `.brain/` — Decision Log

This directory is an agent- and human-readable log of architectural and product decisions that would be genuinely confusing to re-derive from the code alone. It is not a general notes folder — don't put status updates, TODOs, or meeting notes here.

## Conventions

- **One decision per file**, named `.brain/decisions/NNN-short-slug.md`, where `NNN` is the next sequential 3-digit number (check the highest existing number before creating a new one — don't reuse or guess).
- Each file should cover: the decision, the context/problem that prompted it, the alternatives considered and why they were rejected, and the consequences (including ones that turned out to be wrong later).
- **Supersession happens in place.** If a decision changes, don't create `042-revised-foo.md` next to `017-foo.md`. Instead, update `017-foo.md`'s Decision and Consequences sections directly, and add a single dated bullet summarizing what changed and why — collapse history into one note rather than stacking addenda. If the change is significant enough to warrant its own record, create a new ADR that explicitly says "Supersedes ADR-017" in its header, and mark 017 as superseded with a pointer forward.
- Keep an index of decisions somewhere skimmable (a table in this file, or in `AGENTS.md`) once there are more than a handful — don't make agents `ls` the directory to find anything relevant.

## When to write one

Write an ADR when:
- You chose between two or more real alternatives for non-obvious reasons.
- A constraint came from outside the codebase (a licensing limit, a platform quirk, a business requirement) that isn't visible in the code itself.
- Future-you (or another agent) would plausibly re-litigate this decision without knowing it was already settled.

Don't write one for routine implementation choices that the code itself already explains clearly.

## Index

| # | Decision | Status |
|---|---|---|
| 001 | [Adopt a numbered decision log](decisions/001-adopt-decision-log.md) | Accepted |

<!-- TODO: keep this table current as decisions are added. -->

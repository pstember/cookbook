# Domain documentation doctrine

**One topic, one file, indexed from one place.** This project deliberately does not use generic scattered docs — no `CONTEXT.md` in three different directories, no `docs/adr/` competing with `.brain/decisions/`, no README that duplicates what `AGENTS.md` already says.

## The hierarchy

1. **`README.md`** — what the project is, current status, and the Documentation Map table that routes to everything else. This is the entry point for a human or agent who knows nothing about the project yet.
2. **`.brain/decisions/`** — why past decisions were made, one file per decision, indexed in `.brain/README.md`.
3. **`docs/agents/`** — agent-facing how-tos (this directory), referenced from `AGENTS.md`, not duplicated into it.
4. **`docs/product/specs/`** — what a feature is supposed to do, for features complex enough to warrant a spec.

## Why this matters for agents specifically

An agent starting a fresh session has no memory of prior conversations. If documentation is scattered or duplicated, the agent either misses the relevant doc entirely or reads two versions that have drifted apart and can't tell which is current. A single source of truth per topic, reachable via one table (the Documentation Map), removes that ambiguity.

## When you find a conflict

If you encounter two docs that disagree, **don't silently pick one and proceed.** Flag it — to the human if you're mid-task and it matters now, or as a note/issue if it's lower stakes. Resolve the conflict by updating the doc that should be authoritative and, if the other one is now redundant, delete it rather than leaving both.

## Extending this doctrine

If the project grows a new category of documentation that doesn't fit the existing hierarchy, add a row to the Documentation Map table in `README.md` and a new subsection here explaining what belongs there and what doesn't — don't let a new doc type sprout without being indexed.

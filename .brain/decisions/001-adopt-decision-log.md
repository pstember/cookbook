# 001 — Adopt a numbered decision log

**Status:** Accepted

## Context

Projects developed heavily with AI agents lose institutional memory fast: an agent that wasn't in the room for a decision has no way to know it was already made and rejected an alternative for a specific reason, so it re-litigates the same tradeoff every few sessions. Code comments and PR descriptions don't fix this — comments rot, and PR descriptions aren't indexed anywhere an agent would think to look before starting new work.

## Decision

Keep a numbered, one-file-per-decision log under `.brain/decisions/`, indexed from `.brain/README.md` and referenced from `AGENTS.md`/`CLAUDE.md` as a mandatory check before changing established behavior. Supersede decisions in place rather than layering addenda.

## Alternatives considered

- **`docs/adr/` with a standard ADR template tool** — rejected only in the sense that we don't need the tooling ceremony; the same discipline (context/decision/consequences, one file per decision) is kept, just without a generator dependency.
- **Decisions live in PR descriptions / commit messages** — rejected: not indexed, not discoverable by an agent orienting itself at the start of a task, and PRs get squashed/archived.
- **A single running `DECISIONS.md` file** — rejected: becomes unwieldy past a handful of entries, and git history on one file makes it hard to see when any single decision last changed.

## Consequences

- Every non-trivial decision has a durable, discoverable home.
- Adds minor overhead: someone (agent or human) has to actually write the ADR at decision time, and has to check the log before big changes rather than skipping straight to implementation.
- If this discipline lapses (ADRs stop getting written), the log becomes stale and misleading faster than no log at all — worth periodically sweeping to confirm it still reflects reality.

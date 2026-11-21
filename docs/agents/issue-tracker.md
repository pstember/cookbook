# Issue tracking

GitHub Issues via the `gh` CLI is the tracker. External PRs from outside contributors are not automatically treated as triage requests — a human reviews them first.

## Conventions

- Before starting work, check whether an issue already exists for it (`gh issue list --search "<keywords>"`). Don't duplicate.
- If you (the agent) create an issue for work you're about to do yourself, self-assign it (`gh issue edit <n> --add-assignee @me`) so it doesn't look unowned.
- Reference issues from PRs with `Closes #NNN` in the **PR body**, not just the title — some automation (label clearing, auto-close) only reads the body.
- Keep issue titles specific enough to be useful in a `gh issue list` scan six months later — "fix bug" is not a title.

## Labels

See [`triage-labels.md`](triage-labels.md) for the label taxonomy.

<!-- TODO: if this project later needs epic/sub-issue tracking (a large piece of work broken into linked child issues), document the convention here once it's decided — don't invent one ad hoc mid-epic. -->

# Git workflow

## Branching

- One branch per deliverable. Name it `<type>/<short-description>` or `<type>/<short-description>-<issue-number>` when there's a tracked issue, where `<type>` matches the commit-type vocabulary below (`feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `perf`, `ci`).
- Don't stack unrelated changes on one branch — a reviewer (human or agent) should be able to understand the whole diff from the branch name and PR title alone.

## Commit messages

Conventional-commit style:

```
<type>: <description>

<optional body>
```

Types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`, `ci`.

## The merge-consent rule

**Never merge a PR into `main` (or any other protected branch) without explicit, current-conversation approval from a human.** This applies even if:

- A human approved a similar merge earlier in the same session — approval doesn't carry forward to a different PR.
- The PR passes every automated check — green CI is not the same as human sign-off to merge.
- You (the agent) wrote and reviewed the change yourself — self-approval doesn't count.

For Claude Code, this is mechanically enforced: `.claude/hooks/guard-pr-merge.sh` runs as a `PreToolUse` hook on `Bash` and blocks `gh pr merge` outright when the target branch is protected, regardless of what the conversation says. This is a deliberate design choice — a written rule an agent could talk itself past under pressure is weaker than a hook that can't be reasoned with.

**Known gap:** Codex CLI does not currently have a confirmed equivalent to Claude Code's `PreToolUse` hook for intercepting an arbitrary shell command before it runs (Codex's `PostToolUse` hook fires on `apply_patch`, its edit-tool equivalent — not on shell commands). Until that's verified against Codex's current hook documentation, treat the merge-consent rule as a **written-only** rule when working via Codex, and rely on the human reviewing before any merge happens. If you're reading this and have since confirmed Codex's shell-command hook story, update `.codex/hooks.json` to add the equivalent guard and remove this note.

## Pull requests

Use the repository’s pull request template to describe the change and verification. Link a tracked issue when there is one.

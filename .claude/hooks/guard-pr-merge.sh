#!/usr/bin/env bash
# PreToolUse (Bash) guard: block `gh pr merge` into protected branches.
#
# An agent must never merge into a protected branch without explicit,
# current-conversation human approval (see docs/agents/git-workflow.md).
# A written rule can be argued past under pressure; a hook can't.
#
# Claude Code passes the tool call's JSON on stdin. We only need the
# command string to decide whether to block.

set -euo pipefail

PROTECTED_BRANCHES=("main" "master" "develop")

input="$(cat)"

# Extract the bash command from the hook input JSON without requiring jq.
# Claude Code's PreToolUse payload has the shape: {"tool_input": {"command": "..."}}
command=$(printf '%s' "$input" | node -e '
  let d = "";
  process.stdin.on("data", c => d += c);
  process.stdin.on("end", () => {
    try {
      const i = JSON.parse(d);
      process.stdout.write(i.tool_input?.command ?? "");
    } catch {
      process.stdout.write("");
    }
  });
' 2>/dev/null || echo "")

if [[ -z "$command" ]]; then
  # Couldn't parse — fail open (don't block unrelated commands on a parse error).
  exit 0
fi

if [[ "$command" != *"gh pr merge"* ]]; then
  exit 0
fi

for branch in "${PROTECTED_BRANCHES[@]}"; do
  if [[ "$command" == *"--base $branch"* ]] || [[ "$command" == *"-B $branch"* ]]; then
    echo "[guard-pr-merge] Blocked: merging into protected branch '$branch' requires a human to run this manually. See docs/agents/git-workflow.md." >&2
    exit 2
  fi
done

# No explicit --base/-B flag: gh pr merge defaults to the PR's target branch,
# which is very often a protected one. Block by default and require a human
# to run it, rather than risk a false negative on a naked `gh pr merge`.
if [[ "$command" == *"gh pr merge"* ]]; then
  echo "[guard-pr-merge] Blocked: 'gh pr merge' without an explicit non-protected --base is treated as targeting a protected branch. A human must run this merge manually. See docs/agents/git-workflow.md." >&2
  exit 2
fi

exit 0

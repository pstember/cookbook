# Triage labels

A minimal taxonomy mapping onto 5 canonical triage roles. Create these labels in the repo before relying on this doc (`gh label create`):

| Label | Meaning |
|---|---|
| `agent:go` | Ready for an agent to pick up and implement autonomously |
| `agent:needs-human` | Needs a human decision before an agent can proceed (ambiguous scope, a judgment call, external dependency) |
| `needs-info` | Reporter/requester needs to provide more detail before this is actionable |
| `wontfix` | Deliberately not being done, with a reason recorded in a comment |
| *(unlabeled)* | Not yet triaged |

## Triage discipline

- Don't invent new labels for one-off situations — map the situation onto one of the 5 roles above, or onto `needs-info`/`wontfix` if it's genuinely not actionable yet.
- When you (an agent) determine an issue needs a human decision, label it `agent:needs-human` and say why in a comment — don't just leave it silently unlabeled.
- If this taxonomy stops fitting the project (e.g. a second team needs routing labels), extend it deliberately and update this file — don't let ad hoc labels accumulate undocumented.

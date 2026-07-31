# UiPath Source Control Conflicts

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-source-control-conflicts/SKILL.md)

## At a glance

| | |
|---|---|
| **Purpose** | Resolve an active merge or rebase conflict by preserving compatible intent and restoring valid UiPath structure. |
| **Use it when** | Project files, JSON, XAML, coded automation, Maestro artifacts, tests, docs, solution wrappers, or generated metadata are conflicted. |
| **Do not use it for** | Blind “ours/theirs” resolution, inventing business behavior, or rewriting shared history without explicit authority. |
| **Primary output** | Intent summary, resolved artifacts, official validation evidence, and completed or precisely paused merge/rebase. |
| **Maturity** | Pilot |

## Why this skill exists

UiPath project artifacts often contain structure and generated relationships that are unsafe to resolve as ordinary text. Two branches may both be correct in different ways. This skill recovers the purpose of each side, chooses a strategy before editing, and validates every affected artifact through its official owner.

## Before and after

### Before

Two branches changed `Main.xaml` and `project.json`. Conflict markers show overlapping text, but the real intents are “add the approved validation step” and “upgrade the package and change the input contract.” Selecting one side would silently discard behavior or leave an invalid project.

### After

Each conflict has an evidence-backed intent summary from commits, issues, tests, SDD sections, and surrounding structure. Compatible intent is preserved, incompatible intent follows the approved merge goal, generated artifacts are regenerated where possible, and official build/validation/tests pass. The merge or rebase is continued only within source-control authority.

## When to use

- Git reports an in-progress merge or rebase conflict.
- Structured UiPath or solution artifacts are involved.
- Both branches contain meaningful changes.
- Generated metadata may need regeneration.
- Product validations must be rerun after resolution.

## When not to use

- There is no active merge or rebase conflict.
- You want to discard a branch without understanding it.
- The requested operation would force-push or rewrite shared history without explicit authority.
- Business intent cannot be recovered and no accountable owner is available.
- You intend to modernize unrelated code while resolving the conflict.

## What you need before starting

- Current merge/rebase mode, base, ours, theirs, and conflict list.
- Relevant commits, messages, issues, SDD sections, ADRs, and tests.
- Repository policy and the user’s source-control authority.
- Official validation commands for every affected artifact type.
- The merge goal or approved specification for incompatible intent.

## What it produces

- A per-conflict summary of both intents or documented unknowns.
- An explicit resolution strategy before each structured edit.
- Resolved artifacts with markers removed and no unrelated modernization.
- Official build, validation, test, solution, and review evidence as required.
- A staged, continued, and completed operation—or an exact remaining command and blocker.

## How it works

1. **Inspect source-control state.** Know every conflict and how the operation continues.
2. **Recover both intents.** Use durable evidence, not only conflict text.
3. **Choose a structure-aware strategy.** Preserve both where compatible and regenerate structured outputs when possible.
4. **Edit only what is necessary.** Do not invent behavior or broaden scope.
5. **Validate by artifact owner.** Run every relevant official gate.
6. **Finish within authority.** Stage and continue; push or rewrite history only when explicitly permitted.

## Example prompt

```text
Use uipath-source-control-conflicts.

Resolve the active merge conflicts in Main.xaml and project.json. First inspect
merge state and recover both intents from commits, AUT-221, the approved SDD,
and tests. State the strategy before editing each artifact, preserve compatible
intent, avoid unrelated changes, and use the official RPA validations afterward.
Continue the merge only; do not force-push or rewrite shared history.
```

## How to know it is done

- Merge/rebase mode, refs, conflicts, and continuation command are known.
- Every conflict has two understood intents or a documented unknown.
- The resolution follows approved behavior.
- No markers or unapproved behavior remain.
- Generated or structured artifacts were handled by the correct owner when possible.
- Official build, validation, tests, and review have observed results.
- Source-control state confirms completion or reports the exact blocker.
- No unauthorized force push or history rewrite occurred.

## Official UiPath handoffs

Affected artifacts must be validated by official owners such as `uipath-rpa`, `uipath-agents`, Maestro skills, `uipath-coded-apps`, `uipath-api-workflow`, `uipath-solution`, and `uipath-review`. This skill coordinates intent recovery and conflict resolution; product validity stays with them.

## Related resources

- [Source Control Guardrails guide](uipath-source-control-guardrails.md)
- [Safe Refactor Plan guide](uipath-safe-refactor-plan.md)
- [Skill source](../../skills/uipath-source-control-conflicts/SKILL.md)

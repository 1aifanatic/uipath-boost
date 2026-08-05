# UiPath Source Control Guardrails

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-source-control-guardrails/SKILL.md)

## At a glance

| | |
|---|---|
| **Invocation** | User-invoked — start it explicitly. |
| **Purpose** | Make source-control and optional UiPath release authority boundaries executable for an AI coding agent. |
| **Use it when** | A project or user environment should block push, force/reset/clean/delete operations, or release-changing commands from autonomous execution. |
| **Do not use it for** | Replacing branch protection, least privilege, platform authorization, or claiming protection in tools the hook cannot intercept. |
| **Primary output** | Command policy, installed hook, blocked/allowed evidence, and recovery/maintenance instructions. |
| **Maturity** | Pilot |

## What it does

Written instructions can be missed, especially when an agent chains commands. A small pre-command guardrail makes the boundary concrete: inspection, diff, validation, and approved edits remain available, while destructive source-control and optional release-changing operations require deliberate human authority.

## Before and after

### Before

Repository instructions say “do not force-push,” but the agent’s command tool can still execute push, hard reset, clean, or branch deletion. Maintainers cannot demonstrate which operations are blocked, and a broad restriction may also prevent harmless status or validation commands.

### After

A documented policy names autonomous, approval-required, and human-only commands. The matching Bash or PowerShell blocker is connected to the supported command hook without replacing other hooks. Tests run in the actual target shell and show destructive commands exiting with clear blocked messages while safe commands pass. Recovery and uninstall steps explain how an authorized person can proceed.

## When to reach for it

Invoke this skill explicitly as `$uipath-source-control-guardrails`. UiPath Boost treats it as a deliberate workflow; Codex enforces that policy in `agents/openai.yaml`.

- Agents can execute shell or source-control commands.
- Repository policy requires human control of pushes or destructive Git actions.
- UiPath publish, deploy, activate, or delete commands should be human-executed.
- Project-level and user-level policies need different scopes.
- Teams need observable tests for blocked and allowed paths.

### Use a neighboring skill instead

- The agent environment has no supported pre-command hook.
- The team expects the hook to replace repository permissions or platform roles.
- Read-only and validation commands would be blocked indiscriminately.
- Maintainers cannot inspect or review the block list.
- The installation would overwrite unrelated hooks or settings.

## Prerequisites

- Agent environment and supported command-hook location.
- Project-only or user-level installation decision.
- Written authority policy for autonomous, approval-required, and human-only commands.
- Existing hook and settings content that must be preserved.
- Representative blocked and allowed test commands.

## What it produces

- A visible command authority policy.
- An executable Bash or PowerShell hook connected to the intended command tool.
- Default destructive Git patterns plus optional UiPath release-changing patterns.
- Failing evidence for each guarded command class.
- Passing evidence for representative status, diff, log, read-only, and validation commands.
- Instructions for authorized manual execution, policy changes, uninstall, and partial-operation recovery.

## How it works

1. **Choose scope and authority.** Write policy before code.
2. **Choose and install the target shell.** Use the Bash script for Bash hooks or the PowerShell script for PowerShell hooks, and preserve existing settings.
3. **Customize sparingly.** Preserve essential Git protections and enable UiPath release guards intentionally.
4. **Test blocked paths in the target shell.** Observe a failing exit and useful message for every class.
5. **Test allowed paths in the target shell.** Prove normal engineering remains possible.
6. **Document recovery.** Make protection distinguishable from a broken tool.

## Example prompt

```text
Use uipath-source-control-guardrails.

Create a project-level policy that allows status, diff, log, validation, tests,
and local edits, but requires human execution for git push, hard reset, clean,
forced branch deletion, and UiPath publish/deploy/activate/delete commands.
Merge the hook into existing settings, show the complete block list, test every
blocked class and representative allowed commands, and document recovery and uninstall.
```

## Common questions

**Why does the agent not start this automatically?**

This workflow benefits from an intentional human start because it orchestrates a session, changes durable project structure, or makes a cross-work decision. Installation makes it available; it does not run it.

## It's working if

- Scope, authority policy, and installation target are explicit.
- Existing hooks remain intact.
- The block list matches policy and is visible to maintainers.
- Every guarded class demonstrates a blocked exit and reason.
- Representative safe commands pass.
- Recovery, authorized manual execution, policy changes, and uninstall are documented.
- The guide states exactly which command environment is intercepted.
- Branch protection, least privilege, and platform authorization remain separate controls.

## Where it fits

This is a **user-invoked orchestration skill** in UiPath Boost. Use [uipath-project-router](uipath-project-router.md) when you need to decide whether it is the right entry point or what should follow it.

## Official UiPath handoff

Official product skills remain responsible for publish, deployment, activation, deletion, and resource operations. The guardrail may require those commands to be human-executed; it does not validate or replace the official workflow.

## Related resources

- [Bash blocker script](../../skills/uipath-source-control-guardrails/scripts/block_dangerous_commands.sh)
- [PowerShell blocker script](../../skills/uipath-source-control-guardrails/scripts/block_dangerous_commands.ps1)
- [Source Control Conflicts guide](uipath-source-control-conflicts.md)
- [Skill source](../../skills/uipath-source-control-guardrails/SKILL.md)

# UiPath Runbook Wizard

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-runbook-wizard/SKILL.md)

## At a glance

| | |
|---|---|
| **Purpose** | Turn a repeatable human setup or operational procedure into verified, staged, recoverable instructions. |
| **Use it when** | A procedure spans portals, approvals, values, environment setup, credentials, tenant resources, migration, or irreversible checkpoints. |
| **Do not use it for** | Inventing portal labels/commands, exposing secrets, or executing browser, approval, deployment, or production-changing steps during authoring. |
| **Primary output** | Procedure map, shell wizard or Markdown runbook, value-destination map, checks, recovery, permissions, and retention guidance. |
| **Maturity** | Pilot |

## Why this skill exists

Manual setup and cutover procedures are repeatedly explained in meetings, where steps, values, owners, and safety boundaries are easily lost. A good wizard makes each stage explicit, captures outputs only to approved destinations, supports interruption and reruns, and pauses before irreversible action.

## Before and after

### Before

Tenant onboarding is documented as a loose checklist: create resources, copy IDs, configure environments, and deploy. Portal labels have changed, secret values are pasted into notes, several steps are not idempotent, and a user who stops halfway cannot tell what completed.

### After

Every stage has inputs, outputs, owner, sensitivity, destination, prerequisite, completion check, retry path, and stop condition. Current commands and portal paths are verified through official sources. Low-risk local setup may use a shell wizard; cross-team approvals and production cutover use a Markdown runbook. Irreversible stages require explicit human confirmation.

## When to use

- Developer or tenant onboarding repeats.
- Environment values must be captured and routed safely.
- A migration or cutover contains human approvals and checkpoints.
- Deployment preparation spans several roles or portals.
- Operators need repeatable recovery and verification instructions.
- A one-off explanation should become a maintained procedure.

## When not to use

- The procedure is truly one-time and no maintained artifact is wanted.
- Exact commands or UI paths cannot be verified and would be invented.
- The authoring session would execute irreversible or production-changing stages.
- Secrets would be echoed or stored in plaintext.
- A shell wizard is chosen for a cross-team approval process that needs a document.

## What you need before starting

- Existing configuration, docs, environment files, pipelines, project context, and official guidance.
- Every manual stage and the value/state it produces.
- Exact official commands, portal paths, prerequisites, and delivery-model differences.
- Sensitivity and approved destination for every captured value.
- Permissions, approval owners, rollback, interruption, and retention expectations.

## What it produces

- Ordered procedure map with stage inputs, outputs, destinations, sensitivity, and owners.
- A shell wizard for local repeatable low-risk setup, or Markdown runbook for cross-team/approval work.
- Confirmation gates before irreversible actions.
- Hidden secret input and approved storage behavior.
- Idempotent rerun design.
- Progress, completion, retry, rollback, and stop instructions.
- Static syntax and value-to-destination verification.
- Human-run handoff with permissions and retention guidance.

## How it works

1. **Scope every stage and value.** Make ownership and sensitivity explicit.
2. **Verify the current journey.** Use official sources; mark unverifiable UI steps.
3. **Choose the format that matches execution.** Do not force interactivity where it cannot work safely.
4. **Author safe stages.** Open/link context before asking for values and confirm irreversible actions.
5. **Add progress and recovery.** Support interruption without guessing.
6. **Verify statically.** Trace values and check syntax without executing sensitive stages.
7. **Hand off to an authorized human.** State permissions, authority, and retention.

## Example prompt

```text
Use uipath-runbook-wizard.

Turn our production cutover checklist into a Markdown runbook. Verify every
command, portal path, prerequisite, and delivery-model difference through the
official UiPath owners. For each stage, define inputs, outputs, owner,
sensitivity, destination, completion check, recovery, and stop condition.
Require explicit human confirmation before deployment or activation and do not execute any stage.
```

## How to know it is done

- Every stage has a name, input, output, destination, sensitivity, and owner.
- Commands and portal paths are verified or marked unknown.
- The chosen format matches the real execution environment.
- Secrets are hidden and routed only to approved destinations.
- Reruns are idempotent where possible.
- Progress, retries, rollback, stop conditions, and produced state are clear.
- Static checks account for every captured value.
- An authorized human knows how to run, retain, or delete the artifact.

## Official UiPath handoffs

`uipath-platform`, `uipath-admin`, and `uipath-solution` own current commands and live operations. The wizard prepares an authorized human procedure; it does not execute those operations during authoring.

## Related resources

- [Shell wizard template](../../skills/uipath-runbook-wizard/assets/wizard-template.sh)
- [Release Readiness guide](uipath-release-readiness.md)
- [Skill source](../../skills/uipath-runbook-wizard/SKILL.md)

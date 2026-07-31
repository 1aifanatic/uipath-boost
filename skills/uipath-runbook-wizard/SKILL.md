---
name: uipath-runbook-wizard
description: "Create an interactive or document-based wizard for a UiPath setup, access, migration, deployment-preparation, or operational procedure that requires human actions. Use when a repeatable manual process involves portals, approvals, values to capture, environment configuration, credentials, tenant resources, or irreversible checkpoints that should not be re-explained from scratch."
---

# UiPath Runbook Wizard

Turn a tedious human procedure into precise, current, staged instructions with captured outputs, confirmation gates, idempotent writes, and a closing verification summary.

**Maturity:** pilot.

## Ownership Boundary

**This custom skill owns:** Turn a tedious human procedure into precise, current, staged instructions with captured outputs, confirmation gates, idempotent writes, and a closing verification summary.

It does not own current UiPath product commands, schemas, artifact validation, live tenant operations, or policy administration unless its instructions explicitly say otherwise.

## Compose With Official UiPath Skills

Use official skills for current product commands and artifact contracts:

- `uipath-platform`
- `uipath-admin`
- `uipath-solution`

Read [references/official-uipath-skill-map.md](references/official-uipath-skill-map.md) when routing is unclear.

## Workflow

### 1. Scope the procedure

Inspect existing configuration, documentation, environment files, pipelines, project context, and official skill guidance. Enumerate every manual stage and value it produces.

**Completion criterion:** Each stage has a name, input, output, destination, sensitivity, and owner.

### 2. Verify the current journey

Use official documentation or the applicable official UiPath skill to confirm exact commands, portal paths, prerequisites, and delivery-model differences. Mark any UI step that cannot be verified.

**Completion criterion:** No click path or command is invented.

### 3. Choose the wizard form

Use a shell wizard for local, repeatable, low-risk setup; use a Markdown runbook when the procedure spans teams, approvals, or unsupported interactive environments.

**Completion criterion:** The format matches where the procedure will actually run.

### 4. Author safe stages

Open or link the required page before requesting a value, hide secrets, write public and secret values only to approved destinations, make reruns idempotent, and confirm before irreversible actions.

**Completion criterion:** A stranger can follow each stage without exposing secrets or guessing.

### 5. Add progress and recovery

Show stage count, prerequisites, completion checks, retry guidance, rollback or stop conditions, and the exact artifact or state produced.

**Completion criterion:** The user knows what remains and how to recover from interruption.

### 6. Verify statically

Check shell syntax when applicable and trace every captured value to its destination. Do not execute browser, approval, secret, or production-changing stages on the user's behalf.

**Completion criterion:** The wizard is structurally valid and every declared output is accounted for.

### 7. Hand off

State how to run or use the wizard, what permissions are required, which stages need explicit human authority, and when to delete or retain it.

**Completion criterion:** The procedure is ready for an authorized human run.

## Output Contract

- Ordered procedure map.
- Interactive wizard or Markdown runbook.
- Value-to-destination map.
- Verification, recovery, and retention instructions.

## Guardrails

- Do not invent current portal labels or commands.
- Do not echo secrets or write them to unapproved plaintext files.
- Do not run irreversible, browser-driven, approval, deployment, or production operations while authoring the wizard.
- Do not make a one-off script permanent unless the user wants a maintained runbook.

## Example Requests

- "Create a wizard for UiPath tenant onboarding."
- "Turn the production cutover checklist into an interactive runbook."
- "Guide a developer through local CLI and environment setup."

## Finish

End with what was completed, the evidence produced, the next official skill or owner, and every unresolved blocker. Never imply that a write, validation, test, deployment, policy change, tenant operation, or runtime action occurred unless it actually ran and its result was observed.

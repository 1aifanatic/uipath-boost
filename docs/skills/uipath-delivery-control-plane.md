# UiPath Delivery Control Plane

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-delivery-control-plane/SKILL.md)

## At a glance

| | |
|---|---|
| **Invocation** | User-invoked — start it explicitly. |
| **Purpose** | Establish durable delivery governance around a UiPath repository whose product structure has already been discovered. |
| **Use it when** | Delivery rules, owners, evidence, decisions, environments, approvals, release gates, or handoffs are missing or scattered. |
| **Do not use it for** | Rediscovering UiPath artifacts, dependencies, entry points, or coding conventions. |
| **Primary output** | A concise delivery control-plane document with authoritative locations, owners, gaps, and approval boundaries. |
| **Maturity** | Core |

## What it does

An accurate repository inventory does not automatically tell a team how work should move through discovery, development, review, release, and support. Teams also need one place to understand issue states, decision authority, evidence expectations, environment names, approvals, release gates, and ownership.

This skill creates that delivery layer while linking to—not copying—the context produced by the official `uipath-project-discovery-agent`.

## Before and after

### Before

The repository has workflows, project files, CI definitions, and perhaps an SDD, but contributors still ask:

- Which tracker is authoritative?
- What do “test,” “UAT,” and “production” mean here?
- Where are decisions and release evidence recorded?
- Who may approve a deployment or policy change?
- Who owns support after release?

Different documents answer these questions differently, and new contributors rebuild the same context.

### After

The repository has one small control-plane document that links to official project context and identifies:

- The accountable business and technical owners.
- Work states and tracker conventions.
- Environment aliases and promotion paths.
- Decision and evidence locations.
- Quality and release gates.
- Approval and mutation boundaries.
- Support and handoff expectations.
- Missing controls with named next owners.

## When to reach for it

Invoke this skill explicitly as `$uipath-delivery-control-plane`. UiPath Boost treats it as a deliberate workflow; Codex enforces that policy in `agents/openai.yaml`.

- The official project-discovery context exists and is current.
- The project is moving from initial discovery into repeatable team delivery.
- Delivery knowledge is trapped in conversations or spread across several tools.
- Release evidence is difficult to locate or has no freshness rule.
- Environment aliases or approval boundaries are ambiguous.
- A handoff exposed missing ownership or governance conventions.

### Use a neighboring skill instead

- No current project context exists. Run the official `uipath-project-discovery-agent` first.
- You need to identify workflow entry points, packages, dependencies, or coding conventions.
- You want to create an SDD or implementation plan; use `uipath-planner`.
- You want to deploy governance policies or change identities, roles, tenants, or environments.
- You want to store passwords, tokens, customer payloads, or production secrets in project documentation.

## Prerequisites

- A current official project-context artifact, such as the project discovery output or an equivalent maintained `AGENTS.md` section.
- Access to the repository and its existing delivery documentation.
- Known tracker, decision, CI, release, runbook, and ownership locations when available.
- The project’s business outcome and accountable owner.
- Permission to add or update repository documentation.

If the official project context is absent or stale, the skill reports that prerequisite and stops.

## What it produces

- A delivery control-plane document linked to official project context.
- One authoritative home for each recurring delivery fact.
- Tracker and work-state conventions.
- Environment aliases and promotion expectations.
- Decision-record and evidence conventions.
- Quality, approval, mutation, and release boundaries.
- Support ownership and handoff rules.
- A list of unresolved gaps with owners rather than invented answers.

## How it works

1. **Verify official context.** Confirm that project discovery already owns artifact structure and dependencies.
2. **Audit delivery controls.** Inspect only delivery-governance locations: trackers, ADRs, evidence, environment documentation, risk records, release checklists, runbooks, ownership, and CI.
3. **Choose authoritative locations.** Reuse existing conventions and eliminate competing sources of truth.
4. **Write only missing governance.** Link to existing project and product documents instead of duplicating them.
5. **Walk realistic lookups.** Test whether a new contributor can understand one handoff and find one piece of release evidence.

## Optional read-only audit

The bundled helper script checks common control-plane locations without scanning UiPath product structure:

```bash
python skills/uipath-delivery-control-plane/scripts/audit_delivery_control_plane.py .
```

It returns JSON showing discovered control artifacts and gaps. Its output is evidence for discussion; it does not create files or change platform state.

## Example prompt

```text
Use uipath-delivery-control-plane.

The official project-discovery context is current at
.claude/rules/project-context.md. Audit this repository's delivery controls,
then create one concise control-plane document under docs/delivery/.
Reuse existing conventions, link instead of copying, and record every unknown
as a gap with an owner. Do not inspect tenant state or change deployments.
```

## Common questions

**Why does the agent not start this automatically?**

This workflow benefits from an intentional human start because it orchestrates a session, changes durable project structure, or makes a cross-work decision. Installation makes it available; it does not run it.

## It's working if

- The official project context is linked and not duplicated.
- Every recurring delivery fact has one authoritative location.
- Environment, evidence, approval, release, and support ownership are explicit.
- Unknown facts are recorded as owned gaps.
- A new contributor can follow the work-state rules.
- One handoff and one release-evidence lookup succeed.
- No cloud, tenant, identity, policy, or deployment state changed.

## Where it fits

This is a **user-invoked orchestration skill** in UiPath Boost. Use [uipath-project-router](uipath-project-router.md) when you need to decide whether it is the right entry point or what should follow it.

## Official UiPath handoff

- `uipath-project-discovery-agent` owns repository structure and conventions.
- `uipath-planner` owns SDD creation and the canonical task plan.
- `uipath-platform` owns live platform resources.
- `uipath-admin` owns identity and tenant administration.
- `uipath-governance` owns policy authoring and deployment.

This skill documents the boundaries and owners; it does not execute their live operations.

## Related resources

- [Control-plane template](../../skills/uipath-delivery-control-plane/assets/delivery-control-plane-template.md)
- [Read-only audit script](../../skills/uipath-delivery-control-plane/scripts/audit_delivery_control_plane.py)
- [Skill source](../../skills/uipath-delivery-control-plane/SKILL.md)

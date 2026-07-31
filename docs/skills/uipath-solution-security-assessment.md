# UiPath Solution Security Assessment

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-solution-security-assessment/SKILL.md)

## At a glance

| | |
|---|---|
| **Purpose** | Threat-model one defined UiPath solution design or release and map controls to evidence. |
| **Use it when** | The team needs data-flow threats, trust boundaries, misuse cases, control gaps, evidence requests, residual risks, and approvals. |
| **Do not use it for** | Claiming compliance/approval, deploying policies, managing identities, querying audit logs, operating tenant resources, or replacing review. |
| **Primary output** | Scope/data-flow map, threat register, control-evidence matrix, residual-risk register, and official-owner handoffs. |
| **Maturity** | Core |

## Why this skill exists

Generic security checklists miss solution-specific paths: prompt and tool misuse, poisoned documents, over-privileged unattended identities, insecure connectors, cross-tenant data, replay, tampering, silent business failures, or abuse of recovery mechanisms. This skill ties each threat to a concrete asset, actor, precondition, path, impact, and evidenced control.

## Before and after

### Before

An agentic claims solution has queues, prompts, connectors, human tasks, logs, packages, and external APIs. Security discussions list policies but do not show data flows, trust crossings, control evidence, or who owns missing proof. The team assumes tenant configuration makes the solution safe.

### After

The approved design/release and environments are pinned. Assets and trust boundaries are mapped without collecting secrets. Concrete misuse scenarios link to preventive, detective, and recovery controls. Every control is proven, unproven, not applicable, or requested from its official owner. Residual risks have likelihood, impact, owner, disposition, approval, and evidence needs.

## When to use

- Threat-modeling before production.
- Reviewing agent, prompt, tool, connector, integration, or AI data risks.
- Evaluating privacy, jurisdiction, external-party, or cross-environment flows.
- Preparing precise security evidence requests.
- Distinguishing design blockers from accepted residual risk.
- Supporting a release-readiness decision.

## When not to use

- The solution boundary, design, or release is undefined.
- You want governance policies authored or deployed.
- You want identities, roles, permissions, IP restrictions, or audit events managed.
- You want artifact quality grading.
- You need legal, compliance, privacy, or security approval rather than an assessment.

## What you need before starting

- Approved design or pinned release and environment/tenant/folder aliases.
- Actors, business criticality, data classifications, jurisdictions, AI use, integrations, external parties, and accountable owners.
- Data flows across credentials-by-reference, documents, prompts, model context, tasks, queues, storage, logs, APIs, packages, and outputs.
- Existing control evidence and organization risk-rating method.
- Authority boundaries for evidence requests only.

## What it produces

- Explicit assessment scope and decision owners.
- Asset, data-flow, and trust-boundary map without secret values.
- Threat/misuse register naming asset, actor, precondition, path, and impact.
- Preventive, detective, and recovery control mapping.
- Evidence state per control: proven, unproven, not applicable, or requested.
- Likelihood, impact, assumptions, remediation, approval, owner, and disposition per material risk.
- Precise official-skill evidence and remediation handoffs.

## How it works

1. **Pin the boundary.** Define exactly what and where is assessed.
2. **Map assets and trust crossings.** Avoid collecting secret values.
3. **Develop concrete threat paths.** Cover misuse, provenance, privilege, data, integrity, separation, failure, and recovery.
4. **Map controls to observed evidence.** Delegate live evidence to official owners.
5. **Assess residual risk.** Separate blockers from formally accepted risk.
6. **Hand off without mutation.** Give owners actionable evidence and remediation requests.

## Example prompt

```text
Use uipath-solution-security-assessment.

Threat-model approved claims solution release 2.3 for PROD-US. Map data flows
and trust boundaries across prompts, agents, queues, human tasks, connectors,
storage, logs, APIs, and external parties without collecting secret values.
Create concrete misuse cases and a control-evidence matrix, rate residual risk
using our method, and route missing evidence to official owners. Do not change policies or access.
```

## How to know it is done

- The assessed release/design and environment boundary are exact.
- Critical assets and trust crossings are visible.
- Every threat names asset, actor, precondition, path, and impact.
- Every control has an evidence state and official owner.
- Assumptions and unproven controls are visible.
- Every material risk has an owner, disposition, and evidence need.
- The report does not claim approval or compliance.
- No policy, identity, audit, platform, or source mutation occurred.

## Official UiPath handoffs

`uipath-governance` owns policy evidence and changes, `uipath-admin` owns identity and audit evidence, `uipath-platform` owns resources, `uipath-review` owns artifact assessment, and `uipath-troubleshoot` owns causal diagnosis. The security assessment frames precise questions for each owner.

## Related resources

- [Release Readiness guide](uipath-release-readiness.md)
- [Observability Design guide](uipath-observability-design.md)
- [Skill source](../../skills/uipath-solution-security-assessment/SKILL.md)

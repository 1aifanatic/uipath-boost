# UiPath Observability Design

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-observability-design/SKILL.md)

## At a glance

| | |
|---|---|
| **Invocation** | Model-invoked — start it explicitly or let the agent select it when the request fits. |
| **Purpose** | Design end-to-end correlation, events, metrics, SLOs, dashboards, alerts, retention, and support ownership. |
| **Use it when** | A process, agent, Maestro journey, integration, app, or solution must be observable before release or improvement. |
| **Do not use it for** | Querying live analytics, creating dashboards, operating tasks/resources, querying audit events, or diagnosing root cause. |
| **Primary output** | Journey map, correlation/event schema, signal catalog, alert/dashboard requirements, privacy/cost decisions, and incident walkthrough. |
| **Maturity** | Core |

## What it does

Job counts and exception totals rarely explain whether the business outcome completed or where a multi-system journey failed. Observability must connect the business case across documents, queues, jobs, agents, tasks, APIs, and outputs, while protecting sensitive data and keeping alerts actionable.

## Before and after

### Before

A claims journey uses email, an agent, a queue, RPA, and Action Center. Each system has separate IDs. Support searches free text and sees many exceptions but cannot tell which claim is incomplete, where it stalled, or whether it later recovered. Alerts fire repeatedly with no owner or runbook.

### After

A correlation model propagates business case, execution, queue, agent, task, integration, and release IDs with redaction rules. Structured events show lifecycle points and error evidence. Metrics answer business and operational decisions, alerts include deduplication, context, owner, runbook, escalation, and recovery signals, and incident walkthroughs expose remaining gaps.

## When to reach for it

Invoke this skill as `$uipath-observability-design`, or let the agent select it automatically when the request matches its defined job.

- Designing monitoring before production release.
- Correlating several UiPath products and external systems.
- Defining business outcome, quality, timeliness, exception, aging, cost, or saturation signals.
- Creating actionable dashboard and alert requirements.
- Setting SLOs where measurement and ownership exist.
- Evaluating privacy, retention, cardinality, and AI data concerns.

### Use a neighboring skill instead

- You want a live Insights query or dashboard change.
- You need to operate Action Center tasks or platform resources.
- You need current identity/audit data.
- You are diagnosing a specific incident’s root cause.
- A proposed metric has no user, decision, source, or owner.

## Prerequisites

- End-to-end process/solution design and business completion meaning.
- Trigger, artifacts, jobs, queues, agents, tasks, APIs, data stores, and outputs.
- Owners and trust boundaries.
- Existing logging, metrics, support, retention, and governance constraints.
- Representative technical fault, silent business failure, and slow/aging scenario.

## What it produces

- End-to-end observable journey map.
- Correlation IDs, propagation rules, and redaction requirements.
- Structured event schema with required fields, severity, lifecycle, error evidence, version, sampling, and retention.
- Business and technical metric catalog with sources, owners, decisions, and SLOs where justified.
- Audience-specific dashboards and actionable alert definitions.
- Privacy, security, access, export, storage, cardinality, sampling, and cost decisions.
- Incident walkthroughs and named signal gaps.

## How it works

1. **Map the journey.** Make every critical handoff and completion state visible.
2. **Define correlation.** Enable end-to-end investigation without free-text dependence.
3. **Choose decision-linked signals.** Avoid vanity metrics.
4. **Design events and traces.** Distinguish originating cause, propagation, and symptom without sensitive payloads.
5. **Design actionable views and alerts.** Name audience, owner, runbook, escalation, deduplication, and recovery.
6. **Check privacy and cost.** Balance evidence with controlled exposure and cardinality.
7. **Walk incidents.** Test technical, silent-business, and aging paths.

## Example prompt

```text
Use uipath-observability-design.

Design observability for our email-to-agent-to-queue-to-RPA-to-Action-Center
claims journey. Map business completion and trust boundaries, define correlation
propagation and redaction, specify structured events, decision-linked metrics,
SLOs, dashboards, alerts, runbooks, retention, and ownership. Walk one technical
fault, one silent business failure, and one aging path. Do not query or change live systems.
```

## Common questions

**Will this skill make changes simply because it is model-invoked?**

No. Model invocation only lets the agent load the instructions when the request fits. Source writes, tracker changes, tenant operations, deployments, and other consequential actions still require the authority stated by the request and the owning official skill.

## It's working if

- Every critical handoff and completion state appears on one map.
- An incident can be followed end to end without free-text searches.
- Every metric has a decision, source, user, and owner.
- Logs separate symptom, propagation, and origin while excluding secrets.
- Every alert is deduplicated, contextual, owned, and recoverable.
- Privacy, retention, access, cardinality, AI data, and cost are addressed.
- Technical, silent-business, and aging incidents can be narrated or expose named gaps.
- No live analytics or platform operation was performed.

## Where it fits

This is a **model-invoked complementary discipline** in UiPath Boost. It may be selected directly by the agent or reached from a user-invoked workflow. Use [uipath-project-router](uipath-project-router.md) when the larger route is unclear.

## Official UiPath handoff

`uipath-insights` owns live KPI analytics, `uipath-process-mining` owns Process Mining app analysis, `uipath-tasks` owns Action Center task operations, `uipath-admin` owns audit/identity evidence, `uipath-platform` owns resources, `uipath-governance` owns policies, and `uipath-troubleshoot` owns causal diagnosis. This skill defines what should be observable.

## Related resources

- [Release Readiness guide](uipath-release-readiness.md)
- [Runbook Wizard guide](uipath-runbook-wizard.md)
- [Skill source](../../skills/uipath-observability-design/SKILL.md)

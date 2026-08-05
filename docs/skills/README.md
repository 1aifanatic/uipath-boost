# UiPath Boost Skill Guides

[Back to the main README](../../README.md)

This library explains every UiPath Boost skill in practical language. Each guide includes:

- What the skill owns and its invocation mode.
- A realistic before-and-after scenario.
- When to use it and when not to use it.
- Inputs, outputs, and a step-by-step workflow.
- An example prompt.
- Observable completion criteria.
- Official UiPath handoffs and safety boundaries.
- Links to the packaged skill, templates, references, and helper scripts.

If you are unsure where to begin, start with the [UiPath Project Router](uipath-project-router.md). You can install all 34 skills once and let the router select the smallest correct workflow for each task.

```bash
npx skills add 1aifanatic/uipath-boost --skill '*' --agent codex --global --yes
```

## Invocation key

- **User-invoked (15):** start these deliberate workflows yourself with `Use $skill-name`. They include Project Router, Architecture Deepening, Delivery Control Plane, Discovery With Docs, Learning Workspace, Program Wayfinder, Project Handoff, Quality Gates Setup, Source Control Guardrails, Stakeholder Questionnaire, Task Refinement, Training Lab Scaffolder, UAT Session, Work Intake Triage, and Workflow Spec Workspace.
- **Model-invoked (19):** name them directly or let the agent choose them when your request precisely matches. Every individual guide shows its mode in the **At a glance** table.

Installing a skill only makes its instructions available. Invocation does not authorize file changes, tenant operations, deployment, publishing, or other consequential actions.

## Routing and project continuity

| Skill | Use it when | Main result |
|---|---|---|
| [UiPath Project Router](uipath-project-router.md) | You need to choose the correct official and UiPath Boost workflow. | Route card with first skill, inputs, outputs, boundaries, and stop condition. |
| [UiPath Delivery Control Plane](uipath-delivery-control-plane.md) | Project context exists, but delivery rules, evidence, ownership, and approvals are scattered. | Authoritative delivery-governance document and gap list. |
| [UiPath Project Handoff](uipath-project-handoff.md) | Work must continue safely in another session, agent, or team. | Redacted handoff with verified pointers and exact next action. |
| [UiPath Project Knowledge Base](uipath-project-knowledge-base.md) | Durable project knowledge is difficult to find, duplicated, or stale. | Linked Markdown notes, indexes, ownership, and freshness signals. |

## Discovery and decision-making

| Skill | Use it when | Main result |
|---|---|---|
| [UiPath Discovery Interview](uipath-discovery-interview.md) | Business requirements, rules, exceptions, evidence, or acceptance are unresolved. | Decision log, evidence index, open questions, and readiness verdict. |
| [UiPath Discovery With Docs](uipath-discovery-with-docs.md) | Discovery spans sessions and must update durable project records. | Context, decisions, evidence, ADRs, and planner-ready handoff. |
| [UiPath Work Intake Triage](uipath-work-intake-triage.md) | A defect, idea, enhancement, or access request is raw or unverified. | Evidence-backed state and next-owner brief. |
| [UiPath Program Wayfinder](uipath-program-wayfinder.md) | A large program has a known destination but unresolved decisions and dependencies. | Decision map, focused tickets, frontier, and planning handoff. |
| [UiPath Research Note](uipath-research-note.md) | A current product or technical decision requires primary-source evidence. | Cited, version-aware answer with confidence, gaps, and implications. |
| [UiPath Process Domain Modeling](uipath-process-domain-modeling.md) | Business terms are vague, overloaded, or inconsistent. | Canonical glossary, lifecycle model, ADRs, and propagation checklist. |
| [UiPath Workflow Spec Workspace](uipath-workflow-spec-workspace.md) | A recurring workflow needs complete neutral specification before product selection. | Stateful workflow spec, checkpoints, exceptions, and planning handoff. |
| [UiPath Stakeholder Questionnaire](uipath-stakeholder-questionnaire.md) | An unavailable stakeholder uniquely owns facts, evidence, access, or approvals. | Recipient-specific questions, coverage map, and answer-intake plan. |

## Design and architecture

| Skill | Use it when | Main result |
|---|---|---|
| [UiPath Component Design](uipath-component-design.md) | A reusable behavior needs a small stable contract and test seam. | Competing designs, trade-offs, selected contract, and acceptance examples. |
| [UiPath Architecture Deepening](uipath-architecture-deepening.md) | A proven review or incident hotspot needs better seam options. | Change-surface map, ranked options, and safe design handoff. |
| [UiPath Project Boundaries](uipath-project-boundaries.md) | Deep imports, cycles, or private-surface use make changes unsafe. | Boundary policy, automated checks, evidence, and migration plan. |
| [UiPath Prototype](uipath-prototype.md) | One design uncertainty can be answered by a small safe experiment. | Throwaway artifact, observed verdict, limitations, and cleanup record. |
| [UiPath Safe Refactor Plan](uipath-safe-refactor-plan.md) | Proven technical debt must improve without changing approved behavior. | Invariants, safety net, tiny steps, rollback, and stop conditions. |

## Build, test, and change quality

| Skill | Use it when | Main result |
|---|---|---|
| [UiPath Task Refinement](uipath-task-refinement.md) | Approved planner tasks are too large, horizontal, or poorly blocked. | Session-sized vertical tasks and corrected frontier. |
| [UiPath Test Driven Automation](uipath-test-driven-automation.md) | A feature or defect should be implemented through observed red-green behavior. | Public seams, red-green evidence, tests, and final validation record. |
| [UiPath Regression Harness](uipath-regression-harness.md) | A confirmed defect needs fast repeatable before/after proof. | Minimal fixture, one-command reproduction, red evidence, and green expectation. |
| [UiPath Requirement Traceability](uipath-requirement-traceability.md) | Requirements must map to implementation, tests, UAT, and release evidence. | Versioned trace matrix, gaps, owners, and coverage statistics. |
| [UiPath Source Control Conflicts](uipath-source-control-conflicts.md) | An active merge/rebase conflict contains structured UiPath artifacts. | Intent-preserving resolution and official validation evidence. |
| [UiPath UAT Session](uipath-uat-session.md) | Business testers need structured, reproducible acceptance records. | Anchored observations, evidence, classification, and routing. |
| [UiPath Quality Gates Setup](uipath-quality-gates-setup.md) | A repository needs tiered local, PR, nightly, or release checks. | Gate design, CI configuration, pass-fail-pass proof, and operations guide. |
| [UiPath Pattern Migration](uipath-pattern-migration.md) | A repeated contract or convention must change safely across many files/projects. | Contract, inventory, dry run, backups, manifest, and completeness evidence. |
| [UiPath Source Control Guardrails](uipath-source-control-guardrails.md) | Agent command authority must be enforced before dangerous Git or release actions. | Hook, authority policy, blocked/allowed tests, and recovery instructions. |

## Release, operations, and governance

| Skill | Use it when | Main result |
|---|---|---|
| [UiPath Release Readiness](uipath-release-readiness.md) | A pinned release and target need an evidence-backed go/no-go verdict. | Evidence matrix, residual risks, and Ready/Conditional/Not Ready verdict. |
| [UiPath Observability Design](uipath-observability-design.md) | An end-to-end journey needs correlation, signals, alerts, dashboards, and ownership. | Observability map, event schema, signal catalog, and incident walkthrough. |
| [UiPath Solution Security Assessment](uipath-solution-security-assessment.md) | A solution needs threat modeling, control evidence, and residual-risk decisions. | Threat model, control matrix, risk register, and official evidence requests. |
| [UiPath Runbook Wizard](uipath-runbook-wizard.md) | A repeated manual procedure needs safe staged instructions and recovery. | Shell wizard or Markdown runbook with gates and value mapping. |

## Learning and communication

| Skill | Use it when | Main result |
|---|---|---|
| [UiPath Learning Workspace](uipath-learning-workspace.md) | A person or team needs durable capability tied to real work. | Mission, lessons, active practice, feedback, and spaced-review records. |
| [UiPath Training Lab Scaffolder](uipath-training-lab-scaffolder.md) | A curriculum needs a consistent, non-empty lab repository structure. | Numbered lab tree, meaningful stubs, validation, and authoring backlog. |
| [UiPath Solution Storytelling](uipath-solution-storytelling.md) | Verified technical material must become an audience-ready narrative. | Source pile, audience brief, fact-checked story, article, or script. |
| [UiPath Skill Authoring Guide](uipath-skill-authoring-guide.md) | A reusable skill must be created, narrowed, reviewed, tested, or packaged. | Precise skill, resources, evaluation scenarios, and validation evidence. |

## A simple way to use the library

1. Open the guide for your situation.
2. Read **When to reach for it** and **Use a neighboring skill instead** first.
3. Compare your current state with the **Before and after** scenario.
4. Gather the listed inputs.
5. Copy and adapt the example prompt.
6. Use **It's working if** as your completion checklist.
7. Follow the official UiPath handoff before any product or platform operation.

[Return to the main README](../../README.md)

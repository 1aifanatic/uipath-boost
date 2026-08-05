# UiPath Discovery Interview

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-discovery-interview/SKILL.md)

## At a glance

| | |
|---|---|
| **Invocation** | Model-invoked — start it explicitly or let the agent select it when the request fits. |
| **Purpose** | Resolve automation requirements and process decisions through evidence-based questions. |
| **Use it when** | An idea, current process, proposed solution, or planning handoff still contains important business unknowns. |
| **Do not use it for** | Selling a solution before understanding the problem, writing implementation code, or asking users to repeat facts already present in artifacts. |
| **Primary output** | Decision log, evidence index, owned open questions, and a readiness verdict for discovery or planning. |
| **Maturity** | Core |

## What it does

Automation projects fail when unstated assumptions become technical defaults. A process may appear simple until transaction definitions, exception ownership, access, volumes, controls, SLAs, and acceptance evidence are examined. This skill turns a broad idea into explicit decisions supported by examples and accountable owners.

It also reduces interview fatigue by reading provided documents and repositories directly instead of asking people to remember information the agent can verify.

## Before and after

### Before

A stakeholder says, “Automate claims intake.” The team does not yet agree on what counts as one transaction, which claims are eligible, where exceptions go, what evidence proves success, or whether the target should be RPA, an agent, Maestro, or no automation. A premature design would silently invent those answers.

### After

The team has evidence-backed decisions covering the outcome, actors, triggers, inputs, systems, rules, exceptions, volumes, controls, access, target operating model, and acceptance criteria. Remaining questions have an owner, evidence request, and due condition. The material is ready for `uipath-planner`, or the interview clearly explains why it is not ready.

## When to reach for it

Invoke this skill as `$uipath-discovery-interview`, or let the agent select it automatically when the request matches its defined job.

- Before creating a PDD, SDD, or implementation plan.
- When an automation idea is vague or solution-led.
- When business rules, exceptions, ownership, or acceptance evidence are disputed.
- When a proposed architecture should be stress-tested against the actual workflow.
- When recent samples, screenshots, logs, SOPs, or reports can replace opinion with evidence.
- When a discovery workshop needs frontier rounds that ask every currently answerable decision together.

### Use a neighboring skill instead

- The business decisions are already approved and the next step is SDD planning.
- The request is to mine enterprise systems for opportunities; use `uipath-automation-discovery`.
- The user wants implementation or current product commands.
- The question can be answered directly from a provided artifact or repository.
- The discussion is only collecting hypothetical feature ideas with no target decision.

## Prerequisites

- A target process, problem, or decision.
- The accountable business owner and relevant subject-matter experts.
- Available SOPs, samples, screenshots, logs, reports, policies, workarounds, or repository context.
- Known constraints such as security, access, compliance, time, or technology.
- A choice of interview mode:
  - **Frontier-round mode** by default: ask every decision whose prerequisites are settled.
  - **One-question mode** only when the user requests it or a sensitive decision requires privacy or focus.

## What it produces

- A decision log with recommendations, owners, evidence, assumptions, and status.
- An evidence index stating what each item proves, its owner, freshness, sensitivity, and location.
- Open questions with specific evidence requests and owners.
- A readiness verdict: ready for continued discovery, ready for planning, or blocked with reasons.

## How it works

1. **Set the mode and target decision.** Avoid a long generic questionnaire.
2. **Build a dependency-aware decision tree.** Ask a question only after its prerequisites are settled.
3. **Prefer observed evidence.** Request recent examples, timings, errors, consequences, and source artifacts.
4. **Recommend before asking.** Give the accountable owner a concrete recommendation and rationale to accept or reject.
5. **Recompute the frontier.** Incorporate answers and completed fact-finding, then ask the next eligible round until decisions are settled or every open item has an owner and evidence request.

## Example scenario

The team believes invoice intake should be fully automated. Samples reveal that 18% of invoices require a tax decision by a specialist. The interview records the evidence, recommends automating standard invoices while routing tax exceptions to human review, names the business owner who must approve the threshold, and defines the acceptance evidence. The solution choice is now based on observed work rather than a wish list.

## Example prompt

```text
Use uipath-discovery-interview in frontier-round mode.

We are evaluating claims intake automation. Read the supplied SOP and samples
before asking anything. Cover the transaction definition, triggers, rules,
exceptions, volumes, SLAs, controls, access, target operating model, and
acceptance evidence. Recommend an answer before each decision question and
record unverified claims with owners. Stop when the material is planner-ready.
```

## Common questions

**Will this skill make changes simply because it is model-invoked?**

No. Model invocation only lets the agent load the instructions when the request fits. Source writes, tracker changes, tenant operations, deployments, and other consequential actions still require the authority stated by the request and the owning official skill.

## It's working if

- The current workflow and business problem are understood before a solution is proposed.
- Major claims have evidence or are explicitly marked unverified.
- Every material decision has a recommendation and accountable owner.
- Rules, exceptions, volumes, controls, access, and acceptance are covered.
- No unresolved branch is hidden.
- Open items have specific evidence requests and due conditions.
- A clear readiness verdict and next official owner are reported.

## Where it fits

This is a **model-invoked complementary discipline** in UiPath Boost. It may be selected directly by the agent or reached from a user-invoked workflow. Use [uipath-project-router](uipath-project-router.md) when the larger route is unclear.

## Official UiPath handoff

- `uipath-automation-discovery` owns enterprise opportunity mining and sizing.
- `uipath-planner` owns the SDD and canonical task plan once discovery is ready.
- Product skills own implementation after planning.

This skill supplies evidence and decisions; it does not decide current product behavior or write the automation.

## Related resources

- [Discovery with durable documentation](uipath-discovery-with-docs.md)
- [Process domain modeling](uipath-process-domain-modeling.md)
- [Skill source](../../skills/uipath-discovery-interview/SKILL.md)

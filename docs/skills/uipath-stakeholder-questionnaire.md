# UiPath Stakeholder Questionnaire

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-stakeholder-questionnaire/SKILL.md)

## At a glance

| | |
|---|---|
| **Purpose** | Create a short, recipient-specific questionnaire that closes named discovery gaps asynchronously. |
| **Use it when** | A stakeholder cannot join discovery and uniquely owns required facts, evidence, access, approvals, or decisions. |
| **Do not use it for** | Generic fifty-question checklists, compound questions, or requesting secrets through insecure channels. |
| **Primary output** | Markdown questionnaire, outcome-to-question coverage map, safe evidence request, and answer-intake plan. |
| **Maturity** | Core |

## Why this skill exists

Discovery often stalls because the right application SME, security reviewer, infrastructure owner, compliance partner, or business decision-maker cannot attend a workshop. A generic questionnaire creates more work and still misses the actual decision. This skill asks only for knowledge the recipient uniquely holds and connects every question to a pending project outcome.

## Before and after

### Before

The automation team needs SAP field definitions, error behavior, and a test-system contact. A broad questionnaire asks the SAP SME about business goals, volumes, security, process rules, and technical design—many subjects they do not own. The recipient postpones the request or answers only part of it.

### After

The SME receives a short questionnaire with clear context, estimated effort, prioritized single-topic questions, answer stubs, and a safe request for representative evidence. Each answer maps to a named design decision, and the project knows how responses will be added back into discovery.

## When to use

- A key stakeholder cannot join a workshop.
- One recipient uniquely owns application, security, infrastructure, support, compliance, data, or business-rule knowledge.
- Discovery has specific gaps rather than a general desire for information.
- Evidence or approvals must be requested asynchronously.
- A decision is blocked by facts that cannot be read from existing artifacts.

## When not to use

- The answer is already available in provided documents or systems.
- Several recipients with different expertise would receive the same generic form.
- The sender is being asked to guess answers that belong to the recipient.
- Questions combine several decisions and cannot be answered clearly.
- Secrets or raw sensitive data would be transferred insecurely.

## What you need before starting

- Recipient role, expertise, authority, project relationship, and likely context.
- The exact facts, decisions, evidence, access, owners, or approvals needed.
- The downstream decision enabled by each requested outcome.
- A reasonable due date and expected completion effort.
- Approved secure channels and redaction rules for evidence.
- An answer-intake location such as a discovery log or evidence index.

## What it produces

- A recipient-specific Markdown questionnaire.
- Purpose, context, effort, due date, partial-answer guidance, and uncertainty markers.
- Prioritized, single-idea questions with answer stubs.
- Evidence requests stating what each artifact proves and how to share safely.
- A coverage map from every needed outcome to a question.
- A plan for moving answers back into discovery and decisions.

## How it works

1. **Model the recipient.** Fix tone, assumed background, authority, and unique knowledge.
2. **Define required returns.** Connect each fact or artifact to a downstream decision.
3. **Write targeted questions.** Put the highest-value questions first and use one idea per question.
4. **Request evidence safely.** Include proof purpose, redaction, and transfer guidance.
5. **Reduce completion effort.** Make partial and uncertain answers acceptable and useful.
6. **Trace coverage.** Remove duplicates and ensure every named gap has a question and intake path.

## Example prompt

```text
Use uipath-stakeholder-questionnaire.

Create a questionnaire for the SAP application SME. We need field definitions,
supported lookup behavior, representative error examples, test-environment
ownership, and the approval needed for unattended access. Tie every question
to the pending design decision, provide answer stubs, estimate the effort,
request only redacted samples through the approved secure channel, and explain
how answers will update the evidence index and discovery decision log.
```

## How to know it is done

- Tone and assumed knowledge match one recipient.
- Every requested outcome is concrete and usable.
- Each question covers one idea and can be answered asynchronously.
- Highest-priority decisions appear first.
- Evidence requests explain what they prove and how to share safely.
- Every named gap maps to at least one question.
- Duplicates and compound questions are absent.
- The project has a clear answer-intake plan.

## Official UiPath handoffs

Answers may inform `uipath-planner`, an official product skill, `uipath-admin`, `uipath-governance`, or another owner, but this skill does not make those decisions or operations. Feed responses back into `uipath-discovery-with-docs` or the relevant discovery artifact before planning.

## Related resources

- [Questionnaire template](../../skills/uipath-stakeholder-questionnaire/assets/questionnaire-template.md)
- [Discovery With Docs guide](uipath-discovery-with-docs.md)
- [Skill source](../../skills/uipath-stakeholder-questionnaire/SKILL.md)

# UiPath Test Driven Automation

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-test-driven-automation/SKILL.md)

## At a glance

| | |
|---|---|
| **Purpose** | Implement one observable UiPath business behavior at a time through witnessed red-green evidence. |
| **Use it when** | A feature, defect, or critical rule needs durable coverage at the same public seam production uses. |
| **Do not use it for** | Testing private activity arrangement, pre-writing every imagined test, or computing expectations with the same logic under test. |
| **Primary output** | Confirmed seams, red-green evidence per behavior, durable regression tests, and final validation record. |
| **Maturity** | Core |

## Why this skill exists

Tests tied to private workflow layout fail during harmless refactoring and may still miss the business outcome. Behavior-first development starts from the highest stable public seam—workflow call, queue transition, API response, agent outcome, Maestro result, or human task—and makes one meaningful example fail before implementation.

## Before and after

### Before

A queue retry rule is implemented first and later tested by checking internal variables. The expected value is produced by a helper that uses the same rule as production. The test passes even when the public queue state is wrong and breaks whenever activities are rearranged.

### After

The team agrees that the public seam is the observable queue transition. An independent acceptance example fails for the correct reason, the official product owner implements only enough to pass it, and the same test becomes durable regression protection. Edge, exception, retry, and idempotency slices are added one at a time according to risk.

## When to use

- Implementing a new business behavior.
- Fixing a defect that must remain fixed.
- Critical rules need independent expected outcomes.
- Public seams across workflows, APIs, queues, agents, Maestro, or tasks need clarification.
- Refactoring should remain safe while internal structure changes.
- A team needs observed red-green evidence rather than tests added after the fact.

## When not to use

- There is no agreed public behavior seam.
- The test would assert private variables or activity order.
- Expected results would reuse production logic.
- The risky integration would be mocked away completely.
- The team plans a large batch of tests before learning from the first slice.

## What you need before starting

- Approved behavior and acceptance language.
- Candidate public seam and its official owner.
- One small representative example with independently derived expected values.
- Test environment, fixtures, and authority for source changes.
- Agreed focused and full regression gates.

## What it produces

- User-confirmed public seams that deserve tests.
- One acceptance example per behavior slice.
- Observed red evidence showing the missing behavior.
- Minimal implementation through the owning official skill.
- Observed green evidence from the same test.
- Retained tests for normal, edge, exception, retry, idempotency, and human-decision paths based on risk.
- Final build, validation, integration, and regression results.

## How it works

1. **Agree the seam.** Test where real callers observe behavior.
2. **Choose one vertical slice.** Describe capability, context, and outcome.
3. **Observe red.** The narrow test must fail for the intended reason before implementation.
4. **Make it green.** Implement only enough for the current behavior.
5. **Repeat with learning.** Add the next risk-relevant slice after the previous one.
6. **Run broader gates.** Record all observed validation and regression results.

## Example prompt

```text
Use uipath-test-driven-automation.

Implement the approved queue retry rule one behavior at a time. First propose
the highest stable public seam and one acceptance example with independently
derived expected queue state. Use the official RPA skill to run the narrow test
and show the intended red result before changing source. Implement only enough
to make it green, then add exception and idempotency slices and run broader gates.
```

## How to know it is done

- The user confirmed the public seam.
- Each test describes observable capability rather than implementation layout.
- Red was actually observed for the intended reason.
- The same test became green after bounded implementation.
- Expectations are independent from production logic.
- Risky integrations were not mocked away.
- Retained tests protect externally meaningful behavior.
- Broader quality gates have recorded results.

## Official UiPath handoffs

Official skills build and run product-specific tests and source changes: `uipath-rpa`, `uipath-agents`, Maestro skills, `uipath-coded-apps`, and `uipath-api-workflow`. `uipath-test` owns Test Manager resources, executions, and reports. This skill supplies the red-green development discipline across those owners.

## Related resources

- [Regression Harness guide](uipath-regression-harness.md)
- [Requirement Traceability guide](uipath-requirement-traceability.md)
- [Skill source](../../skills/uipath-test-driven-automation/SKILL.md)

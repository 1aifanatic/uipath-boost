# UiPath Regression Harness

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-regression-harness/SKILL.md)

## At a glance

| | |
|---|---|
| **Purpose** | Convert one anchored UiPath defect into a fast, safe, red-capable reproduction that remains after the fix. |
| **Use it when** | `uipath-troubleshoot` or the product owner has confirmed the symptom or cause and the fix needs repeatable before/after evidence. |
| **Do not use it for** | Root-cause diagnosis, broad production investigation, or applying the source/platform fix. |
| **Primary output** | Symptom contract, minimal fixture, one-command harness, observed red evidence, reproduction rate, and green expectation. |
| **Maturity** | Core |

## Why this skill exists

A confirmed incident is not durable protection. If the failure cannot be reproduced quickly and independently, the fix owner may rely on judgment and future changes can reintroduce the defect. This skill captures the exact observable symptom at the highest valid public seam and makes it practical to rerun.

## Before and after

### Before

Troubleshooting confirms that a specific invoice variant causes the robot to create a queue item with the wrong tax code. The evidence exists in an incident record, but reproducing it requires a production-like run and manual inspection. The developer cannot prove the correction independently.

### After

A redacted minimal fixture replays the approved variant through the public processing seam. One documented command asserts the independently expected queue output, fails on the exact symptom, and reports a stable reproduction rate. After the official owner fixes the behavior, the same command and the original scenario turn green and remain in regression coverage.

## When to use

- A symptom or cause is already anchored by diagnosis.
- The fix owner needs proof before changing source.
- An intermittent failure needs a measured reproduction rate.
- Production evidence must become a safe local fixture.
- A known API, queue, agent, Maestro, app, or workflow defect needs durable coverage.

## When not to use

- The symptom is still vague or the investigation is still causal.
- You need broad live production queries.
- The request is to apply the fix.
- The fixture cannot be redacted or used within authorization.
- The proposed harness has never observed the exact failure.

## What you need before starting

- Anchored entity and exact user-visible symptom.
- Correlated evidence and known-good comparison when available.
- The official owner responsible for the fix.
- Minimum permitted input and independently expected result.
- Environment, time, randomness, version, and dependency controls.
- Authorization boundaries inherited from diagnosis.

## What it produces

- An anchored symptom contract with no root-cause invention.
- A minimal safe fixture.
- One command or bounded test at a public behavior seam.
- Observed failure output and reproduction rate.
- Practical duration and flakiness information.
- Expected green behavior and fix-owner handoff.
- Preserved regression asset after the correction.

## How it works

1. **Import the diagnosis contract.** Stop and route to troubleshooting if the target is not anchored.
2. **Choose the highest valid seam.** Reproduce real behavior without private implementation assertions.
3. **Build a deterministic fixture.** Redact data and pin avoidable variability.
4. **Observe red and tighten.** Confirm the exact symptom, then improve speed and stability.
5. **Hand off and preserve.** Give the official owner the command, evidence, and expected green condition.

## Example prompt

```text
Use uipath-regression-harness.

The troubleshooting report anchors invoice INV-EXAMPLE-07 and the wrong tax-code
queue output. Build the smallest redacted fixture at the public processing seam,
derive the expected result independently, pin time and external dependencies,
and produce one documented command. Run it to observe the exact red symptom and
report the reproduction rate. Do not diagnose or apply the fix.
```

## How to know it is done

- The target is a specific observable failure, not a theory.
- The seam reproduces the real pattern.
- Fixture and expected result are safe and independently verifiable.
- Time, randomness, versions, and dependencies are controlled where practical.
- The exact failure was observed, or impossibility is reported honestly.
- The command is fast and deterministic enough to rerun.
- The official fix owner has the red evidence and green condition.
- No diagnosis or source/platform fix was performed.

## Official UiPath handoffs

`uipath-troubleshoot` owns causal investigation. The matching official artifact skill—RPA, agents, Maestro, coded apps, API workflows, functions, or connectors—owns the fix. `uipath-test` owns Test Manager operations. This harness connects diagnosis to implementation evidence without replacing either.

## Related resources

- [Test Driven Automation guide](uipath-test-driven-automation.md)
- [UAT Session guide](uipath-uat-session.md)
- [Skill source](../../skills/uipath-regression-harness/SKILL.md)

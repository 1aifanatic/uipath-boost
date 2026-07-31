# UiPath Requirement Traceability

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-requirement-traceability/SKILL.md)

## At a glance

| | |
|---|---|
| **Purpose** | Prove how approved requirements connect to implementation, review, tests, execution evidence, UAT, and release evidence. |
| **Use it when** | A team explicitly needs coverage analysis, auditability, UAT mapping, missing-evidence analysis, or release traceability. |
| **Do not use it for** | Running `uipath-review`, inventing coverage from filenames, modifying requirements, or replacing Test Manager reports. |
| **Primary output** | Versioned traceability matrix, gap lists, ownership actions, and coverage statistics with explicit denominators. |
| **Maturity** | Core |

## Why this skill exists

Having requirements, code, tests, and reports in the same repository does not prove they are connected. Release and audit decisions need observed links: which version of a requirement, what implemented behavior, which review result, which test execution, which UAT evidence, and who accepted the outcome.

## Before and after

### Before

The release candidate has an SDD, review report, test suite, Test Manager export, and UAT notes. Teams believe coverage is high, but requirement identities are inconsistent and several claims point only to similarly named files. No one can identify the missing evidence quickly.

### After

Every source requirement has a stable ID and exact citation. Rows connect to versioned implementation, official review status, automated/manual tests, execution evidence, UAT result, and readiness evidence. Each row has one transparent coverage status, rationale, owner, and next action. Statistics state the denominator and do not masquerade as approval.

## When to use

- Preparing audit-ready evidence.
- Checking requirement coverage before release.
- Mapping UAT outcomes to approved requirements.
- Finding missing or stale execution evidence.
- Demonstrating accepted risks and out-of-scope items transparently.
- Supporting `uipath-release-readiness` with structured coverage evidence.

## When not to use

- Requirements or the SDD are not approved and versioned.
- The official review or test evidence still needs to be produced.
- You want to infer implementation from file-name similarity.
- You intend to rewrite source requirements during normalization.
- The result is being treated as security, legal, or release approval.

## What you need before starting

- Approved requirements or SDD version.
- Official `uipath-review` report.
- Implementation release, package, or commit.
- Automated/manual test definitions and executions.
- Test Manager and UAT evidence when applicable.
- Acceptance owner and release evidence.

## What it produces

- Stable requirement IDs with exact source and acceptance language.
- Links to implementation artifact or observed behavior.
- Official review finding status.
- Test, execution, UAT, and readiness evidence links.
- One status per requirement: Covered, Partially Covered, Not Covered, Not Testable, Evidence Missing, Out of Scope, or Accepted Risk.
- Rationale, owner, and next action for every gap.
- Uncovered and stale-evidence lists.
- Coverage statistics with an explicit denominator.

## How it works

1. **Pin authoritative versions.** Every row must cite versioned inputs.
2. **Normalize identities without rewriting meaning.** Split compound requirements only when the source permits it.
3. **Link observed implementation and verification.** Do not infer evidence.
4. **Classify coverage and gaps.** Give every row one transparent status.
5. **Publish matrix and exceptions.** Make business, QA, and release actions visible.

## Example prompt

```text
Use uipath-requirement-traceability.

Build a traceability matrix from approved SDD v1.4, the official review report,
release commit abc123, automated test results, Test Manager execution TM-88,
and UAT evidence. Preserve requirement wording and exact source references.
Classify each row using the defined coverage statuses, link only observed
evidence, identify owners and next actions, and report statistics with denominators.
```

## How to know it is done

- Every row cites versioned authoritative sources.
- No requirement was silently changed or lost.
- Every claimed link points to observed evidence.
- Each requirement has one transparent status and rationale.
- Missing and stale evidence are separate from missing implementation.
- Owners and next actions exist for every exception.
- Statistics state exactly what population they measure.
- The matrix does not claim to replace review, Test Manager, or approval.

## Official UiPath handoffs

`uipath-planner` owns approved design sources, `uipath-review` owns artifact review, `uipath-test` owns Test Manager operations and reports, and `uipath-insights` owns live KPI analytics. Traceability consumes their evidence without rerunning or substituting for it.

## Related resources

- [Release Readiness guide](uipath-release-readiness.md)
- [UAT Session guide](uipath-uat-session.md)
- [Skill source](../../skills/uipath-requirement-traceability/SKILL.md)

# UiPath Release Readiness

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-release-readiness/SKILL.md)

## At a glance

| | |
|---|---|
| **Purpose** | Aggregate authoritative evidence into a reproducible Ready, Conditionally Ready, or Not Ready verdict. |
| **Use it when** | A specific UiPath package or solution and target have official validation, review, and supporting release evidence. |
| **Do not use it for** | Product review, Test Manager operations, policy/identity changes, deployment, activation, promotion, or production mutation. |
| **Primary output** | Release record, evidence matrix, environment/operations checklist, residual-risk register, and verdict. |
| **Maturity** | Core |

## Why this skill exists

A successful build or test does not prove that an automation is safe to release. Production readiness also depends on exact artifact identity, target dependencies, security, governance, monitoring, runbooks, ownership, rollback, recovery, reconciliation, and accepted residual risk. This skill makes the release decision explicit without confusing the verdict with authorization to deploy.

## Before and after

### Before

The team says “tests are green, so we are ready.” The package version and source commit are unclear, some review rules were skipped, target assets and licenses have not been confirmed, support has no runbook, and two security findings are buried in meeting notes.

### After

One record pins the release unit and target, accounts for every evidence source and skipped rule, identifies environment and operational dependencies, captures security dispositions, and lists residual risks with owners and due dates. The verdict is `Not Ready` until named blockers close, or `Conditionally Ready` with explicit conditions. Deployment remains a separate authorized action.

## When to use

- Preparing a production go/no-go decision.
- Assessing an upgrade or new package activation.
- Reviewing a defined release candidate and environment.
- Aggregating build, review, test, UAT, security, governance, operations, and support evidence.
- Producing a decision that business and technical approvers can reproduce.

## When not to use

- The release artifact, commit, version, or target is ambiguous.
- Official review and product validation evidence do not exist.
- You want the skill to run deployment or activation.
- Missing or stale evidence would be marked passed.
- Successful tests are being treated as complete business, security, and operational proof.

## What you need before starting

- Package or solution version, source commit, target alias, scope, change window, owners, deployment method, and rollback target.
- Official build, validation, review, test, packaging, dependency, acceptance, and known-defect evidence.
- Target resource and policy evidence from official platform/admin/governance owners.
- Observability, runbooks, support, continuity, backup, reconciliation, rollback, and post-release verification plans.
- Current solution security assessment.
- Risk acceptance method and approvers.

## What it produces

- Exact release-unit and target record.
- Evidence matrix showing source, version/date, result, skipped checks, owner, and freshness.
- Target dependency and environment readiness checklist.
- Operational readiness covering detection, diagnosis, containment, recovery, and reconciliation.
- Security, privacy, AI, governance, and access disposition summary.
- Residual-risk register with probability, impact, window, mitigation, owner, due date, and blocking status.
- Ready, Conditionally Ready, or Not Ready verdict with conditions, approvers, rollback trigger, and next authorized action.

## How it works

1. **Pin the release unit.** Remove all ambiguity about artifact and target.
2. **Account for build and requirement evidence.** Include skipped and unavailable checks.
3. **Verify target dependencies through official owners.** Name every blocker.
4. **Verify operational readiness.** Prove the team can detect, diagnose, contain, and recover.
5. **Consume security and governance evidence.** Do not recreate official operations.
6. **Expose residual risk.** Never hide blockers inside generic caveats.
7. **Issue the verdict.** Keep decision and deployment separate.

## Example prompt

```text
Use uipath-release-readiness.

Assess solution 2.3.0 from commit abc123 for PROD-US. Use the existing official
review, test, packaging, platform, security, and UAT evidence. Account for every
skipped or stale check, verify operational and rollback readiness, list residual
risks with owners and dispositions, and issue Ready, Conditionally Ready, or Not
Ready with exact blockers and next authorized action. Do not deploy or activate.
```

## How to know it is done

- Artifact, commit, target, scope, owners, and rollback target are unambiguous.
- Technical and specification readiness have observed evidence.
- Missing, skipped, unavailable, and stale evidence are visible.
- Required target dependencies exist or have named blockers.
- Monitoring, support, recovery, rollback, and reconciliation are usable.
- Security and governance findings have owners and dispositions.
- Every residual risk has a clear release effect.
- The verdict follows reproducibly from evidence and performs no deployment.

## Official UiPath handoffs

`uipath-review`, `uipath-test`, `uipath-platform`, `uipath-admin`, `uipath-governance`, `uipath-insights`, and `uipath-troubleshoot` own their evidence and operations. `uipath-solution` owns packaging, deployment, and activation after explicit authority. Release Readiness only aggregates and decides.

## Related resources

- [Requirement Traceability guide](uipath-requirement-traceability.md)
- [Solution Security Assessment guide](uipath-solution-security-assessment.md)
- [Skill source](../../skills/uipath-release-readiness/SKILL.md)

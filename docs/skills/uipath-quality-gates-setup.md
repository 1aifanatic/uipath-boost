# UiPath Quality Gates Setup

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-quality-gates-setup/SKILL.md)

## At a glance

| | |
|---|---|
| **Purpose** | Add tiered local and CI quality gates using current commands supplied by official UiPath product skills. |
| **Use it when** | A repository needs fast developer checks, PR validation, security/boundary checks, packaging evidence, or release gates. |
| **Do not use it for** | Guessing UiPath CLI commands, replacing pipelines wholesale, exposing secrets, or forcing slow environment tests on every commit. |
| **Primary output** | Project inventory, gate design, local/CI configuration, pass-fail-pass evidence, operations guide, and limitations. |
| **Maturity** | Pilot |

## Why this skill exists

Quality checks often exist as tribal knowledge or one long release checklist. Developers discover problems late because fast checks are not local, while CI either misses product-specific validation or runs expensive environment tests too often. This skill assembles official commands into risk-based tiers and proves critical checks detect representative violations.

## Before and after

### Before

A repository contains XAML, coded automation, an agent, tests, and a solution wrapper. CI only runs a generic linter. Product validation happens manually before release, package failures arrive late, and nobody knows which owner maintains each command.

### After

Project types are inventoried. Official owners provide current validate, build, test, review, and packaging commands. Fast checks run locally, comprehensive gates run on PRs, environment-dependent checks run at appropriate times, and release gates retain evidence. Critical checks have clean-pass, controlled-failure, and restored-pass proof.

## When to use

- A multi-project repository lacks consistent validation.
- Pull requests need product-specific checks.
- Packaging and release evidence are manual or late.
- Boundary, schema, secret, format, build, and test checks need clear tiers.
- Existing pipeline jobs should be extended without being replaced.
- A team needs documented ownership and update rules for changing CLI contracts.

## When not to use

- The repository and project types have not been inventoried.
- Product commands would be invented from memory.
- The change would overwrite unrelated hooks or jobs.
- Required credentials would be committed or logged.
- Slow tenant/UI tests would become mandatory locally without agreement.

## What you need before starting

- Repository access and current pipelines, hooks, package managers, build files, branch policy, tests, and generated-artifact conventions.
- Official product owners for every project type.
- Runner, tenant, license, credential, and environment availability.
- Team expectations for local speed and PR/release evidence.
- Authority to update local scripts and CI configuration.

## What it produces

- Project-type and existing-gate inventory.
- Current official commands with owner, delivery model, and version assumptions.
- Gate tiers: developer, commit/pre-push, PR, nightly/environment, and release.
- Trigger, duration class, failure owner, and evidence output per gate.
- Updated scripts and pipeline stages that coexist with current automation.
- Pass-fail-pass or documented static evidence for critical checks.
- Operations, skip, troubleshooting, ownership, update, and limitations guidance.

## How it works

1. **Detect project markers and existing automation.** Inventory before designing.
2. **Ask official skills for exact commands.** Never guess product contracts.
3. **Design risk-based tiers.** Keep fast feedback fast and expensive checks intentional.
4. **Merge into current workflows.** Preserve unrelated jobs and approved secret handling.
5. **Prove critical gates.** Use a controlled violation and restore clean state.
6. **Document operation.** Make commands, triggers, artifacts, skips, and owners discoverable.
7. **Report limitations.** State what could not be verified end to end.

## Optional marker inventory

```bash
python skills/uipath-quality-gates-setup/scripts/check_project_markers.py .
```

The helper lists known UiPath project markers and can require expected types. It does not validate those products; official skills supply the actual commands.

## Example prompt

```text
Use uipath-quality-gates-setup.

Inventory all UiPath project types and existing CI in this repository. Ask each
official product skill for its current validation contract, then design fast
developer, PR, nightly, and release tiers with owners and evidence outputs.
Merge the gates into existing automation without exposing secrets. Prove each
critical static gate with pass-fail-pass evidence and document all limitations.
```

## How to know it is done

- All project types and existing gates are inventoried.
- Every product command has an official owner and current assumptions.
- Each gate has a trigger, duration, failure owner, and evidence output.
- New configuration preserves unrelated automation.
- Critical gates demonstrate failure on a representative violation.
- Developers and maintainers can run and update the gates from documentation.
- Unavailable environments, credentials, licenses, runners, and preview limitations are explicit.

## Official UiPath handoffs

Official RPA, agent, Maestro, coded-app, API-workflow, test, review, and solution skills own the commands and product validity. This skill composes them into repository and CI workflow; it does not define their contracts.

## Related resources

- [Project marker helper](../../skills/uipath-quality-gates-setup/scripts/check_project_markers.py)
- [Project Boundaries guide](uipath-project-boundaries.md)
- [Skill source](../../skills/uipath-quality-gates-setup/SKILL.md)

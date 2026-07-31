# UiPath Project Boundaries

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-project-boundaries/SKILL.md)

## At a glance

| | |
|---|---|
| **Purpose** | Define small public entry points and enforce allowed dependency directions across a UiPath solution or repository. |
| **Use it when** | Projects have deep imports, cycles, duplicated contracts, test backdoors, or unclear ownership. |
| **Do not use it for** | Arbitrary folder restrictions, breaking every existing consumer at once, or confusing deployed resources with source dependencies. |
| **Primary output** | Dependency inventory, public-surface policy, automated checks with pass-fail-pass evidence, migration plan, and discovery links. |
| **Maturity** | Pilot |

## Why this skill exists

Multi-project UiPath solutions become difficult to change when consumers reach into library internals, tests use private seams, and dependency direction is implicit. Humans and agents then need a large mental model before making a small edit. Explicit boundaries create a smaller safe surface and make violations detectable before release.

## Before and after

### Before

An orchestration project imports internal classes from two coded packages, tests instantiate private helpers, and libraries depend on each other in a cycle. A package upgrade changes an internal path and breaks unrelated projects. No document explains which entry points are public.

### After

Every executable and reusable unit has an owner, public entry points, private internals, and permitted dependency directions. A repository-native check detects forbidden deep imports. Evidence shows a clean pass, a temporary representative violation failing, and a clean pass after reverting. Existing violations have an expand-contract migration path.

## When to use

- Reusable libraries or coded packages expose internals accidentally.
- Several projects contain duplicated copies of the same contract.
- Circular dependencies make packaging or testing fragile.
- Tests use seams production callers cannot use.
- Agent navigation requires opening many implementation folders.
- CI should block new boundary violations while existing ones migrate safely.

## When not to use

- A shared contract is genuinely necessary and being blocked only by a stylistic folder rule.
- There is one implementation with no isolation or reuse need.
- The team plans to break all consumers without expand-contract compatibility.
- Runtime queues, assets, or deployed resources are being treated as if they were source imports.
- No command can demonstrate that the boundary check actually fails on a violation.

## What you need before starting

- The solution’s projects, packages, libraries, test projects, and source references.
- Runtime resource dependencies kept separate from source dependencies.
- Current consumers and owners.
- Repository-native analyzer, script, package, or CI options.
- Authority to add documentation and checks; separate authority for source migrations.

## What it produces

- A dependency inventory and diagram.
- Public workflow, class, API, event, or contract entry points for every unit.
- Explicit private surfaces and allowed dependency directions.
- Rules for deep references, cycles, tests, generated artifacts, and versioning.
- A documented enforcement command.
- Pass-fail-pass evidence proving the check detects a real violation.
- A bounded migration plan for existing violations.
- Links from agent instructions and project READMEs to the policy.

## How it works

1. **Inventory units and dependencies.** Assign an owner to every executable and reusable unit.
2. **Define public entry points.** Keep the surface small and behavior-oriented.
3. **Write enforceable rules.** Separate source, test, generated, and runtime relationships.
4. **Implement repository-native checks.** Use official skills for product validation; do not invent CLI commands.
5. **Prove the checks bite.** Demonstrate pass, intentional failure, and restored pass.
6. **Migrate safely.** Use expand-contract steps rather than a repository-wide break.
7. **Make rules discoverable.** Put links where people and agents make changes.

## Example prompt

```text
Use uipath-project-boundaries.

Inventory dependencies across this multi-project UiPath solution. Define the
public entry points for each library, coded package, test project, and
orchestration project; separate runtime resource dependencies from source
dependencies. Add a repository-native boundary check and demonstrate
pass-fail-pass evidence with one temporary forbidden deep import. Plan existing
violations through expand-contract migration instead of breaking consumers.
```

## How to know it is done

- Every unit has an owner and dependency set.
- Public and private surfaces are explicit.
- Allowed and forbidden directions are precise enough to automate.
- A documented command runs the check.
- Pass-fail-pass evidence proves enforcement.
- Existing violations have owners and a transition plan.
- The policy is linked at the point of change.
- Official product validation remains with official skills.

## Official UiPath handoffs

Use official product owners such as `uipath-rpa` and `uipath-agents` for artifact changes and validation, `uipath-review` for read-only assessment, and `uipath-solution` for solution packaging and deployment. Use `uipath-safe-refactor-plan` and `uipath-pattern-migration` for existing dependency violations.

## Related resources

- [Component Design guide](uipath-component-design.md)
- [Pattern Migration guide](uipath-pattern-migration.md)
- [Skill source](../../skills/uipath-project-boundaries/SKILL.md)

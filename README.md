# UiPath Boost

**Community skills for better UiPath automation**

UiPath Boost gives you 34 Agent Skills for planning, designing, testing, releasing, operating, and explaining UiPath automations. Install the full catalog once, then use `uipath-project-router` to choose the smallest correct workflow for each job.

> [!IMPORTANT]
> UiPath Boost is an independent community project maintained by [1aifanatic](https://github.com/1aifanatic). It is not an official UiPath product or skill catalog. Official UiPath skills remain the source of truth for product commands, schemas, validation, deployment, tenant operations, and current platform behavior.

## Start here: install the full catalog

### 1. Install the official UiPath skills

```bash
npm install -g @uipath/cli
uip skills install
```

### 2. Install all 34 UiPath Boost skills

> [!TIP]
> **Recommended:** Install the complete catalog globally. You will not need to return later and install skills one at a time.

```bash
npx skills add 1aifanatic/uipath-boost --skill '*' --agent codex --global --yes
```

That single command:

- Installs all 34 skills.
- Makes them available across your projects.
- Gives the Project Router every available workflow to choose from.
- Avoids repeated installation whenever your work moves from discovery to development, testing, release, or support.

Installing the catalog does **not** run every skill, deploy an automation, or change your UiPath tenant. It only makes the skill instructions available to your agent.

Using another coding agent? Replace `codex` with a supported agent such as `claude-code` or `cursor`.

### 3. Tell the router what you need

```text
Use uipath-project-router.

I need to <describe the UiPath outcome>.
My available inputs are <repository, PDD, SDD, report, error, or evidence>.
Tell me the smallest correct sequence of official UiPath and UiPath Boost skills.
Do not modify files or platform resources while routing.
```

You do not need to memorize all 34 skill names. Describe your goal and let the router select the right starting point.

## Why install everything at once?

| Benefit | What it means for you |
|---|---|
| One simple setup | Run one installation command instead of managing 34 separate installations. |
| Better routing | The router can choose from the complete catalog. |
| End-to-end coverage | Move from discovery through delivery, testing, release, and support without stopping to install another skill. |
| Consistent teams | Developers, testers, architects, and support teams can use the same skill set. |
| No automatic platform changes | Installed skills remain instructions until your agent invokes one for a relevant task. |

## Why UiPath Boost exists

Official UiPath skills are responsible for current UiPath product behavior. They author and validate product artifacts, operate the platform, troubleshoot failures, and manage product lifecycles.

UiPath Boost adds repeatable engineering practices around that product work: requirements discovery, decision records, task refinement, architecture exploration, regression evidence, source-control safety, release readiness, observability, security assessment, and knowledge transfer.

> Official UiPath skills build and operate UiPath products. UiPath Boost improves the engineering process before, after, and around that work.

| Official UiPath skills own | UiPath Boost adds |
|---|---|
| Product commands, schemas, and authoring | Discovery, decisions, and delivery continuity |
| Artifact validation, testing, and troubleshooting | Architecture options, regression evidence, and traceability |
| Tenant operations, governance, and deployment | Release readiness, observability, security, and handoffs |

UiPath Boost stops when the next action belongs to an official UiPath skill.

## Prefer a smaller installation?

First inspect the catalog:

```bash
npx skills add 1aifanatic/uipath-boost --list
```

Install only the Project Router:

```bash
npx skills add 1aifanatic/uipath-boost --skill uipath-project-router --agent codex --global --yes
```

Install one specific skill:

```bash
npx skills add 1aifanatic/uipath-boost --skill uipath-regression-harness --agent codex --global --yes
```

Omit `--global` when you want the installation limited to the current project.

## Branded npm installer

The standard GitHub installation above works now. After the `uipath-boost` package is published to npm, these shorter commands will also be available:

```bash
npx uipath-boost list
npx uipath-boost install --all --agent codex --global --yes
```

## What is included

<details>
<summary><strong>View all 34 skills by category</strong></summary>

### Routing and project continuity

- `uipath-project-router`
- `uipath-delivery-control-plane`
- `uipath-project-handoff`
- `uipath-project-knowledge-base`

### Discovery and decision-making

- `uipath-discovery-interview`
- `uipath-discovery-with-docs`
- `uipath-work-intake-triage`
- `uipath-program-wayfinder`
- `uipath-research-note`
- `uipath-process-domain-modeling`
- `uipath-workflow-spec-workspace`
- `uipath-stakeholder-questionnaire`

### Design and architecture

- `uipath-component-design`
- `uipath-architecture-deepening`
- `uipath-project-boundaries`
- `uipath-prototype`
- `uipath-safe-refactor-plan`

### Build, test, and change quality

- `uipath-task-refinement`
- `uipath-test-driven-automation`
- `uipath-regression-harness`
- `uipath-requirement-traceability`
- `uipath-source-control-conflicts`
- `uipath-uat-session`
- `uipath-quality-gates-setup`
- `uipath-pattern-migration`
- `uipath-source-control-guardrails`

### Release, operations, and governance

- `uipath-release-readiness`
- `uipath-observability-design`
- `uipath-solution-security-assessment`
- `uipath-runbook-wizard`

### Learning and communication

- `uipath-learning-workspace`
- `uipath-training-lab-scaffolder`
- `uipath-solution-storytelling`
- `uipath-skill-authoring-guide`

</details>

## Common routes

### New automation

```text
UiPath Boost discovery
-> official uipath-planner
-> optional UiPath Boost task refinement
-> official artifact owner
-> official uipath-review
-> UiPath Boost release readiness
```

### Production defect

```text
Official uipath-troubleshoot
-> UiPath Boost regression harness
-> official artifact owner applies the fix
-> official review and testing
```

### Pre-production release

```text
Official review and test evidence
-> UiPath Boost security assessment and traceability
-> UiPath Boost release-readiness verdict
-> official deployment owner with explicit authorization
```

## Safety

Agent Skills can influence tools and command execution. Review skill instructions as carefully as automation code.

- Product-changing actions stay with official UiPath skills.
- Deployment, activation, deletion, identity, policy, and production changes require explicit authority.
- Review mutating helper scripts and their scope before running them.
- Never place credentials, customer data, tenant secrets, or personal information in skill files.

See [SECURITY.md](SECURITY.md) for reporting and review expectations.

## Development

Requirements: Node.js 22.20 or newer.

```bash
npm install
npm run validate
npm test
npm pack --dry-run
```

The validation suite checks all 34 skill packages, metadata, internal links, and retired conflicting skills. Installer tests cover interactive, selected-skill, starter, and full-catalog installation arguments.

## Learn more

- [Strategy and publishing plan](docs/STRATEGY-AND-PUBLISHING-PLAN.md)
- [Contribution guide](CONTRIBUTING.md)
- [Security policy](SECURITY.md)
- [Official UiPath skills](https://github.com/UiPath/skills)
- [Agent Skills CLI documentation](https://skills.sh/docs)

## Status and license

UiPath Boost is currently a pilot release. Structural validation and installer tests pass, but not every skill has been exercised against every UiPath product, tenant configuration, license, operating system, or future CLI version.

Licensed under the MIT License. See [LICENSE](LICENSE).

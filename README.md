# UiPath Boost

**Community skills for better UiPath automation**

UiPath Boost v0.2 gives you 34 Agent Skills for planning, designing, testing, releasing, operating, and explaining UiPath automations. Install the full catalog once, then use `uipath-project-router` to choose the smallest correct workflow for each job.

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

## How the skills start

Installing the full catalog makes every skill available; it does not run all 34. UiPath Boost uses two clear invocation modes:

| Mode | What happens | Best for |
|---|---|---|
| **User-invoked** | You deliberately name the skill, such as `Use $uipath-project-router`. | Orchestration, durable workspaces, repository setup, and cross-project decisions. |
| **Model-invoked** | You may name the skill, or the agent may select it when your request precisely matches. | Focused engineering disciplines such as component design, regression evidence, observability, or security assessment. |

The 15 user-invoked skills are `uipath-project-router`, `uipath-architecture-deepening`, `uipath-delivery-control-plane`, `uipath-discovery-with-docs`, `uipath-learning-workspace`, `uipath-program-wayfinder`, `uipath-project-handoff`, `uipath-quality-gates-setup`, `uipath-source-control-guardrails`, `uipath-stakeholder-questionnaire`, `uipath-task-refinement`, `uipath-training-lab-scaffolder`, `uipath-uat-session`, `uipath-work-intake-triage`, and `uipath-workflow-spec-workspace`. The other 19 are model-invoked. Codex enforces the split through each skill's `agents/openai.yaml`; explicit-use wording preserves the same intent in other compatible agents.

Invocation never expands authority. A skill still cannot edit source, operate a tenant, deploy, publish, or perform another consequential action unless your request authorizes it and the correct official UiPath owner performs the product work.

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

## Plugin-ready package

UiPath Boost includes Codex and Claude plugin manifests in addition to the Agent Skills catalog. This keeps the repository ready for plugin-based discovery while the GitHub installation command above remains the recommended universal setup. No plugin marketplace installation is required to use the skills.

## What is included

For detailed explanations, before-and-after examples, prompts, completion checks, and official UiPath handoffs, open the **[complete skill guide library](docs/skills/README.md)** or select any skill below.

<details>
<summary><strong>View all 34 skills by category</strong></summary>

### Routing and project continuity

- [`uipath-project-router`](docs/skills/uipath-project-router.md)
- [`uipath-delivery-control-plane`](docs/skills/uipath-delivery-control-plane.md)
- [`uipath-project-handoff`](docs/skills/uipath-project-handoff.md)
- [`uipath-project-knowledge-base`](docs/skills/uipath-project-knowledge-base.md)

### Discovery and decision-making

- [`uipath-discovery-interview`](docs/skills/uipath-discovery-interview.md)
- [`uipath-discovery-with-docs`](docs/skills/uipath-discovery-with-docs.md)
- [`uipath-work-intake-triage`](docs/skills/uipath-work-intake-triage.md)
- [`uipath-program-wayfinder`](docs/skills/uipath-program-wayfinder.md)
- [`uipath-research-note`](docs/skills/uipath-research-note.md)
- [`uipath-process-domain-modeling`](docs/skills/uipath-process-domain-modeling.md)
- [`uipath-workflow-spec-workspace`](docs/skills/uipath-workflow-spec-workspace.md)
- [`uipath-stakeholder-questionnaire`](docs/skills/uipath-stakeholder-questionnaire.md)

### Design and architecture

- [`uipath-component-design`](docs/skills/uipath-component-design.md)
- [`uipath-architecture-deepening`](docs/skills/uipath-architecture-deepening.md)
- [`uipath-project-boundaries`](docs/skills/uipath-project-boundaries.md)
- [`uipath-prototype`](docs/skills/uipath-prototype.md)
- [`uipath-safe-refactor-plan`](docs/skills/uipath-safe-refactor-plan.md)

### Build, test, and change quality

- [`uipath-task-refinement`](docs/skills/uipath-task-refinement.md)
- [`uipath-test-driven-automation`](docs/skills/uipath-test-driven-automation.md)
- [`uipath-regression-harness`](docs/skills/uipath-regression-harness.md)
- [`uipath-requirement-traceability`](docs/skills/uipath-requirement-traceability.md)
- [`uipath-source-control-conflicts`](docs/skills/uipath-source-control-conflicts.md)
- [`uipath-uat-session`](docs/skills/uipath-uat-session.md)
- [`uipath-quality-gates-setup`](docs/skills/uipath-quality-gates-setup.md)
- [`uipath-pattern-migration`](docs/skills/uipath-pattern-migration.md)
- [`uipath-source-control-guardrails`](docs/skills/uipath-source-control-guardrails.md)

### Release, operations, and governance

- [`uipath-release-readiness`](docs/skills/uipath-release-readiness.md)
- [`uipath-observability-design`](docs/skills/uipath-observability-design.md)
- [`uipath-solution-security-assessment`](docs/skills/uipath-solution-security-assessment.md)
- [`uipath-runbook-wizard`](docs/skills/uipath-runbook-wizard.md)

### Learning and communication

- [`uipath-learning-workspace`](docs/skills/uipath-learning-workspace.md)
- [`uipath-training-lab-scaffolder`](docs/skills/uipath-training-lab-scaffolder.md)
- [`uipath-solution-storytelling`](docs/skills/uipath-solution-storytelling.md)
- [`uipath-skill-authoring-guide`](docs/skills/uipath-skill-authoring-guide.md)

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

The validation suite checks all 34 skill packages, invocation policies, behavioral contracts, metadata, internal links, and retired conflicting skills. Installer tests cover interactive, selected-skill, starter, and full-catalog installation arguments.

## Learn more

- [Browse the catalog on the web](https://naveen.aifanatic.pro/skills/uipath-boost) — every skill, rendered, with copy-ready install commands
- [Catalog listing on skills.sh](https://www.skills.sh/1aifanatic/uipath-boost)
- [Strategy and publishing plan](docs/STRATEGY-AND-PUBLISHING-PLAN.md)
- [Changelog](CHANGELOG.md)
- [Acknowledgments](ACKNOWLEDGMENTS.md)
- [Contribution guide](CONTRIBUTING.md)
- [Security policy](SECURITY.md)
- [Official UiPath skills](https://github.com/UiPath/skills)
- [Agent Skills CLI documentation](https://skills.sh/docs)

## Status and license

UiPath Boost v0.2 is a community release. Structural, behavioral-contract, metadata, link, helper-script, and installer checks protect the catalog, but not every skill has been exercised against every UiPath product, tenant configuration, license, operating system, or future CLI version.

Licensed under the MIT License. See [LICENSE](LICENSE).

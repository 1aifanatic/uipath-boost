# UiPath Boost

**Community skills for better UiPath automation**

UiPath Boost is an open community catalog of 34 Agent Skills that help teams design, deliver, test, operate, and explain UiPath automations with greater discipline.

The official UiPath skills are excellent at understanding current UiPath products: they author XAML and coded workflows, build agents and Maestro projects, operate the platform, validate artifacts, troubleshoot failures, and manage solution lifecycles. Real delivery teams also need repeatable ways to clarify requirements, preserve decisions, refine tasks, protect source control, prove regression coverage, assess release readiness, and transfer knowledge. Those complementary engineering practices are why this project exists.

> [!IMPORTANT]
> UiPath Boost is an independent community project maintained by [1aifanatic](https://github.com/1aifanatic). It is not an official UiPath product or official UiPath skill catalog. Official UiPath skills remain the source of truth for product commands, schemas, validation, deployment, tenant operations, and current platform behavior.

## The boundary in one sentence

> Official UiPath skills build and operate UiPath products. UiPath Boost skills improve the engineering process before, after, and around that product work.

| Official UiPath skills own | UiPath Boost skills add |
|---|---|
| Product-specific authoring | Discovery discipline and durable decisions |
| Current CLI commands and schemas | Delivery controls and project continuity |
| Artifact validation and review | Architecture exploration and safe change plans |
| Platform, identity, policy, and test operations | Regression evidence and requirement traceability |
| Troubleshooting and deployment | Release, observability, and security readiness |

UiPath Boost skills deliberately stop when the next outcome belongs to an official UiPath owner.

## Quick start

### 1. Install the official UiPath skills

```bash
npm install -g @uipath/cli
uip skills install
```

### 2. Inspect this catalog

```bash
npx skills add 1aifanatic/uipath-boost --list
```

### 3. Install the Project Router

Project-local installation is the default:

```bash
npx skills add 1aifanatic/uipath-boost --skill uipath-project-router --agent codex --yes
```

Add `--global` to make the skill available across projects:

```bash
npx skills add 1aifanatic/uipath-boost --skill uipath-project-router --agent codex --global --yes
```

Replace `codex` with another agent supported by the open [`skills` CLI](https://github.com/vercel-labs/skills), such as `claude-code` or `cursor`.

### 4. Ask the router for the smallest correct workflow

```text
Use uipath-project-router.

I need to <describe the UiPath outcome>.
My available inputs are <repository, PDD, SDD, report, error, or evidence>.
Tell me the smallest correct sequence of official and UiPath Boost skills.
Do not modify files or platform resources while routing.
```

## Installation choices

### Install one skill

```bash
npx skills add 1aifanatic/uipath-boost --skill uipath-regression-harness --agent codex --global --yes
```

### Install the full catalog

```bash
npx skills add 1aifanatic/uipath-boost --skill '*' --agent codex --global --yes
```

### Use the branded installer

After the npm package is released:

```bash
npx uipath-boost list
npx uipath-boost install --starter --agent codex --global --yes
npx uipath-boost install --all --agent codex --global --yes
```

For a permanent command:

```bash
npm install -g uipath-boost
uipath-boost list
uipath-boost install --starter --agent codex --global --yes
```

## Recommended starter set

The branded `--starter` option installs these five skills:

| Skill | Why start here |
|---|---|
| `uipath-project-router` | Selects the smallest official and UiPath Boost workflow without performing specialist work |
| `uipath-discovery-with-docs` | Preserves business language, evidence, assumptions, and decisions across sessions |
| `uipath-task-refinement` | Converts an approved planner backlog into session-sized, verifiable work items |
| `uipath-regression-harness` | Turns a confirmed defect into durable red/green evidence |
| `uipath-release-readiness` | Produces an evidence-backed Ready, Conditionally Ready, or Not Ready verdict |

## What is included

### Control plane and continuity

`uipath-project-router`, `uipath-delivery-control-plane`, `uipath-project-handoff`, `uipath-project-knowledge-base`

### Discovery and decision-making

`uipath-discovery-interview`, `uipath-discovery-with-docs`, `uipath-work-intake-triage`, `uipath-program-wayfinder`, `uipath-research-note`, `uipath-process-domain-modeling`, `uipath-workflow-spec-workspace`, `uipath-stakeholder-questionnaire`

### Design and architecture

`uipath-component-design`, `uipath-architecture-deepening`, `uipath-project-boundaries`, `uipath-prototype`, `uipath-safe-refactor-plan`

### Build, test, and change quality

`uipath-task-refinement`, `uipath-test-driven-automation`, `uipath-regression-harness`, `uipath-requirement-traceability`, `uipath-source-control-conflicts`, `uipath-uat-session`, `uipath-quality-gates-setup`, `uipath-pattern-migration`, `uipath-source-control-guardrails`

### Release, operations, and governance

`uipath-release-readiness`, `uipath-observability-design`, `uipath-solution-security-assessment`, `uipath-runbook-wizard`

### Enablement and communication

`uipath-learning-workspace`, `uipath-training-lab-scaffolder`, `uipath-solution-storytelling`, `uipath-skill-authoring-guide`

## Example workflows

### New automation

```text
UiPath Boost discovery
→ official uipath-planner
→ optional UiPath Boost task refinement
→ official artifact owner
→ official uipath-review
→ UiPath Boost release readiness
```

### Production defect

```text
Official uipath-troubleshoot
→ UiPath Boost regression harness
→ official artifact owner applies the fix
→ official review and testing
```

### Pre-production release

```text
Official review and test evidence
→ UiPath Boost security assessment and traceability
→ UiPath Boost release-readiness verdict
→ official deployment owner, with explicit authorization
```

## Safety model

Agent Skills can influence tools and command execution. Review the source before installation and use the same care you would apply to automation code.

- Product-changing actions stay with official UiPath skills.
- Deployment, activation, deletion, identity, policy, and production changes require explicit authority.
- Mutating helper scripts should be used only after reviewing their scope and dry-run output.
- Never place credentials, customer data, tenant secrets, or personal information in skill files.
- Validation claims are limited to the fixtures and environments actually tested.

See [SECURITY.md](SECURITY.md) for reporting and review expectations.

## Development and validation

Requirements: Node.js 22.20 or newer.

```bash
npm install
npm run validate
npm test
npm pack --dry-run
```

The validation suite checks all 34 skill packages, matching names, required metadata, internal links, and retired conflicting skills. The CLI tests cover interactive, starter, selected-skill, and full-catalog installation argument construction.

## Documentation

- [Strategy and publishing plan](docs/STRATEGY-AND-PUBLISHING-PLAN.md)
- [Contribution guide](CONTRIBUTING.md)
- [Security policy](SECURITY.md)
- [Official UiPath skills](https://github.com/UiPath/skills)
- [skills.sh documentation](https://www.skills.sh/docs)

## Contributing upstream

This repository is an incubator for complementary engineering practices. Mature, broadly useful, UiPath-specific capabilities may be proposed to the official `UiPath/skills` repository one at a time. If an implementation is accepted upstream, the official version becomes canonical and the duplicate here should be removed or redirected.

## Status

The catalog is currently a pilot release. Structural validation and installer tests pass, but not every skill has been exercised against every UiPath product, tenant configuration, license, operating system, or future CLI version.

## License

MIT. See [LICENSE](LICENSE).

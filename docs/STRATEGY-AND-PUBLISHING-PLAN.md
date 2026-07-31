# UiPath Boost: Strategy and Publishing Plan

- **Working brand:** UiPath Boost
- **Descriptor:** Community Skills for Better UiPath Automation
- **Repository:** `1aifanatic/uipath-boost`
- **npm package:** `uipath-boost`
- **CLI command:** `uipath-boost`
**Prepared:** July 31, 2026

## 1. Executive recommendation

Use a hybrid ownership strategy:

1. Keep all 34 complementary skills in this independent community repository.
2. Treat this repository as the incubator, evidence base, installation source, and educational home.
3. Contribute only mature, broadly useful, UiPath-specific capabilities upstream to `UiPath/skills`.
4. Open one proposal and one pull request at a time rather than submitting the entire catalog.
5. When an upstream contribution is accepted, make the official implementation canonical and remove or redirect the duplicate here.

This approach preserves experimentation speed and authorship while creating a credible path into the official ecosystem.

## 2. Positioning

### Official UiPath skills

Official skills own current UiPath product behavior, including:

- Artifact formats and product-specific authoring.
- Current `uip` CLI commands and flags.
- Validation, build, packaging, publishing, and deployment.
- Tenant, platform, governance, identity, Test Manager, and Action Center operations.
- Product review and causal troubleshooting.

### UiPath Boost skills

This catalog owns complementary engineering disciplines around official product work:

- Discovery quality and durable decision records.
- Delivery controls, ownership, evidence, and handoffs.
- Architecture exploration and safe refactoring plans.
- Task refinement, regression evidence, and traceability.
- Release readiness, observability design, and security assessment.
- Learning workspaces, training scaffolds, and solution communication.

### Core boundary rule

> Official skills decide and execute current UiPath product behavior. UiPath Boost skills create distinct project-engineering artifacts before, after, or around those official operations.

## 3. Why the full catalog should remain independent

The official UiPath repository welcomes contributions, but its current contribution model favors self-contained, product-oriented skills with official tests, lifecycle registration, multi-tool compatibility, and maintainer ownership.

Several UiPath Boost skills intentionally compose with official owners. For example, regression work begins after official troubleshooting, architecture deepening consumes an official review, and task refinement starts from an official planner task list. This is a useful community catalog model, but direct cross-skill composition does not currently match the official repository's self-contained-skill checklist.

The independent repository also provides room for:

- Opinionated engineering practices.
- Faster iteration and versioning.
- Tutorials, sample projects, articles, and videos.
- Experimental skills and community feedback.
- Compatibility audits against changing official catalogs.

## 4. Upstream contribution strategy

### First-wave proposal candidates

#### `uipath-source-control-conflicts`

- Solves a concrete UiPath artifact problem.
- Has observable outcomes: resolved conflicts and valid artifacts.
- Can be evaluated against XAML, JSON, solution, and Maestro fixtures.

#### `uipath-quality-gates-setup`

- Connects official validation commands to developer and CI workflows.
- Produces deterministic repository artifacts.
- Applies across multiple UiPath project types.

#### `uipath-regression-harness`

- Converts a confirmed failure into durable red/green evidence.
- Complements official troubleshooting without replacing diagnosis.
- Has clear, scoreable completion criteria.

### Possible contributions to existing official skills

| UiPath Boost capability | Possible official destination |
|---|---|
| Test-driven automation practices | `uipath-rpa`, `uipath-agents`, and other artifact owners |
| UAT facilitation patterns | `uipath-test` |
| Task refinement rules | `uipath-planner` |
| Architecture deepening | `uipath-review` |
| Observability implementation guidance | `uipath-platform` or `uipath-insights` |
| Security evidence guidance | `uipath-governance`, `uipath-admin`, or `uipath-review` |

### Upstream workflow

1. Recheck the current official catalog and open issues.
2. Open a proposal issue describing the uncovered repeatable job.
3. Provide concrete inputs, outputs, anti-triggers, and ownership boundaries.
4. Ask maintainers whether the idea belongs in a new skill or an existing one.
5. Adapt the candidate to the official repository's current format.
6. Add at least one smoke test and one end-to-end test.
7. Run the official validation suite.
8. Submit one focused pull request.
9. Incorporate maintainer feedback and record the outcome here.

## 5. Brand and naming

### Recommended brand

**UiPath Boost**

The word *Boost* is short, memorable, and communicates that the catalog improves the engineering practices around official UiPath product work. It is broad enough to cover discovery, architecture, delivery, testing, operations, and enablement without suggesting that the catalog replaces official skills.

### Required public disclaimer

Use this wording prominently:

> UiPath Boost is an independent community project maintained by 1aifanatic. It is not an official UiPath product or official UiPath skill catalog. Official UiPath skills remain the source of truth for product behavior.

### Naming consistency

| Surface | Name |
|---|---|
| Display name | UiPath Boost |
| Descriptor | Community Skills for Better UiPath Automation |
| GitHub repository | `uipath-boost` |
| npm package | `uipath-boost` |
| CLI executable | `uipath-boost` |

The npm name was unclaimed when checked on July 31, 2026. Recheck immediately before publishing because registry availability can change.

## 6. Distribution architecture

### Channel A: GitHub plus the standard Agent Skills CLI

The canonical source is the public GitHub repository with each skill unpacked under `skills/<name>/SKILL.md`.

```powershell
# Inspect available skills
npx skills add 1aifanatic/uipath-boost --list

# Install the router for Codex
npx skills add 1aifanatic/uipath-boost `
  --skill uipath-project-router `
  --agent codex `
  --global `
  --yes

# Install every skill
npx skills add 1aifanatic/uipath-boost `
  --skill '*' `
  --agent codex `
  --global `
  --yes
```

Benefits:

- No custom package is required.
- Supports many coding agents.
- Uses the ecosystem's normal installation and update model.
- Makes the repository eligible for skills.sh discovery and install telemetry.

### Channel B: Branded npm wrapper

The npm package contains the complete catalog and a small CLI that delegates destination handling to the established `skills` package.

```powershell
npx uipath-boost list
npx uipath-boost install --starter --agent codex --global --yes
npx uipath-boost install --all --agent codex --global --yes
```

Benefits:

- Memorable branded command.
- Catalog is included in the npm package.
- No duplicated agent-path logic.
- The underlying installer remains pinned and testable.

### Channel C: skills.sh

Publishing to skills.sh makes sense for discovery and social proof. skills.sh installs from public Git repositories; it is not the canonical file host.

Launch sequence:

1. Publish the GitHub repository publicly.
2. Confirm `npx skills add 1aifanatic/uipath-boost --list` finds 34 skills.
3. Perform a clean installation of `uipath-project-router` using the GitHub source.
4. Check for `https://skills.sh/1aifanatic/uipath-boost`.
5. If it is not indexed after valid public installs, open a listing request in `vercel-labs/skills`.
6. Add the skills.sh badge only after the page resolves correctly.

## 7. Repository structure

```text
uipath-boost/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── SECURITY.md
├── package.json
├── bin/
│   └── uipath-boost.mjs
├── src/
│   ├── catalog.mjs
│   ├── cli-args.mjs
│   └── validate.mjs
├── scripts/
│   └── validate-catalog.mjs
├── skills/
│   └── uipath-*/
│       ├── SKILL.md
│       ├── agents/openai.yaml
│       ├── references/       # optional
│       ├── assets/           # optional
│       └── scripts/          # optional
├── test/
└── docs/
```

## 8. Quality and security requirements

Every release must verify:

- All 34 skill directories contain valid `SKILL.md` frontmatter.
- Skill names match their directory names.
- Descriptions are present and narrowly triggered.
- Every internal Markdown link resolves.
- Ownership boundaries remain explicit.
- No retired conflicting implementation wrapper is packaged.
- Deterministic helpers have controlled tests.
- Mutating helpers default to dry run where appropriate.
- No credentials, tenant data, customer information, or personal paths are included.
- Current official UiPath ownership is re-audited.
- Node package contents are inspected with `npm pack --dry-run`.

Before public installation, users should be encouraged to review `SKILL.md` and helper scripts. Agent skills can influence command execution and deserve source-code-level security review.

## 9. Versioning and compatibility

Use semantic versioning for the catalog:

- Patch: documentation, examples, trigger refinements, and non-breaking fixes.
- Minor: new skills, new optional resources, or compatible installer features.
- Major: renamed or removed skills, changed ownership boundaries, or incompatible installation changes.

Every release should record:

- Catalog version.
- Verification date.
- UiPath official repository commit or released catalog version.
- UiPath CLI version used for validation.
- Node and operating-system test matrix.
- Skills CLI version.
- Known unavailable or preview official owners.

## 10. Content strategy

### Article and video series

1. Official UiPath skills versus UiPath Boost community skills.
2. Installing skills and using Project Router.
3. From automation idea to implementation-ready SDD.
4. Building reliable automations with quality gates.
5. From production failure to permanent regression protection.
6. Safe architecture and refactoring for UiPath projects.
7. Proving release readiness with evidence.
8. Creating and testing a UiPath agent skill.

### Standard content format

Every article and video should include:

1. The problem before using the skill.
2. The exact prompt.
3. Input artifacts and prerequisites.
4. The generated or updated artifact.
5. The official UiPath ownership handoff.
6. Before-and-after evidence.
7. Safety and validation limitations.
8. A reproducible GitHub example.

### Suggested sample projects

- Invoice intake RPA automation.
- Agent-assisted claims processing.
- Maestro-orchestrated human approval journey.
- Production queue-processing defect.
- Multi-project release-readiness assessment.

## 11. Ninety-day roadmap

### Days 1-15: Foundation

- Create the public GitHub repository.
- Review the name, disclaimer, MIT license, and security contact.
- Publish the unpacked 34-skill catalog.
- Run validation and npm package tests.
- Create the first tagged pre-release.

### Days 16-30: Distribution

- Verify project-local and global installation on Codex, Claude Code, and Cursor.
- Publish `uipath-boost` to npm.
- Confirm standard GitHub installation through `npx skills`.
- Confirm skills.sh indexing or file a listing request.

### Days 31-60: Evidence and education

- Publish the first three articles and videos.
- Add three realistic example repositories or fixtures.
- Collect issue reports and installation feedback.
- Measure skill activation, completion, and handoff quality.

### Days 61-90: Upstream proposals

- Rank candidate skills using real usage and test evidence.
- Open upstream proposal issues for the strongest candidates.
- Adapt one candidate to official contribution requirements.
- Add official smoke and end-to-end tests.
- Submit the first focused pull request.

## 12. Success measures

Track outcomes rather than only install counts:

- Successful clean installations by agent and operating system.
- Percentage of skills with happy-path, failure-path, and boundary tests.
- Reproducible examples completed successfully.
- User-reported time saved or defects prevented.
- Skill trigger precision and false-trigger reports.
- GitHub stars, forks, contributors, and issues resolved.
- skills.sh and npm installs.
- Upstream proposals accepted or converted into official improvements.

## 13. Publication checklist

### GitHub

- [ ] Confirm repository name and public visibility.
- [ ] Initialize Git and set the default branch to `main`.
- [ ] Review all 34 skills and helper scripts.
- [ ] Confirm the community disclaimer.
- [ ] Confirm license ownership and contributor policy.
- [ ] Configure GitHub security advisories.
- [ ] Run `npm run validate` and `npm test`.
- [ ] Push and tag `v0.1.0`.

### npm

- [ ] Recheck `npm view uipath-boost`.
- [ ] Log in with `npm login` and enable the account's required 2FA workflow.
- [ ] Run `npm pack --dry-run` and inspect included files.
- [ ] Test the generated tarball in a clean temporary directory.
- [ ] Publish with `npm publish --access public`.
- [ ] Verify `npx uipath-boost list` from a clean environment.

### skills.sh

- [ ] Verify the GitHub repository is public.
- [ ] Verify standard skill discovery returns all 34 skills.
- [ ] Install the router through `npx skills add`.
- [ ] Check the canonical skills.sh page.
- [ ] File a listing request if indexing does not occur.
- [ ] Add a badge only after the page resolves.

## 14. Account-dependent blockers

The source can be prepared and tested locally, but these actions require the owner's direct authorization and accounts:

- Creating or making the GitHub repository public.
- Choosing the final legal copyright holder and license.
- Configuring security-contact details.
- Logging into npm and completing 2FA.
- Publishing the npm package.
- Opening upstream UiPath proposals or pull requests.

Complete those steps deliberately after reviewing the prepared package.

## 15. Primary references

- UiPath official skills repository: <https://github.com/UiPath/skills>
- UiPath contribution guide: <https://github.com/UiPath/skills/blob/main/CONTRIBUTING.md>
- UiPath CLI skills documentation: <https://docs.uipath.com/uipath-cli/standalone/latest/user-guide/concepts-skills>
- skills.sh documentation: <https://www.skills.sh/docs>
- Open skills CLI: <https://github.com/vercel-labs/skills>

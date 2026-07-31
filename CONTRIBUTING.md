# Contributing

Contributions should improve a repeatable UiPath engineering outcome without copying or replacing official UiPath product truth.

## Before proposing a skill

1. Check the current official UiPath skill catalog.
2. Provide at least three concrete trigger examples and two anti-trigger examples.
3. Identify the exact input, output artifact, approval boundary, and stop condition.
4. Explain why the work is reusable across projects rather than a one-off prompt.
5. Add validation scenarios that score observable behavior or artifacts.

## Skill structure

```text
skills/uipath-example/
├── SKILL.md
├── agents/openai.yaml
├── references/      # optional
├── assets/          # optional
└── scripts/         # optional and tested
```

The frontmatter `name` must match the folder name. Keep product-specific commands and contracts with the current official UiPath skill owner.

## Required checks

```powershell
npm install
npm run validate
npm test
```

Never commit credentials, tenant identifiers, personal paths, customer data, or untested scripts.

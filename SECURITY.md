# Security Policy

Agent skills are executable instructions for AI coding agents and should be reviewed with the same care as source code and automation scripts.

## Reporting

Report suspected command injection, credential exposure, unsafe mutation, path traversal, malicious instructions, or dependency compromise privately to the repository maintainer before opening a public issue. Configure a private GitHub security-advisory contact after the repository is created.

## Safety expectations

- Never include credentials, access tokens, tenant secrets, or customer data.
- Default potentially destructive helpers to dry-run behavior.
- Require explicit authority for deployment, activation, deletion, policy, identity, and production changes.
- Keep official UiPath product commands with their official skill owners.
- Pin installer dependencies and review upgrades before release.
- Test every deterministic helper against controlled fixtures.

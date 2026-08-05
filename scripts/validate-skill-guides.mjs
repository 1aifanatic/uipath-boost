import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { loadCatalog } from "../src/catalog.mjs";
import { SKILL_CONTRACTS } from "../src/skill-contracts.mjs";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const guidesRoot = join(packageRoot, "docs", "skills");
const repositoryReadmePath = join(packageRoot, "README.md");
const guideIndexPath = join(guidesRoot, "README.md");

const requiredSections = [
  "## At a glance",
  "## What it does",
  "## Before and after",
  "### Before",
  "### After",
  "## When to reach for it",
  "### Use a neighboring skill instead",
  "## Prerequisites",
  "## What it produces",
  "## How it works",
  "## Example prompt",
  "## Common questions",
  "## It's working if",
  "## Where it fits",
  "## Official UiPath handoff",
  "## Related resources"
];

function localMarkdownLinks(markdown) {
  return [...markdown.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)]
    .map((match) => match[1].trim().split("#", 1)[0])
    .filter(
      (link) =>
        link &&
        !link.startsWith("#") &&
        !link.startsWith("http://") &&
        !link.startsWith("https://") &&
        !link.startsWith("mailto:")
    );
}

function validateLinks(filePath, markdown, errors) {
  for (const link of localMarkdownLinks(markdown)) {
    if (!existsSync(resolve(dirname(filePath), link))) {
      errors.push(`${filePath}: broken link ${link}`);
    }
  }
}

const errors = [];
const catalog = loadCatalog(packageRoot);
const repositoryReadme = readFileSync(repositoryReadmePath, "utf8");
const guideIndex = readFileSync(guideIndexPath, "utf8");

validateLinks(repositoryReadmePath, repositoryReadme, errors);
validateLinks(guideIndexPath, guideIndex, errors);

const expectedFiles = new Set(["README.md"]);
for (const skill of catalog) {
  const filename = `${skill.name}.md`;
  const guidePath = join(guidesRoot, filename);
  expectedFiles.add(filename);

  if (!existsSync(guidePath)) {
    errors.push(`${skill.name}: detailed guide is missing`);
    continue;
  }

  const guide = readFileSync(guidePath, "utf8");
  const invocation = SKILL_CONTRACTS[skill.name]?.invocation;
  const expectedInvocation =
    invocation === "user"
      ? "| **Invocation** | User-invoked — start it explicitly. |"
      : "| **Invocation** | Model-invoked — start it explicitly or let the agent select it when the request fits. |";
  if (!guide.includes(expectedInvocation)) {
    errors.push(`${skill.name}: guide invocation is inconsistent`);
  }

  for (const section of requiredSections) {
    if (!guide.includes(section)) {
      errors.push(`${skill.name}: missing section ${section}`);
    }
  }

  const sourceLink = `../../skills/${skill.name}/SKILL.md`;
  if (!guide.includes(`(${sourceLink})`)) {
    errors.push(`${skill.name}: missing source link ${sourceLink}`);
  }

  if (!repositoryReadme.includes(`(docs/skills/${filename})`)) {
    errors.push(`${skill.name}: main README link is missing`);
  }
  if (!guideIndex.includes(`(${filename})`)) {
    errors.push(`${skill.name}: guide-index link is missing`);
  }

  validateLinks(guidePath, guide, errors);
}

const actualFiles = readdirSync(guidesRoot, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
  .map((entry) => entry.name);
for (const filename of actualFiles) {
  if (!expectedFiles.has(filename)) {
    errors.push(`Unexpected guide file: ${filename}`);
  }
}

if (actualFiles.length !== expectedFiles.size) {
  errors.push(`Expected ${expectedFiles.size} guide Markdown files, found ${actualFiles.length}`);
}

if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  process.exit(1);
}

console.log(`Validated ${catalog.length} detailed skill guides successfully.`);

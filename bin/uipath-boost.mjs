#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { loadCatalog, STARTER_SKILLS } from "../src/catalog.mjs";
import { buildSkillsCliArgs, parseCliArgs } from "../src/cli-args.mjs";
import { validateCatalog } from "../src/validate.mjs";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const packageJson = JSON.parse(
  await import("node:fs").then(({ readFileSync }) =>
    readFileSync(join(packageRoot, "package.json"), "utf8")
  )
);

function printHelp() {
  console.log(`UiPath Boost ${packageJson.version}

Community skills for better UiPath automation.

Usage:
  uipath-boost list
  uipath-boost install [options]
  uipath-boost validate

Install options:
  -a, --agent <name>    Target an agent; repeat for multiple agents
  -s, --skill <name>    Install one skill; repeat for multiple skills
      --starter         Install the recommended five-skill starter set
      --all             Install all catalog skills
  -g, --global          Install into the user's global agent directory
  -y, --yes             Skip installer confirmation prompts
      --copy            Copy files instead of creating symlinks
      --dry-run         Print the delegated installer command only
  -h, --help            Show help
  -v, --version         Show version

Examples:
  npx uipath-boost list
  npx uipath-boost install --starter -a codex -g -y
  npx uipath-boost install -s uipath-project-router -a codex -g -y
  npx uipath-boost install --all -a codex -g -y

Starter skills:
  ${STARTER_SKILLS.join("\n  ")}
`);
}

function printCatalog() {
  const catalog = loadCatalog(packageRoot);
  console.log(`UiPath Boost: ${catalog.length} skills\n`);
  for (const skill of catalog) {
    console.log(`${skill.name}\n  ${skill.description}\n`);
  }
}

function runValidation() {
  const result = validateCatalog(packageRoot);
  if (result.errors.length) {
    for (const error of result.errors) console.error(`ERROR: ${error}`);
    return 1;
  }
  console.log(`Validated ${result.catalog.length} skills successfully.`);
  return 0;
}

function resolveSkillsCli() {
  const require = createRequire(import.meta.url);
  const skillsPackage = require.resolve("skills/package.json");
  return join(dirname(skillsPackage), "bin", "cli.mjs");
}

let parsed;
try {
  parsed = parseCliArgs(process.argv.slice(2));
} catch (error) {
  console.error(`Error: ${error.message}\n`);
  printHelp();
  process.exit(2);
}

const { command, options } = parsed;
if (options.version) {
  console.log(packageJson.version);
  process.exit(0);
}
if (options.help || command === "help") {
  printHelp();
  process.exit(0);
}
if (command === "list") {
  printCatalog();
  process.exit(0);
}
if (command === "validate") {
  process.exit(runValidation());
}

const validationExitCode = runValidation();
if (validationExitCode !== 0) process.exit(validationExitCode);

const delegatedArgs = buildSkillsCliArgs(options, packageRoot);
if (options.dryRun) {
  console.log(JSON.stringify({ executable: "skills", arguments: delegatedArgs }, null, 2));
  process.exit(0);
}

const result = spawnSync(process.execPath, [resolveSkillsCli(), ...delegatedArgs], {
  stdio: "inherit",
  windowsHide: true
});
if (result.error) {
  console.error(`Unable to start the skills installer: ${result.error.message}`);
  process.exit(1);
}
process.exit(result.status ?? 1);

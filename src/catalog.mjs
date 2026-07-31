import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

export const STARTER_SKILLS = Object.freeze([
  "uipath-project-router",
  "uipath-discovery-with-docs",
  "uipath-task-refinement",
  "uipath-regression-harness",
  "uipath-release-readiness"
]);

function unquote(value) {
  const trimmed = value.trim();
  if (
    trimmed.length >= 2 &&
    ((trimmed.startsWith('"') && trimmed.endsWith('"')) ||
      (trimmed.startsWith("'") && trimmed.endsWith("'")))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

export function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    throw new Error("Missing YAML frontmatter");
  }

  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (field) {
      fields[field[1]] = unquote(field[2]);
    }
  }
  return fields;
}

export function loadCatalog(packageRoot) {
  const skillsRoot = join(packageRoot, "skills");
  return readdirSync(skillsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const skillPath = join(skillsRoot, entry.name, "SKILL.md");
      const frontmatter = parseFrontmatter(readFileSync(skillPath, "utf8"));
      return {
        directory: entry.name,
        name: frontmatter.name,
        description: frontmatter.description ?? "",
        skillPath
      };
    })
    .sort((left, right) => left.name.localeCompare(right.name));
}

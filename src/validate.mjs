import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { loadCatalog } from "./catalog.mjs";

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

export function validateCatalog(packageRoot, expectedCount = 34) {
  const errors = [];
  let catalog = [];
  try {
    catalog = loadCatalog(packageRoot);
  } catch (error) {
    return { catalog, errors: [error.message] };
  }

  if (catalog.length !== expectedCount) {
    errors.push(`Expected ${expectedCount} skills, found ${catalog.length}`);
  }

  const names = new Set();
  for (const skill of catalog) {
    if (!skill.name) {
      errors.push(`${skill.directory}: frontmatter name is missing`);
    } else if (skill.name !== skill.directory) {
      errors.push(`${skill.directory}: frontmatter name is ${skill.name}`);
    } else if (names.has(skill.name)) {
      errors.push(`${skill.directory}: duplicate skill name`);
    }
    names.add(skill.name);

    if (!skill.description) {
      errors.push(`${skill.directory}: frontmatter description is missing`);
    }

    const openAiMetadata = join(packageRoot, "skills", skill.directory, "agents", "openai.yaml");
    if (!existsSync(openAiMetadata)) {
      errors.push(`${skill.directory}: agents/openai.yaml is missing`);
    }

    const markdown = readFileSync(skill.skillPath, "utf8");
    for (const link of localMarkdownLinks(markdown)) {
      const target = resolve(dirname(skill.skillPath), link);
      if (!existsSync(target)) {
        errors.push(`${skill.directory}: broken link ${link}`);
      }
    }
  }

  const retired = join(packageRoot, "skills", "uipath-implement-work-item");
  if (existsSync(retired)) {
    errors.push("Retired conflicting skill uipath-implement-work-item must not be packaged");
  }

  const unexpectedFiles = readdirSync(join(packageRoot, "skills"), { withFileTypes: true })
    .filter((entry) => !entry.isDirectory())
    .map((entry) => entry.name);
  if (unexpectedFiles.length) {
    errors.push(`Unexpected files at skills root: ${unexpectedFiles.join(", ")}`);
  }

  return { catalog, errors };
}

import { STARTER_SKILLS } from "./catalog.mjs";

const COMMANDS = new Set(["install", "list", "validate", "help"]);

function requireValue(argv, index, flag) {
  const value = argv[index + 1];
  if (!value || value.startsWith("-")) {
    throw new Error(`${flag} requires a value`);
  }
  return value;
}

export function parseCliArgs(argv) {
  const args = [...argv];
  let command = "install";
  if (args[0] && !args[0].startsWith("-")) {
    if (!COMMANDS.has(args[0])) {
      throw new Error(`Unknown command: ${args[0]}`);
    }
    command = args.shift();
  }

  const options = {
    agents: [],
    skills: [],
    global: false,
    yes: false,
    copy: false,
    all: false,
    starter: false,
    dryRun: false,
    help: command === "help",
    version: false
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    switch (arg) {
      case "--agent":
      case "-a":
        options.agents.push(requireValue(args, index, arg));
        index += 1;
        break;
      case "--skill":
      case "-s":
        options.skills.push(requireValue(args, index, arg));
        index += 1;
        break;
      case "--global":
      case "-g":
        options.global = true;
        break;
      case "--yes":
      case "-y":
        options.yes = true;
        break;
      case "--copy":
        options.copy = true;
        break;
      case "--all":
        options.all = true;
        break;
      case "--starter":
        options.starter = true;
        break;
      case "--dry-run":
        options.dryRun = true;
        break;
      case "--help":
      case "-h":
        options.help = true;
        break;
      case "--version":
      case "-v":
        options.version = true;
        break;
      default:
        throw new Error(`Unknown option: ${arg}`);
    }
  }

  const selectors = Number(options.all) + Number(options.starter) + Number(options.skills.length > 0);
  if (selectors > 1) {
    throw new Error("Choose only one of --all, --starter, or one or more --skill options");
  }

  return { command, options };
}

export function buildSkillsCliArgs(options, sourcePath) {
  const args = ["add", sourcePath];
  const selected = options.all
    ? ["*"]
    : options.starter
      ? STARTER_SKILLS
      : options.skills;

  for (const skill of selected) {
    args.push("--skill", skill);
  }
  for (const agent of options.agents) {
    args.push("--agent", agent);
  }
  if (options.global) args.push("--global");
  if (options.copy) args.push("--copy");
  if (options.yes) args.push("--yes");
  return args;
}

#!/usr/bin/env bash
set -euo pipefail

payload="$(cat)"
command_text="$(printf '%s' "$payload" | python3 -c 'import json,sys; data=json.load(sys.stdin); print(data.get("tool_input",{}).get("command", data.get("command", "")))' 2>/dev/null || true)"
normalized="$(printf '%s' "$command_text" | tr '[:upper:]' '[:lower:]' | tr '\n' ' ')"

block_reason=""
case "$normalized" in
  *"git push"*) block_reason="git push requires explicit human authority" ;;
  *"git reset --hard"*) block_reason="git reset --hard is destructive" ;;
  *"git clean -f"*|*"git clean -d"*|*"git clean --force"*) block_reason="git clean can delete untracked work" ;;
  *"git branch -d"*) block_reason="forced branch deletion is blocked" ;;
  *"git checkout ."*|*"git restore ."*) block_reason="workspace-wide discard is blocked" ;;
esac

if [[ -z "$block_reason" && "${UIPATH_GUARD_RELEASE_COMMANDS:-0}" == "1" ]]; then
  case "$normalized" in
    *"uip "*" deploy"*|*"uip "*" publish"*|*"uip "*" activate"*|*"uip "*" delete"*|*"uip "*" remove"*)
      block_reason="UiPath release-changing command requires explicit human execution"
      ;;
  esac
fi

if [[ -n "$block_reason" ]]; then
  printf 'BLOCKED: %s\n' "$block_reason" >&2
  exit 2
fi

printf 'ALLOWED\n'

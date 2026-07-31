#!/usr/bin/env bash
set -euo pipefail

TOTAL_STAGES=${TOTAL_STAGES:-1}
CURRENT_STAGE=0

say() { printf '%s\n' "$*"; }
step() { printf '  - %s\n' "$*"; }
stage() {
  CURRENT_STAGE=$((CURRENT_STAGE + 1))
  printf '\n[%d/%d] %s\n' "$CURRENT_STAGE" "$TOTAL_STAGES" "$1"
}
confirm() {
  local prompt=${1:-"Continue?"}
  local answer
  read -r -p "$prompt [y/N] " answer
  [[ "$answer" =~ ^[Yy]$ ]]
}
ask() {
  local prompt=$1
  local value
  read -r -p "$prompt: " value
  printf '%s' "$value"
}
ask_secret() {
  local prompt=$1
  local value
  read -r -s -p "$prompt: " value
  printf '\n' >&2
  printf '%s' "$value"
}

stage "Replace this example stage"
say "This template intentionally performs no UiPath or source-control operation."
step "Add verified instructions and explicit confirmation gates below this line."

say "Wizard complete. Review captured values and verification evidence before any production-changing action."

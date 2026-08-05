[CmdletBinding()]
param()

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$payload = [Console]::In.ReadToEnd()
$commandText = ""

try {
    $data = $payload | ConvertFrom-Json
    if ($null -ne $data.tool_input -and $null -ne $data.tool_input.command) {
        $commandText = [string]$data.tool_input.command
    } elseif ($null -ne $data.command) {
        $commandText = [string]$data.command
    }
} catch {
    $commandText = ""
}

$normalized = ($commandText -replace "[\r\n]+", " ").ToLowerInvariant()
$blockReason = $null

if ($normalized -match "\bgit\s+push\b") {
    $blockReason = "git push requires explicit human authority"
} elseif ($normalized -match "\bgit\s+reset\s+--hard\b") {
    $blockReason = "git reset --hard is destructive"
} elseif ($normalized -match "\bgit\s+clean\b.*(?:--force\b|-[a-z]*f[a-z]*\b)") {
    $blockReason = "git clean can delete untracked work"
} elseif ($normalized -match "\bgit\s+branch\s+-d\b") {
    $blockReason = "forced branch deletion is blocked"
} elseif ($normalized -match "\bgit\s+(?:checkout|restore)\s+\.(?:\s|$)") {
    $blockReason = "workspace-wide discard is blocked"
}

if ($null -eq $blockReason -and $env:UIPATH_GUARD_RELEASE_COMMANDS -eq "1") {
    if ($normalized -match "\buip\b.*\b(?:deploy|publish|activate|delete|remove)\b") {
        $blockReason = "UiPath release-changing command requires explicit human execution"
    }
}

if ($null -ne $blockReason) {
    [Console]::Error.WriteLine("BLOCKED: $blockReason")
    exit 2
}

Write-Output "ALLOWED"

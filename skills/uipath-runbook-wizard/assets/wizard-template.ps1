[CmdletBinding()]
param()

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Confirm-Stage {
    param([Parameter(Mandatory)][string]$Message)

    $answer = Read-Host "$Message [y/N]"
    return $answer -match '^(?i:y|yes)$'
}

function Read-SecretValue {
    param([Parameter(Mandatory)][string]$Prompt)

    return Read-Host $Prompt -AsSecureString
}

function Set-EnvValue {
    param(
        [Parameter(Mandatory)][string]$Path,
        [Parameter(Mandatory)][string]$Name,
        [Parameter(Mandatory)][string]$Value
    )

    $resolvedPath = [System.IO.Path]::GetFullPath($Path)
    $lines = if (Test-Path -LiteralPath $resolvedPath) {
        [System.Collections.Generic.List[string]](Get-Content -LiteralPath $resolvedPath)
    } else {
        [System.Collections.Generic.List[string]]::new()
    }

    $prefix = "$Name="
    $replacement = "$prefix$Value"
    $index = -1
    for ($i = 0; $i -lt $lines.Count; $i++) {
        if ($lines[$i].StartsWith($prefix, [System.StringComparison]::Ordinal)) {
            $index = $i
            break
        }
    }

    if ($index -ge 0) {
        $lines[$index] = $replacement
    } else {
        $lines.Add($replacement)
    }

    Set-Content -LiteralPath $resolvedPath -Value $lines -Encoding utf8
}

# STAGES: replace only the array below when generating a wizard.
# Each Action must leave the human in control of portal, approval, secret, or
# irreversible work. Keep agent-runnable setup outside this file.
$Stages = @(
    # [pscustomobject]@{
    #     Name = "Open the target portal"
    #     Description = "Sign in with the approved account and navigate to ..."
    #     Action = {
    #         Start-Process "https://example.invalid"
    #         if (-not (Confirm-Stage "Did the expected page open?")) {
    #             throw "Stage was not confirmed."
    #         }
    #     }
    # }
)

if ($Stages.Count -eq 0) {
    throw "No stages were authored. Replace the STAGES array before running this wizard."
}

$completed = [System.Collections.Generic.List[string]]::new()
$skipped = [System.Collections.Generic.List[string]]::new()

for ($i = 0; $i -lt $Stages.Count; $i++) {
    $stage = $Stages[$i]
    $position = $i + 1
    Write-Host ""
    Write-Host "[$position/$($Stages.Count)] $($stage.Name)"
    Write-Host $stage.Description

    if (-not (Confirm-Stage "Continue with this human stage?")) {
        $skipped.Add($stage.Name)
        continue
    }

    & $stage.Action
    $completed.Add($stage.Name)
}

Write-Host ""
Write-Host "Wizard summary"
Write-Host "Completed: $($completed.Count)"
foreach ($name in $completed) { Write-Host "  - $name" }
Write-Host "Skipped: $($skipped.Count)"
foreach ($name in $skipped) { Write-Host "  - $name" }

if ($skipped.Count -gt 0) {
    exit 2
}

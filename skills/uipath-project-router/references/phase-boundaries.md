# UiPath Phase Boundaries

Use this decision order when the work is between phases rather than between
product owners.

| Question | Choice |
|---|---|
| Can the current session continue accurately? | Continue and preserve the conversation as the primary source. |
| Is the current context irrelevant to the next phase? | Clear it and start from durable project artifacts. |
| Must context travel to another person, harness, directory, or side investigation? | Use `uipath-project-handoff`. |
| Is the side task narrow, independent, and safe to run separately? | Delegate it and bring back an evidence-backed report. |
| Must the same session continue but the context is too large? | Compact at the boundary, then verify the summary against primary sources. |

Use handoff for portability, not as a default context-management operation.
Prefer continuing while the session remains accurate because summaries lose
detail and can flatten unresolved decisions.

# Worked example

Illustrative editorial example, not a model benchmark or measured customer outcome.

## Input

Scope a first release of our duplicate-transaction tool. We have CSV parsing and two bookkeepers willing to try it. Should we add bank integrations?

## Output

Defer bank integrations for this trial: both participants can already supply CSVs.

Keep: upload and validate a CSV, flag possible duplicates, show why each pair was flagged, allow review, and export the result. Preserve the original file and make failed imports understandable.

Done means both bookkeepers can complete that flow on representative files without developer intervention, and can identify whether the review saved useful work. Estimate the delivery date after checking parser coverage and export behavior. A successful trial would justify investigating integrations next.

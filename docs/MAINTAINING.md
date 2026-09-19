# Maintenance

Requires Node.js compatible with Astro 5, npm, and Python 3.

Each `.agents/skills/<id>/` contains:

- `SKILL.md`: activation description and instructions.
- `references.md`: supporting guidance and source attribution.
- `example.md`: an example request and response.
- `catalog.json`: display name, category, use cases, examples and related skill IDs.

`src/data/skills.ts` loads the catalogue through `scripts/catalog.mjs`. Update examples in both `example.md` and `catalog.json`; validation rejects mismatches.

`npm run build` runs tests, regenerates download packages and builds the Astro catalogue. ZIPs contain all four skill files and use deterministic timestamps. Commit refreshed archives with skill changes.

URL aliases live in `scripts/catalog.mjs`. Each alias must point to an existing skill; Astro generates the redirects. Keep related skill IDs and local Markdown links valid.

For UI changes, inspect desktop and narrow layouts, keyboard focus, example-copy feedback and download links locally.

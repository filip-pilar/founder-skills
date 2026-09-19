# Maintaining the Astra edition

Requires Node.js compatible with Astro 5, npm, and Python 3 for standard-library zip packaging.

Each `.agents/skills/<id>/` contains:

- `SKILL.md`: short activation description and outcome-oriented guidance.
- `references.md`: optional domain knowledge and attribution, not hidden mandatory steps.
- `example.md`: an illustrative input and completed output; never label it as a benchmark.
- `catalog.json`: name, category, order, target model, use cases, input/output expectations, example and related IDs.

`src/data/skills.ts` reads and validates the canonical content through `scripts/catalog.mjs`. Changes to promises or examples belong in the skill directory. `npm test` checks links, content consistency, redirects and archive contents. `npm run build` runs tests, regenerates packages and builds the static site. Packaging creates deterministic `.zip` files with all supporting material; obsolete `.skill` and retired packages are removed. Regenerate tracked downloads when changing skills. Do not deploy as a validation step.

A retired skill belongs in `aliases` in `scripts/catalog.mjs`. Astro generates redirects to the surviving workflow. Keep related links and trigger boundaries accurate. Add a worked example that demonstrates the skill's distinct job. Avoid broad topic triggers or general instructions already handled well by Astra.

For UI changes, inspect desktop and narrow layouts, keyboard focus, example-copy feedback and download links on a local build. Tests establish packaging and rendering contracts, not improved model reasoning. Model comparison is optional follow-up rather than a build prerequisite.

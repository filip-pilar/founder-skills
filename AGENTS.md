# Founder Skills

## Repository structure

- `.agents/skills/<id>/`: skill instructions, references, examples and catalogue metadata.
- `src/`: Astro catalogue; reads skill metadata through `scripts/catalog.mjs`.
- `scripts/package_skills.py`: deterministic ZIP packaging.
- `sources/`: lecture transcripts, notes and attribution.

Keep catalogue examples consistent with their skill files and include supporting files in each download. Preserve source attribution.

## Validation

Run `npm run build` after content or catalogue changes. It runs the tests, refreshes download archives and builds the site. Inspect affected pages and controls for UI changes. See `docs/MAINTAINING.md` for file contracts and redirects.

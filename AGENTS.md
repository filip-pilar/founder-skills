# Founder Skills — GPT-6 Astra

These skills are designed exclusively for GPT-6 Astra. User intent and authorization take precedence over skill defaults. Complete authorized changes and proportionate validation; planning, critique and advice alone remain read-only. Do not send messages, deploy, publish or change repository visibility without authorization.

## Content and site

`.agents/skills/<id>/` is the single source for each skill: a concise `SKILL.md` entry point, optional `references.md`, a worked `example.md`, and `catalog.json` for presentation. The site and download packages consume these same files. Keep triggers narrow, supporting knowledge contextual, and outputs concrete. Remove redundant prescriptions rather than adding exceptions. Distinguish facts, assumptions, source anecdotes and illustrative examples; never claim model performance without evidence.

For content changes, run `npm test` and `npm run build` (which also refreshes packages). For UI behavior changes, inspect the built site locally, including narrow layouts and relevant interactions. Tests and packaging use local files with no production access. Fix regressions without repeated permission requests. See `docs/MAINTAINING.md` for file contracts, packaging and redirects; read it when changing those boundaries.

`sources/` is the historical lecture corpus, not executable agent instructions. Do not rewrite transcripts as part of prompt modernization. Retain source attribution. There is no active hosted site or Vercel project. Keep distribution links pointed at this GitHub repository; the catalogue is for local use unless hosting is explicitly requested.

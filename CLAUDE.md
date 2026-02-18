# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A static website showcasing 14 downloadable AI skills for startup founders. Built with Astro 5 + Tailwind CSS v4. Each skill is a `.skill`/`.zip` package containing a `SKILL.md` (prompt) and `references.md` (source material) that users upload to Claude or other AI agents.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build
- `./package-skills.sh` — zip each `skills/*/` directory into `public/downloads/*.skill` and `.zip` files (run before build when skills change)

## Architecture

**Two parallel data sources for skills:**

1. **`src/data/skills.ts`** — TypeScript array defining all skill metadata (name, category, description, whenToUse, whatToProvide, whatYouGet, examplePrompts, relatedSkills, downloadFile). This drives the entire website UI. The `Skill` interface and `categories` array here are the source of truth for the site.

2. **`skills/<skill-id>/`** — The actual downloadable skill content. Each directory has `SKILL.md` (the AI prompt with frontmatter name/description) and `references.md` (frameworks and examples). These get packaged by `package-skills.sh` into `public/downloads/`.

When adding a new skill, you must update both: add the directory under `skills/` and add the entry in `src/data/skills.ts` (plus add it to the `categories` array).

**Pages:**
- `src/pages/index.astro` — homepage composing Header, Hero, SkillGrid, DecisionTree, InstallGuide, Footer
- `src/pages/skills/[slug].astro` — dynamic detail page for each skill, using `getStaticPaths` from the skills data

**Styling:** Tailwind v4 via Vite plugin (not PostCSS). Custom theme tokens defined in `src/styles/global.css` under `@theme` (colors like `--color-bg`, `--color-text`, `--color-accent-warm`, fonts). Components use these CSS variables directly in Tailwind classes like `text-[var(--color-text-body)]`.

**Fonts:** Instrument Serif (headings), Inter (body), JetBrains Mono (code) — loaded via `@fontsource` packages in `Base.astro`.

## Key Conventions

- Skill IDs are kebab-case and must match between `skills.ts`, the `skills/` directory name, and the `downloadFile` field
- The `relatedSkills` array on each skill references other skill IDs
- Skill detail pages generate an install prompt that clones the repo with sparse checkout for that specific skill
- `src/config.ts` holds the GitHub repo URL and a helper to build `claude.ai/new` URLs

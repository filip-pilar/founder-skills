# Founder Skills

14 drop-in AI skills with real frameworks and specific tactics for startup founders. Works with Claude, ChatGPT, and any AI agent.

Each skill is a self-contained package (`SKILL.md` + `references.md`) that turns a general-purpose AI into an opinionated advisor — for copywriting, growth, design critique, decision-making, and more.

## Skills

| Category | Skills |
|----------|--------|
| **Writing** | [Copywriter](skills/copywriter) · [Cold Outreach](skills/cold-outreach) · [Storytelling](skills/storytelling) |
| **Design** | [Design Advisor](skills/design-advisor) |
| **Growth** | [Growth Playbook](skills/growth-playbook) · [Experiment Lab](skills/experiment-lab) · [Launch Plan](skills/launch-plan) · [Content Strategy](skills/content-strategy) |
| **Video** | [Video Starter](skills/video-starter) |
| **Coaching** | [Decision Coach](skills/decision-coach) · [Unblock](skills/unblock) · [Weekly Review](skills/weekly-review) |
| **User Research** | [User Interview](skills/user-interview) |
| **Shipping** | [MVP Sprint](skills/mvp-sprint) |

## Using the Skills

**Option 1 — Upload directly**

Download a `.zip` from the [website](https://github.com/filip-pilar/founder-skills) or grab a skill directory from this repo. Upload to Claude (Settings > Capabilities) or paste the `SKILL.md` contents into any AI chat.

**Option 2 — Agent prompt**

Give your AI agent this prompt and it handles the rest:

```
git clone --depth 1 --sparse --filter=blob:none https://github.com/filip-pilar/founder-skills.git && cd founder-skills && git sparse-checkout set skills/<skill-id> && install the skill from skills/<skill-id>/
```

Replace `<skill-id>` with a skill name like `copywriter` or `growth-playbook`.

## Skill Format

Each skill lives in `skills/<skill-id>/` and contains:

- **`SKILL.md`** — The prompt. Has YAML frontmatter (`name`, `description`) followed by the full system prompt: when to use it, workflows, decision rules, and what makes it different.
- **`references.md`** — Source material, frameworks, examples, and quotes that the AI uses as grounding context.

## Development

The website is built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

```bash
npm install
npm run dev        # start dev server
npm run build      # production build to dist/
npm run preview    # preview production build
```

When skills are added or changed, run the packaging script before building:

```bash
./package-skills.sh   # zips each skill into public/downloads/
npm run build
```

## Contributing

### Adding a new skill

1. Create `skills/<skill-id>/SKILL.md` with frontmatter (`name`, `description`) and the full prompt
2. Create `skills/<skill-id>/references.md` with supporting frameworks and examples
3. Add the skill entry to `src/data/skills.ts` (the `skills` array and the `categories` array)
4. Run `./package-skills.sh` to generate download files

### Improving an existing skill

Edit the files in `skills/<skill-id>/`. The `SKILL.md` is the prompt the AI follows — make it specific, opinionated, and actionable. The `references.md` is the knowledge base it draws from.

# Founder Skills

Eight focused workflows for founders: write credible copy, learn from customers, choose a growth action, design an experiment, critique an interface, scope a release, make a decision, and plan content.

Each skill includes instructions, supporting references and a worked example.

## Start with the work

| You need to… | Skill |
| --- | --- |
| Write a page, pitch or founder story | [Copy & Story](.agents/skills/copywriter) |
| Prepare interviews or interpret feedback | [Customer Discovery](.agents/skills/user-interview) |
| Find customers or coordinate a launch | [First Customers & Launch](.agents/skills/growth-playbook) |
| Test a hypothesis or interpret results | [Experiment Design](.agents/skills/experiment-lab) |
| Improve a screen or user flow | [Product Design Critique](.agents/skills/design-advisor) |
| Define a first useful release | [Product Scope](.agents/skills/mvp-sprint) |
| Choose between options or review your work | [Founder Decisions](.agents/skills/decision-coach) |
| Plan content or one video | [Content & Video Planning](.agents/skills/content-strategy) |

## Use in Codex

Clone this repository and open it as a Codex project. The project-local skills live in `.agents/skills/`:

```text
$experiment-lab We changed pricing and got 3 purchases from 80 visits,
versus 2 from 70 last week. What can we conclude?
```

To use a skill in another project, copy its complete directory into that project's `.agents/skills/`. Keep `SKILL.md`, `references.md` and `example.md` together. The local catalogue's zip downloads contain the same files.

## Catalogue and development

Browse the skills here on GitHub or run the catalogue locally.

Local development requires Node.js/npm and Python 3 for archive packaging.

```bash
npm ci
npm test
npm run build       # validates content, refreshes downloads, builds Astro locally
npm run dev         # local catalogue
npm run preview     # inspect the production build locally
```

The catalogue reads each skill's `catalog.json`. Download packages include the instructions, references and example. See [maintenance guidance](docs/MAINTAINING.md).

## Sources

Based on 24 buildspace lectures. [sources/](sources/) contains transcripts, structured notes and original video links.

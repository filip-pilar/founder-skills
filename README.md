# Founder Skills for GPT-6 Astra

Eight focused workflows for founders: write credible copy, learn from customers, choose a growth action, design an experiment, critique an interface, scope a release, make a decision, and plan content.

Built exclusively for **GPT-6 Astra in Codex**. Each skill supplies a clear outcome and useful domain context, while Astra chooses the steps the task needs. Supporting references and worked examples load only when relevant.

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

Clone this repository and open it as a Codex project. Select GPT-6 Astra. The project-local skills live in `.agents/skills/`:

```text
$experiment-lab We changed pricing and got 3 purchases from 80 visits,
versus 2 from 70 last week. What can we conclude?
```

To use a skill in another project, copy its complete directory into that project's `.agents/skills/`. Keep `SKILL.md`, `references.md` and `example.md` together. The local catalogue's zip downloads contain the same files. Select Astra in the destination project too; copying Markdown does not change the active model. Remove superseded installed skills when upgrading; see [the consolidation map](docs/MODERNIZATION.md).

## What makes a skill useful

Each skill defines a distinct job, concrete outputs and the evidence needed to support them. References retain selected buildspace insights with context rather than universal prescriptions. Examples show complete inputs and useful outputs, explicitly labeled as illustrations rather than model benchmarks. Missing facts stay missing; the skills do not manufacture traction, customer quotes or certainty.

## Catalogue and development

Local development requires Node.js/npm and Python 3 for archive packaging.

```bash
npm ci
npm test
npm run build       # validates content, refreshes downloads, builds Astro locally
npm run dev         # local catalogue
npm run preview     # inspect the production build locally
```

The catalogue reads each skill's own `catalog.json`; there is no separately maintained list of promises. All packages include supporting files. See [maintenance guidance](docs/MAINTAINING.md).

## Sources

The original collection drew on 24 buildspace lectures. [sources/](sources/) retains transcripts, structured notes and original video links. The Astra edition curates those ideas and distinguishes historical anecdotes from current recommendations. [OpenAI's Astra article](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra) informed the instruction redesign.

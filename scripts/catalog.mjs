import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

export const skillRoot = fileURLToPath(new URL('../.agents/skills/', import.meta.url));
export const aliases = {
  'storytelling': 'copywriter',
  'cold-outreach': 'growth-playbook',
  'launch-plan': 'growth-playbook',
  'unblock': 'decision-coach',
  'weekly-review': 'decision-coach',
  'video-starter': 'content-strategy',
};

export function loadCatalog(root = skillRoot) {
  const entries = readdirSync(root, { withFileTypes: true }).filter(entry => entry.isDirectory());
  const skills = entries.map(entry => {
    const directory = join(root, entry.name);
    const data = JSON.parse(readFileSync(join(directory, 'catalog.json'), 'utf8'));
    const prompt = readFileSync(join(directory, 'SKILL.md'), 'utf8');
    const name = prompt.match(/^name: (.+)$/m)?.[1];
    const trigger = prompt.match(/^description: (.+)$/m)?.[1];
    if (name !== entry.name || data.id !== entry.name || !trigger) {
      throw new Error(`Invalid identity or trigger in ${entry.name}`);
    }
    for (const field of ['name', 'category', 'description', 'exampleInput', 'exampleOutput', 'type']) {
      if (typeof data[field] !== 'string' || !data[field].trim()) throw new Error(`${entry.name}: missing ${field}`);
    }
    for (const field of ['whenToUse', 'whatToProvide', 'whatYouGet', 'examplePrompts', 'relatedSkills']) {
      if (!Array.isArray(data[field]) || !data[field].length || data[field].some(item => typeof item !== 'string' || !item.trim())) {
        throw new Error(`${entry.name}: invalid ${field}`);
      }
    }
    if (!Number.isInteger(data.order)) throw new Error(`${entry.name}: missing order`);
    if (!['text-input', 'visual-input', 'conversational', 'planning'].includes(data.type)) throw new Error(`${entry.name}: invalid type`);
    for (const supporting of ['references.md', 'example.md']) {
      if (!readFileSync(join(directory, supporting), 'utf8').trim()) throw new Error(`${entry.name}: empty ${supporting}`);
    }
    const example = readFileSync(join(directory, 'example.md'), 'utf8');
    if (!example.includes(data.exampleInput) || !example.includes(data.exampleOutput)) throw new Error(`${entry.name}: catalogue example drift`);
    return { ...data, trigger, downloadFile: `${data.id}.zip` };
  }).sort((a, b) => a.order - b.order);
  if (!skills.length || new Set(skills.map(skill => skill.order)).size !== skills.length) throw new Error('Empty catalogue or duplicate ordering');
  const ids = new Set(skills.map(skill => skill.id));
  for (const skill of skills) {
    for (const related of skill.relatedSkills) if (!ids.has(related) || related === skill.id) throw new Error(`Invalid related skill ${related}`);
  }
  for (const [oldId, target] of Object.entries(aliases)) {
    if (ids.has(oldId) || !ids.has(target)) throw new Error(`Invalid retired skill mapping ${oldId}`);
  }
  return skills;
}

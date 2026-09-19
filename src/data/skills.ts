import { resolve } from 'node:path';
import { loadCatalog } from '../../scripts/catalog.mjs';

export type Category = 'Writing' | 'Research' | 'Growth' | 'Product' | 'Decisions';
export interface Skill {
  id: string;
  name: string;
  category: Category;
  description: string;
  trigger: string;
  type: 'text-input' | 'visual-input' | 'conversational' | 'planning';
  whenToUse: string[];
  whatToProvide: string[];
  whatYouGet: string[];
  examplePrompts: string[];
  relatedSkills: string[];
  downloadFile: string;
  exampleInput: string;
  exampleOutput: string;
}
export const skills: Skill[] = loadCatalog(resolve(process.cwd(), '.agents/skills'));
export const categories = [...new Set(skills.map(skill => skill.category))].map(name => ({
  name, skills: skills.filter(skill => skill.category === name).map(skill => skill.id),
}));
export const getSkillById = (id: string): Skill | undefined => skills.find(skill => skill.id === id);

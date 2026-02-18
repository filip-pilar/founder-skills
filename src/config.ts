export const SITE = {
  github: "https://github.com/filip-pilar/founder-skills",
  skillsDir: "skills",
} as const;

export function claudeNewUrl(prompt: string): string {
  return `https://claude.ai/new?q=${encodeURIComponent(prompt)}`;
}

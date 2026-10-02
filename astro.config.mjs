// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { aliases } from './scripts/catalog.mjs';

// https://astro.build/config
export default defineConfig({
  redirects: Object.fromEntries(Object.entries(aliases).map(([from, to]) => [`/skills/${from}`, `/skills/${to}`])),
  vite: {
    plugins: [tailwindcss()],
  },
});

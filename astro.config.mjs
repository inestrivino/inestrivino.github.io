// @ts-ignore
import { defineConfig } from 'astro/config';

// @ts-ignore
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://inestrivino.github.io',

  server: {
    port: 3000
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
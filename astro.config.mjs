// @ts-ignore
import { defineConfig } from 'astro/config';

// @ts-ignore
import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://inestrivino.github.io',

  server: {
    port: 3000
  },

  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true, 
      redirectToDefaultLocale: false,
    }
  },

  integrations: [sitemap()]
});
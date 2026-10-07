// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE og BASE_PATH sættes af GitHub Actions ved deploy til GitHub Pages.
// Lokalt og på det endelige domæne bruges standardværdierne.
// TODO: bekræft endeligt domæne før lancering
const site = process.env.SITE || 'https://nielsen-nielsen.dk';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'da', locales: { da: 'da-DK', en: 'en-GB' } },
    }),
  ],
});

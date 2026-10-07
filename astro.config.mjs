// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: bekræft endeligt domæne før lancering
export default defineConfig({
  site: 'https://nielsen-nielsen.dk',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'da', locales: { da: 'da-DK', en: 'en-GB' } },
    }),
  ],
});

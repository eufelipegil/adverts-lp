// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/data/site.ts';

// [PROVISÓRIO] Domínio definitivo: trocar em src/data/site.ts
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  // /bio é só para o link do Instagram: fica fora do sitemap (e com noindex)
  integrations: [sitemap({ filter: (page) => !page.includes('/bio') })],
  build: { inlineStylesheets: 'always' },
});

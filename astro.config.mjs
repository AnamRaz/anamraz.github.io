import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://anamraz.github.io',
  integrations: [sitemap()],
  output: 'static',
});

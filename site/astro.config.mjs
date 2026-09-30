// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://zbleness.github.io',
  base: '/skills-hub/',
  output: 'static',
  trailingSlash: 'always',
  build: {
    assets: 'assets'
  }
});

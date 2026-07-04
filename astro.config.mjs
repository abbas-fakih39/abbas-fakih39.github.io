import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://abbas-fakih39.github.io',
  output: 'static',

  // Astro's default port 4321 falls inside a Windows-reserved range (4227–4626)
  server: { port: 4700 },

  integrations: [tailwind(), react()]
});
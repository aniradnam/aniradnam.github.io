// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

const SCRIPT = process.env.npm_lifecycle_script || '';

const isBuild = SCRIPT.includes('build');

const LOCALHOST_URL = 'http://localhost:4321';

const LIVE_URL = 'https://aniradnam.github.io';

let BASE_URL = LOCALHOST_URL;

if (isBuild) {
  BASE_URL = LIVE_URL;
}


export default defineConfig({
  integrations: [tailwind()],
  site: 'https://aniradnam.github.io'
});
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import netlify from '@astrojs/netlify';  // ❌ ELIMINA esta línea

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',  // ✅ Debe decir 'static'
  // adapter: netlify()  // ❌ ELIMINA esta línea
});

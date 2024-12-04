import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/Project_3/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
})

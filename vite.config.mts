import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH?.trim() || '/',
  build: {
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), 'index.html'),
        projects: resolve(process.cwd(), 'projects/index.html'),
        about: resolve(process.cwd(), 'about/index.html'),
        skills: resolve(process.cwd(), 'skills/index.html'),
        contact: resolve(process.cwd(), 'contact/index.html'),
        shopco: resolve(process.cwd(), 'work/shopco/index.html'),
        evklid: resolve(process.cwd(), 'work/evklid/index.html'),
        coffee: resolve(process.cwd(), 'work/roasted-coffee/index.html'),
        tea: resolve(process.cwd(), 'work/tea/index.html'),
        elegance: resolve(process.cwd(), 'work/elegance-shop/index.html'),
        sitdown: resolve(process.cwd(), 'work/sitdownpls/index.html'),
      },
    },
  },
})

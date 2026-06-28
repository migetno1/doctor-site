import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Custom domain (www.alexanderqho.com) serves from the root, so base = '/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mi-Curriculum-vitae/', // nombre EXACTO del repo
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/atgAtharvGupta.github.io/', // Update this to match your GitHub repository name
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <--- Cette ligne est importante

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- Et celle-ci aussi
  ],
  base: "/portfolio-data-eng/",
})
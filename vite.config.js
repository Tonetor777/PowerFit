import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
}, 
{
  resolve: {
    alias: {
      '@chapa_et/inline.js': '/node_modules/@chapa_et/inline.js/lib/inline.js',
    },
  },
})

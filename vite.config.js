
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 10000
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 10000,
    allowedHosts: ['osa-7hwt.onrender.com', '.onrender.com']
  }
})
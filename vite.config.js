import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// Load .env into process.env
dotenv.config()

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const target = process.env.VITE_API_URL || env.VITE_API_URL || 'http://localhost:3000'

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target,
          changeOrigin: true,
          secure: false,
          // keep the /api prefix when forwarding
          rewrite: (path) => path.replace(/^\/api/, '/api'),
        },
      },
    },
  }
})

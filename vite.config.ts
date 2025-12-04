import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure proper asset paths
  publicDir: 'public', // Explicitly define public directory
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure all assets are copied
    copyPublicDir: true,
    // Better cache busting
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  }
})

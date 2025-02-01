import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Expose to all network interfaces
    port: 5173,       // Default port, you can change it if needed
    strictPort: true, // Ensure the server only uses this port
  },
  plugins: [
    react(),
    tailwindcss()
  ],
})
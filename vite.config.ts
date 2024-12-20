import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://finovaapay-backend-lk9fu.ondigitalocean.app',
        changeOrigin: true,
        secure: true, // Ensure this matches your server's SSL setup
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api prefix
      },
    },
  },
});

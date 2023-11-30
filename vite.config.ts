import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@interfaces': '/src/interfaces',
      '@constants': '/src/constants',
      '@utils': '/src/utils',
      '@pages': '/src/pages',
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    cssCodeSplit: true,
    modulePreload: {
      polyfill: true
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react/') || id.includes('react-dom/')) {
              return 'react-core';
            }
            if (id.includes('framer-motion') || id.includes('@react-spring')) {
              return 'animations';
            }
            if (id.includes('react-tilt') || id.includes('react-fast-marquee')) {
              return 'ui-effects';
            }
            if (id.includes('react-icons')) {
              return 'icons';
            }
            return 'vendor';
          }
          // Component chunks
          if (id.includes('/components/')) {
            if (id.includes('Projects')) return 'projects';
            if (id.includes('Skills')) return 'skills';
            if (id.includes('About')) return 'about';
            if (id.includes('Contact')) return 'contact';
            if (id.includes('Hero')) return 'hero';
            return 'components';
          }
        }
      }
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      '@react-spring/web',
      'react-tilt',
      'react-fast-marquee',
      'react-intersection-observer'
    ],
    exclude: ['blurhash']
  },
  server: {
    hmr: {
      protocol: 'ws'
    }
  },
  preview: {
    port: 4173,
    host: true
  }
});

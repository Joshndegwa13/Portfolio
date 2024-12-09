import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    cssCodeSplit: true,
    modulePreload: true,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion', '@react-spring/web'],
          'ui-vendor': ['react-tilt', 'react-fast-marquee'],
          'icons': ['react-icons'],
          'utils': ['react-intersection-observer', 'react-use', 'popmotion']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', '@react-spring/web'],
    exclude: ['blurhash']
  },
  server: {
    hmr: {
      protocol: 'ws'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
});

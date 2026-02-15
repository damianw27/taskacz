import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import Unfonts from 'unplugin-fonts/vite';
import { defineConfig } from 'vite';
import neutralino from 'vite-plugin-neutralino';

export default defineConfig({
  root: resolve(__dirname, 'src', 'platforms', 'desktop'),
  plugins: [
    react(),
    neutralino({ rootPath: __dirname }),
    Unfonts({
      google: {
        families: [
          'Noto Sans',
          'Noto Sans CJK JP',
          'Noto Sans CJK KR',
          'Noto Sans CJK SC',
          'Noto Sans CJK TC',
          'Noto Sans Devanagari',
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.tsx'],
  },
  build: {
    outDir: resolve(__dirname, 'dist', 'desktop'),
    rolldownOptions: {
      input: resolve(__dirname, 'src', 'platforms', 'desktop', 'index.html'),
      output: {
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    minify: 'esbuild',
    target: 'esnext',
    cssCodeSplit: true,
  },
});

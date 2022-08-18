import path from 'path';

import { defineConfig } from 'vite';

const rootDir = path.resolve(__dirname, 'src', 'vanilla');
const outDir = path.resolve(__dirname, 'static', 'vanilla');

export default defineConfig({
  build: {
    target: 'es2015',
    outDir,
    rollupOptions: {
      input: {
        vanilla: path.resolve(rootDir, 'index.ts'),
      },
      output: {
        entryFileNames: 'index.js',
      },
    },
  },
});

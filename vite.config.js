import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,       // Cria uma entrada de tipos no package.json
      outputDir: 'dist/types',      // Gera os tipos em 'dist/types'
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'frac-ui',
      fileName: (format) => `frac-ui.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    cssCodeSplit: true,
  }
});

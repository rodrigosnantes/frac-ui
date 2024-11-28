import path from "path"
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: 'src/index.ts',  // ponto de entrada da biblioteca
      name: 'frac-ui', // nome da biblioteca para uso global
      fileName: (format) => `frac-ui.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // evita duplicar dependências
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


/// <reference types="vitest" />

import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import { keycloakify } from 'keycloakify/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2022'],
    minify: mode === 'production',
  },
  resolve: {
    mainFields: ['module'],
  },
  define: {
    'ngDevMode': mode === 'production' ? 'false' : 'true',
  },
  plugins: [
    angular(),
    keycloakify({
      accountThemeImplementation: 'Multi-Page',
      emailThemeImplementation: 'ftl',
    }),
  ],
}));
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    coverage: {
      all: true,
      src: ['./src'],
      exclude: ['main.tsx', 'vite-env.d.ts', 'tests/**'],
      reporter: ['text', 'lcov'],
    },
  },
})

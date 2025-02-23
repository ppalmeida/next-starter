import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

// We use this to resolve the path to the tests-setup file
// This will help Vitest VSCode extension to resolve the path to the tests-setup file
const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [resolve(__dirname, './src/tests/tests-setup.tsx')],
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  }
})
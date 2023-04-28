import { defineConfig } from 'cypress';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: ['cypress/**/*.*', 'types.ts'],
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      return config;
    },
  },
});

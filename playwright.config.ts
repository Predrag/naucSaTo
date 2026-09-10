import { fileURLToPath } from 'node:url'
import { defineConfig, devices } from '@playwright/test'
import type { ConfigOptions } from '@nuxt/test-utils/playwright'

// const BASE_URL = process.env.BASE_URL || 'http://localhost:3001'

export default defineConfig<ConfigOptions>({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 3,
  reporter: 'html',
  expect:{
    timeout: 5000
  },
  use: {
    trace: 'on-first-retry',
    actionTimeout: 10 * 1000,
    nuxt: {
      rootDir: fileURLToPath(new URL('.', import.meta.url)),
      // host: BASE_URL,
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] } 
    },
  ],
})

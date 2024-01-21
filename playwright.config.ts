import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  timeout: 1000 * 60,
  reporter: 'html',

  use: {
    trace: 'on-first-retry',
    baseURL: 'http://localhost:50789',
  },

  webServer: {
    command: 'npm run dev:test',
    port: 50789,
    reuseExistingServer: !process.env.CI,
  },

  // projects: [
  //   /* Test against desktop browsers */
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },
  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },
  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   },
  //   /* Test against mobile viewports. */
  //   {
  //     name: 'Mobile Chrome',
  //     use: { ...devices['Pixel 5'] },
  //   },
  //   {
  //     name: 'Mobile Safari',
  //     use: { ...devices['iPhone 12'] },
  //   },
  //   /* Test against branded browsers. */
  //   {
  //     name: 'Microsoft Edge',
  //     use: { ...devices['Desktop Edge'], channel: 'msedge' }, // or 'msedge-dev'
  //   },
  // ],
});

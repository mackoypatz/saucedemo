// Import defineConfig and devices from playwright/test
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',  // Points to the tests folder
  testMatch: ['**/*.spec.js', '**/*.test.js'],  // Matches both `.spec.js` and `.test.js`

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    timeout: 90000,  // ✅ Set timeout to 60 seconds per test
    expect: {
      timeout: 10000  // ✅ Timeout for expect() conditions (e.g., toBeVisible)
    },
    video: 'on',
    launchOptions: {
      slowMo: 2000
    },
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome (Pixel 5)',
      use: { ...devices['Pixel 5'] },
    },
  ],
});



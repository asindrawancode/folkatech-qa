// login-tests.spec.js

const { test, expect } = require('@playwright/test');

// Configure your test run
test.use({
  launchOptions: {
    headless: false, // Run tests with a visible browser window
    // Optionally, you can set the slowMo parameter to slow down the execution
    slowMo: 50, // slows down Playwright operations by 50ms
  },
    screenshot: 'only-on-failure', // Capture screenshots only on failures
});

test.describe('Lapor Folkatech Login Tests', () => {

  test('Positive Login Test', async ({ page }) => {
    // Navigate to the Lapor Folkatech website
    await page.goto('https://lapor.folkatech.com/');

    // Enter valid username and password
    await page.fill("//input[@type='email']", 'admin@example.com');
    await page.fill('#password', 'password');

    // Click the login button
    await page.click("//button[@type='submit']");

    // Verify successful login by checking the URL or presence of a specific element
    await expect(page).toHaveURL('https://lapor.folkatech.com/admin/dashboard');
  });

  test('Negative Login Test', async ({ page }) => {
    // Navigate to the Lapor Folkatech website
    await page.goto('https://lapor.folkatech.com/');

    // Enter an invalid username and password
    await page.fill("//input[@type='email']", 'invalid@example.com');
    await page.fill('#password', 'password');

    // Click the login button
    await page.click("//button[@type='submit']");

    // Verify that an error message is displayed
    await expect(page.locator("//label[@role='alert']")).toBeVisible();
    await expect(page.locator("//label[@role='alert']")).toHaveText('Login Gagal! Akun tidak ada.');
  });

});

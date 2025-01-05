```markdown
# Lapor Folkatech Playwright Tests

## Prerequisites

- Node.js (>= 12.x)
- npm (Node Package Manager)

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/asindrawancode/folkatech-qa.git
   cd folkatech-qa
   ```

2. **Install Dependencies**

   Run the following command to install the required Node.js packages:

   ```bash
   npm install --save-dev @playwright/test
   ```

3. **Configure Playwright**

   Ensure Playwright browsers are installed:

   ```bash
   npx playwright install
   ```

## Test Scripts

The following test scripts are included:

- **Positive Login Test**: Verifies that users can log in with valid credentials.
- **Negative Login Test**: Verifies the system's response to invalid login attempts.

## Running the Tests

Run the tests using the Playwright test runner with the following command:

```bash
npx playwright test
```

This will execute the login tests in a non-headless mode (with a visible browser window) and take screenshots of any failures.

## Screenshots

Screenshots are automatically taken and saved in the `test-results` directory when a test fails. These can be reviewed to help diagnose issues.

## Project Structure

```
saucedemo-playwright-tests/
  ├── node_modules/
  ├── login-tests.spec.js       # Test specifications for positive and negative login tests
  ├── README.md                 # Project documentation
  ├── package.json              # Project configuration and scripts
  └── package-lock.json         # Dependencies and versions
```

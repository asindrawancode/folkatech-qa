
# Folkatech Quality Assurance Testing Repository

This repository contains solutions for the Folkatech take-home test, divided into two main sections:

## Sections

### Section 1: Folkatech - Quality Assurance Automation
1. **Web Automation**
2. **API Automation**
3. **Performance Testing**

### Section 2: Folkatech - Quality Assurance (Manual Testing)
1. **Test Case Writing**
2. **Exploratory Testing**

---

## Automated Testing with Playwright

### Prerequisites
- **Node.js** version 12.x or higher
- **npm** (Node Package Manager)

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/asindrawancode/folkatech-qa.git
   cd folkatech-qa


2. **Install Dependencies**

   Execute the following command to install necessary Node.js packages:

   ```bash
   npm install --save-dev @playwright/test
   ```

3. **Configure Playwright**

   Ensure that Playwright browsers are installed:

   ```bash
   npx playwright install
   ```

### Test Scripts Included

- **Positive Login Test**: Validates that users can successfully log in using valid credentials.
- **Negative Login Test**: Checks the system's response to invalid login attempts.

### Running the Tests

To execute the tests using the Playwright test runner, run:

```bash
npx playwright test
```

This command will run the login tests in a visible browser window (non-headless mode) and capture screenshots of any failures.

### Screenshots

If a test fails, screenshots will be automatically generated and saved in the `test-results` directory. These screenshots can be reviewed to assist in diagnosing issues.
```

This reformatted version organizes the content into well-defined sections, making it easier to read and understand the setup and functionality of the repository.
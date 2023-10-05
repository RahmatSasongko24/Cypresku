const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      login_url: 'https://demowebshop.tricentis.com/login',
      register_url: 'https://demowebshop.tricentis.com/register',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 5000
  },
});
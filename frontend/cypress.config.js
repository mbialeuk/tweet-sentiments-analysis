const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: '../tests/test_e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:3000', 
  },
});



const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: '../tests/test_e2e/**/*.cy.{js,jsx,ts,tsx}', // Chemin vers vos fichiers de test
    baseUrl: 'http://localhost:3000', // URL de base pour vos tests
  },
});

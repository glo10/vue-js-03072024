const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5500/tests/front/src',
    viewportHeight: 619,
    viewportWidth: 1304,
    chromeWebSecurity: false
    // experimentalShadowDomSupport: true
  }
})

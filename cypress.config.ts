const { defineConfig } = require("cypress");
import * as path from 'path'
const fse = require('fs-extra')

module.exports = defineConfig({
  projectId: "xmhkmk",
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      function getConfigurationByFile(filename) {
        const pathToConfigFile = path.resolve('cypress/config', `${filename}.json`)
        return fse.readJSON(pathToConfigFile)
      }
      const file = config.env.configFile || 'default'
      return getConfigurationByFile(file)
    },
    specPattern: "cypress/e2e/**/*.spec.ts",
  },
  viewportWidth: 1366,
  viewportHeight: 768,
  retries: {
    runMode: 1,
    openMode: 0
  },
  defaultCommandTimeout: 4000,
  execTimeout : 30000,
  numTestsKeptInMemory: 10,
  trashAssestsBeforeRun : true,
  watchForFileChanges : true,
  projectID:"xmhkmk"
});

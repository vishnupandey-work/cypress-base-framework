const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
import * as path from 'path'
const fse = require('fs-extra')
const locale = process.env.SITE_LOCALE;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });

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
  execTimeout: 30000,
  numTestsKeptInMemory: 10,
  trashAssestsBeforeRun: true,
  watchForFileChanges: true,
  projectId: "xmhkmk",
  "reporterEnabled": "mochawesome, mocha-junit-reporter",
  "mochawesomeReporterOptions": {
    "reportDir": `.reports/${locale}`
  },
  "mochaJunitReporterReporterOptions": {
    "mochaFile": `./junit/${locale}/[hash].xml`
  },
});

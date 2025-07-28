const { defineConfig } = require("cypress");
const XLSX = require('xlsx');
const path = require('path');

module.exports = defineConfig({

  reporter: "cypress-mochawesome-reporter", // Specify the reporter 

  reporterOptions: {
    configFile: "multi-reporters.json"  // <-- points to the multi reporter config file
  },

  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    experimentalOriginDependencies: true, // ✅ Enables Cypress.require()
    redirectionLimit: 50,

    setupNodeEvents(on, config) {

      // Register the reporter plugin 

      require('cypress-mochawesome-reporter/plugin')(on);

      on('task', {
        readExcel({ fileName, sheetName }) {
          const filePath = path.resolve('cypress/fixtures', fileName);
          const workbook = XLSX.readFile(filePath);
          const sheet = workbook.Sheets[sheetName];
          if (!sheet) {
            throw new Error(`Sheet "${sheetName}" not found in ${fileName}`);
          }
          const data = XLSX.utils.sheet_to_json(sheet);
          return data;
        }
      }

      );

    },

    reporterOptions: {

      reportDir: 'cypress/reports', // Directory for saving reports 

      overwrite: false,             // Prevent overwriting reports 

      html: true,                   // Generate an HTML report 

      json: true,                   // Generate a JSON report 

      charts: true,                 // Include charts in the report 

    },

    video: true,                    // Capture video of test runs 

    screenshotsFolder: "cypress/screenshots", // Screenshot folder 

    videosFolder: "cypress/videos",           // Video folder 

  },

}); 
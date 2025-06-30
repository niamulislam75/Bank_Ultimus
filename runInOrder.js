const cypress = require('cypress');

(async () => {
  console.log('Running DDAccOpen.cy.js...');
  await cypress.run({
    spec: 'cypress/e2e/DDAccOpen.cy.js'
  });

  console.log('Running DDTrfTrans.cy.js...');
  await cypress.run({
    spec: 'cypress/e2e/DDTrfTrans.cy.js'
  });
})();

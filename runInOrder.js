const cypress = require('cypress');

(async () => {
  console.log('Running DemandDeposit.cy.js...');
  await cypress.run({
    spec: 'cypress/e2e/Deposit/DemandDeposit.cy.js'
  });

 console.log('Running SchemeDeposit.cy.js...');
  await cypress.run({
    spec: 'cypress/e2e/Deposit/SchemeDeposit.cy.js'
  });
})();

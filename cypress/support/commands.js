// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
 
import 'cypress-file-upload';

Cypress.Commands.add('getIframeBody', (selector) => {
  return cy
    .get(selector)
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap);
});


// Define a custom Cypress command named 'waitForOptionalRequest'
Cypress.Commands.add('waitForOptionalRequest', (alias, waitForRequestMs = 5000) => {
  // Capture the current time to track how long we've been waiting
  const startedAt = Date.now();

  // Define a polling function to check for the request
  function poll() {
    // Look through Cypress's internal request queue to see if the request with the alias has started
    const requests = Cypress.state('requests') || [];
    const request = requests.find(req => req.alias === alias);

    // If the request is found, wait for it to complete
    if (request) {
      return cy.wait(alias); // Cypress will wait until the request completes
    }

    // If the maximum wait time has been exceeded and the request hasn't started
    if (Date.now() - startedAt >= waitForRequestMs) {
      cy.log(`Skipped waiting: ${alias} not triggered in ${waitForRequestMs}ms`);
      return cy.wrap(null); // Return a resolved Cypress command so the test continues
    }

    // Otherwise, wait 250ms and then check again
    return cy.wait(100).then(poll);
  }

  // Start polling
  return poll();
});
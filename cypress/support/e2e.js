// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
Cypress.on('uncaught:exception', (err, runnable) => {
    // prevent Cypress from failing the test on known app error
    if (err.message.includes("Cannot read properties of null (reading 'style')")) {
      return false;
    }
  });

Cypress.on('uncaught:exception', (err, runnable) => {
  // Only ignore the specific known error
  if (err.message.includes("Failed to execute 'focus'")) {
    return false; // prevent Cypress from failing the test
  }
});

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Failed to execute \'replaceState\'')) {
    // returning false here prevents Cypress from failing the test
    return false;
  }
});

Cypress.on('uncaught:exception', (err, runnable) => {
  if (
    err.message.includes("Failed to execute 'replaceState' on 'History'") &&
    err.message.includes('cannot be created in a document with origin')
  ) {
    return false;
  }
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // Handle unexpected KeyboardEvent TypeError too
  if (err.message.includes("Cannot read properties of undefined") &&
      err.message.includes("reading 'KeyboardEvent'")) {
    return false;
  }

  // Let all other errors fail the test
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore known frontend JS errors caused by the app
  if (
    err.message.includes("Failed to execute 'focus' on 'HTMLElement'") ||
    err.message.includes("missing ) after argument list")
  ) {
    return false; // Prevent Cypress from failing the test
  }
});

Cypress.on('uncaught:exception', (err, runnable) => {
  if (
    err.message.includes("Can not read properties of null") ||
    err.message.includes("reading 'focus'")||
    err.message.includes("Cannot set properties of null") ||
    err.message.includes("setCursorPosition is not defined")  
  ) {
    return false; // Prevent Cypress from failing the test
  }
});
//
  

import './commands'
import 'cypress-mochawesome-reporter/register';
import 'cypress-iframe';
require('cypress-xpath');

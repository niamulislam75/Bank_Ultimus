class ERPLogin {
  erpLogin() {

    const dataLogin = Cypress.env('excelData');

    cy.visit(dataLogin.url); // Visit the URL
   
    cy.get('#email').type(dataLogin.user_name); // Enter username
    cy.get('#password').type(dataLogin.password); // Enter password
    cy.get('.mdc-button__label > .ng-tns-c2851748873-0').click(); // Click login button
     cy.url().should('include', '/landing');  // Assertion: URL contains /HomePageUI
  }
}
export default ERPLogin;

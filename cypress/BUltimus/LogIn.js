class LoginPage {
  Login() {

    const dataLogin = Cypress.env('excelData');

    cy.visit(dataLogin.url); // Visit the URL
    cy.get('#UserId').type(dataLogin.username); // Enter username
    cy.get('#PasswordString').type(dataLogin.password); // Enter password
    cy.get('#btnlogin').click(); // Click login button

    //cy.get('.ui-button-text').click();
  }
}

export default LoginPage;

  
class LoginPage {
  Login() {

    const dataLogin = Cypress.env('excelData');

    cy.visit(dataLogin.url); // Visit the URL
    cy.get('#UserId').type(dataLogin.user_name); // Enter username
    cy.get('#PasswordString').type(dataLogin.password); // Enter password
    cy.get('#btnlogin').click(); // Click login button
    cy.url().should('include', '/HomePageUI');  // Assertion: URL contains /HomePageUI
  }
}
export default LoginPage;

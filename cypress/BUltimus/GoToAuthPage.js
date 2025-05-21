class GoToAuthPage {
    
  AuthPage() {

    const authPage = Cypress.env('excelData');

    cy.url().should('eq', authPage.HomePageUrl);
    cy.get('#txtMenuSearch').type(authPage.FastPath).type('{enter}'); // Enter username
   
    
      
    }
  }
  
  export default GoToAuthPage;
  
    
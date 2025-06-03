class GoToFastPath {
    
  FastPath() {

      const dataCIFPage = Cypress.env('excelData');

      cy.url().should('eq', dataCIFPage.HomePageUrl);
      cy.get('#txtMenuSearch').type(dataCIFPage.FastPath).type('{enter}'); // Enter username
      
    }
  }
  
  export default GoToFastPath;
  
    
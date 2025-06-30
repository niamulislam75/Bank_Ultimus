class MenuSearch {
    
  menu() {

      const dataMenuSearch = Cypress.env('excelData');

      cy.url().should('eq', dataMenuSearch.HomePageUrl);
      cy.get('#txtMenuSearch').type(dataMenuSearch.fast_path).type('{enter}');  
      
    }
  }
  
  export default MenuSearch;
  
    
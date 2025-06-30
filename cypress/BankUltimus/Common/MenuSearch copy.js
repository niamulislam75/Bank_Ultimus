class MenuSearch2 {
    
  menu2() {

     cy.get(':nth-child(3) > :nth-child(2) > .text-2xl').click();

        cy.origin('http://192.168.10.36:4300', () => {
            cy.get("span[class='ng-tns-c321347134-2']").click();
        });
        
        cy.origin('http://192.168.10.36:4300', () => {
            cy.contains('a', 'Employee Details', { timeout: 10000 })  // anchor ট্যাগ যেটার ভিতরে লেখা আছে "Employee Details"
                .should('be.visible')
                .click();
            // Fill up the form
            // cy.get('#mat-input-0').type(dataEmployeeDetails.emp_ID);
            // cy.get('#mat-input-1').type(dataEmployeeDetails.full_name_EN);
            // cy.get('#mat-input-2').type(dataEmployeeDetails.full_name_BN);
            // cy.get('#mat-input-3').type(dataEmployeeDetails.father_name_EN);
            // cy.get('#mat-input-4').type(dataEmployeeDetails.mother_name_EN);


        });


      const dataMenuSearch = Cypress.env('excelData');

      cy.url().should('eq', dataMenuSearch.HomePageUrl);
      //cy.get('#txtMenuSearch').type(dataMenuSearch.fast_path).type('{enter}');  
      
    }
  }
  
  export default MenuSearch2;
  
    
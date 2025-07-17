 
class EmployeeInfoDetailsPage {

  EmployeeInfoDetails() {
   
    cy.get(':nth-child(3) > :nth-child(2) > .text-2xl').click();

    cy.origin('http://192.168.10.36:4300', () => {

      cy.get("span[class='ng-tns-c321347134-2']").click();
      cy.get('.mat-mdc-tooltip-trigger.fuse-vertical-navigation-item.ng-tns-c321347134-5').click();
      
 

      cy.get('#mat-input-0').type('EMP001');
      cy.get('#mat-input-1').type('Md. Niamul Islam');
      cy.get('#mat-input-2').type('মোঃ নিয়ামুল ইসলাম');
      cy.get('#mat-input-3').type('Md. Abdur Rahman');
      cy.get('#mat-input-4').type('মোঃ আবদুর রহমান');
      cy.get('#mat-input-5').type('Mst. Tahura Begum');
      cy.get('#mat-input-6').type('মোসা. তহুরা বেগম');
      cy.get('#mat-input-7').type('12/8/1990  ');
      cy.get('#mat-input-8').type('Thakurgaon');
      cy.get('#mat-input-9').type('5845125456');
      cy.get('#mat-input-10').type('Bangladeshi');
      cy.get('#mat-input-11').type('9854585487985');
      cy.get('#mat-select-value-1').click();
      cy.get('.mat-select-search-inner-row > .mat-select-search-input').type('Islam');
      cy.get('#mat-option-32 > .mdc-list-item__primary-text').click(); 
      cy.get('#mat-select-value-2').click();
      cy.get('.mat-select-search-inner-row > .mat-select-search-input').type('O+');
      cy.get('#mat-option-42 > .mdc-list-item__primary-text').click(); 
      cy.get('#mat-input-12').type('5.9');
      cy.get('#mat-input-13').type('90');

      cy.get('#mat-select-value-0').click('Married');
      cy.get("mat-option[id='mat-option-30'] span[class='mdc-list-item__primary-text']").click(); 
      //cy.get('#mat-select-value-0').select('Married');
      cy.get('#mat-input-14').type('02/05/2019');

      cy.get('#mat-input-16').type('01308194737');
      cy.get('#mat-input-17').type('01723339875');
      cy.get('#mat-input-18').type('01723339875');
      cy.get('#mat-input-19').type('nishamulislam@gmail.com');
      cy.get('#mat-input-20').type('niamul.islam@leads-bd.com');
      cy.get('#mat-input-21').type('4858');
      cy.get('#mat-input-22').type('2415652545');
      cy.get('#mat-input-23').type('Dhaka');
      cy.get('#mat-input-24').type('01/01/2015');
      cy.get('#mat-input-25').type('31/12/2030');
      cy.get('#mat-input-26').type('98758745789'); 


      cy.get('#mat-select-value-3').click();
      cy.get('.mat-select-search-inner-row > .mat-select-search-input').type('Bangladesh');
      //cy.wait(3000); // Wait for 3 seconds to ensure the form is ready
      cy.get("mat-option[id='mat-option-67'] span[class='mdc-list-item__primary-text']").click();


      // Select the option "Bangladesh"
      // cy.get('mat-option span.mdc-list-item__primary-text')
      //   .contains(/^Bangladesh\s*$/)
      //   .click();

      cy.get('#mat-select-value-4').click();
      cy.get('.mat-select-search-inner-row > .mat-select-search-input').type('Dhaka');
      //cy.wait(3000); // Wait for 3 seconds to ensure the form is ready
      cy.get("mat-option[id='mat-option-69'] span[class='mdc-list-item__primary-text']").click();

      cy.get('#mat-select-value-5').click();
      cy.get('.mat-select-search-inner-row > .mat-select-search-input').type('Dhaka');
      //cy.wait(3000); // Wait for 3 seconds to ensure the form is ready
      cy.get('#mat-option-57 > .mdc-list-item__primary-text').click();

      cy.get('#mat-select-value-6').click();
      cy.get('.mat-select-search-inner-row > .mat-select-search-input').type('Rupganj');
      //cy.wait(3000); // Wait for 3 seconds to ensure the form is ready
      cy.get('#mat-option-63 > .mdc-list-item__primary-text').click();

      // cy.get('#mat-input-34').type('1208');
      // cy.get('#mat-input-35').type('Mirpur-10, Dhaka');

    });



    // const dataMenuSearch = Cypress.env('excelData');

    // cy.url().should('eq', dataMenuSearch.HomePageUrl);
    // cy.get('#txtMenuSearch').type(dataMenuSearch.fast_path).type('{enter}');

  }
}

export default EmployeeInfoDetailsPage;


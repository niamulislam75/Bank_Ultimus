import LoginPage from '../../BUltimus/LogIn.js'; // ES Module import
import GoToCIFPage from '../../BUltimus/GoToFastPath.js'
import CIFInfo from '../../BUltimus/CIF_Individual_Info.js'
import DoLogOut from '../../BUltimus/LogOut.js';


describe('authorize p.customer', () => {
 
  //name is 

  it('Authorize p. customer', () => {

    cy.visit('http://192.168.10.199/BankUltimusSPARK');
    cy.get('#UserId').type('shafique1');
    cy.get('#PasswordString').type('1'); // Enter password
    cy.get('#btnlogin').click(); // Click login button


    cy.get('#txtMenuSearch').type('1503').type('{enter}'); // Enter username



    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtFirstName').type('Nazrul');
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtLastName').type('Alamgir');

    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlIntroducerType').select('NID Verified');
    cy.wait(2000);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtIntroducerDetails').type('test type');
    cy.get('#ctl00_contPlcHdrMasterHolder_LsbtnOk').click();

    let pCustomerID = '';

        cy.get('#dialog') // Target the message container
          .invoke('text')
          .then((text) => {
            const cleanedText = text.trim(); // Remove extra whitespace
            pCustomerID = cleanedText.slice(-10); // Get last 10 characters
            cy.log('Customer ID: ' + pCustomerID);

            
          });
        
        cy.get('.ui-button').click();


    cy.get('#imgLogOut').click();
    cy.get('.ui-dialog-buttonpane > :nth-child(2)').click();

    cy.get('#UserId').type('shafique2');
    cy.get('#PasswordString').type('1'); // Enter password
    cy.get('#btnlogin').click();

    cy.get('#txtMenuSearch').type('8002').type('{enter}'); // Enter username

    
      cy.get('#ctl00_contPlcHdrMasterHolder_LsddlAuthFunction')
      .select('1503 - Prospective Customers Profile [Individual]');

      cy.get('#ctl00_contPlcHdrMasterHolder_btnAuthSearch').click();

      cy.wait(3000);

      cy.get('table tbody tr') // Adjust if you don’t use <table>
        .filter((index, row) => {
                const remarksCell = Cypress.$(row).find('td').eq(2); // 3rd column (Remarks)
                const text = remarksCell.text().trim();
                 return text.slice(-10) === pCustomerID;
             })
            .first() // Use `.first()` if there are multiple matches and you want only one
            .within(() => {
    // Find and click the 'Authorize/Decline' button in the matched row
         cy.contains('Authorize/Decline').click();
     });

     cy.get('#ctl00_contPlcHdrMasterHolder_LsbtnExit').click();
     cy.get('.ui-state-focus').click();
     cy.get('#ctl00_contPlcHdrMasterHolder_btnAuth').click();
     cy.get('.ui-button').click();



  });

});
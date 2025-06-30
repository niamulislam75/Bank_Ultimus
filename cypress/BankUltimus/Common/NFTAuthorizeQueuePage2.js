
class NFTAuthorizeQueuePage2 {

  NftAuth() {

    const dataNftAuth = Cypress.env('excelData');
    cy.intercept('POST', 'http://192.168.20.127/BankUltimus/src/BankUltimus.UI/NftAuthorizeQueueUI.aspx?FUNCTION_ID=0127002&FAST_PATH=8002').as('formReload');

    //cy.get('#ctl00_contPlcHdrMasterHolder_LsddlAuthFunction').click();
    // cy.wait(3000); 
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlAuthFunction').select(dataNftAuth.auth_func).blur();
    cy.wait('@formReload', { timeout: 10000 });       //intercept Post Request call
    //cy.get('#ctl00_contPlcHdrMasterHolder_LsddlAuthFunction').focus().select(dataNftAuth.auth_func, { force: true });

     //cy.wait(3000);
    cy.get('#ctl00_contPlcHdrMasterHolder_btnAuthSearch')
      .should('not.be.disabled') // ensure it's clickable
      .should('be.visible')      // ensure visible
      .click();

    cy.then(() => { 
      const proposalId = Cypress.env('proposalId');

      if (proposalId) {
        cy.log('🔍 Searching by proposal ID: ' + proposalId);

        cy.get('table tbody tr').each(($row) => {
          const text = $row.find('td').eq(2).text();
          if (text.includes(`ID:${proposalId}`)) {
            cy.wrap($row).within(() => {
              cy.contains('Authorize/Decline').click();
            });
            return false; // stop further iteration
          }
        });

      }else {
        throw new Error("❌ No identifier (accountNumber or savedCreditLineId) found in Cypress.env()");
      }
    });


    cy.wait(3000);
    cy.get('#ctl00_contPlcHdrMasterHolder_btnExit').click();//click exit btn


    cy.wait(3000);
    cy.get('.ui-state-focus > .ui-button-text').click();//click exit confirmation btn

    cy.wait(3000);
    cy.get('#ctl00_contPlcHdrMasterHolder_btnAuth').click();//click auth btn  

    cy.wait(3000);
    cy.get('.ui-button-text').click();   //click auth confirmation btn 


    cy.wait(3000);
    cy.get('#imggoHome').click();   //click home btn 
    cy.wait(3000);
    cy.get(':nth-child(2) > .ui-button-text').click();   //click home confirmation btn 


  }
}

export default NFTAuthorizeQueuePage2;
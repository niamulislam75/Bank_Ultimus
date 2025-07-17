class NFTAuthorizeQueuePage {

  NftAuth() {

    const dataNftAuth = Cypress.env('excelData');
    //cy.intercept('POST', 'http://192.168.20.127/BankUltimus/src/BankUltimus.UI/NftAuthorizeQueueUI.aspx?FUNCTION_ID=0127002&FAST_PATH=8002').as('formReload');

    //cy.get('#ctl00_contPlcHdrMasterHolder_LsddlAuthFunction').click();
    // cy.wait(3000); 
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlAuthFunction').select(dataNftAuth.auth_func).blur();
    //cy.wait('@formReload');       //intercept Post Request call
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlAuthFunction').focus().select(dataNftAuth.auth_func, { force: true });


    cy.get('#ctl00_contPlcHdrMasterHolder_btnAuthSearch').focus().click({ force: true }); //search Auth Function
    cy.wait(3000);
    //cy.wait('@formReload');
    // cy.get('#ctl00_contPlcHdrMasterHolder_btnAuthSearch', { timeout: 10000 }).should('not.be.disabled').click({ force: true });

    // cy.get('#ctl00_contPlcHdrMasterHolder_btnAuthSearch', { timeout: 10000 })
    //   .should('exist')
    //   .and('be.visible')
    //   .then($el => {
    //     cy.log('Button found:', $el.text());
    //   })
    //   .focus().click({ force: true });
    // cy.get('#ctl00_contPlcHdrMasterHolder_btnAuthSearch')
    //   .should('exist')
    //   .and('be.visible')  
    //   .should('not.be.disabled')
    //   .dblclick({ force: true });


    cy.then(() => {
      const accountNumber = Cypress.env('accountNumber');
      //const accountNumber = Cypress.env('6699316000011');
      const creditLineId = Cypress.env('creditLineId');
      const proposalId = Cypress.env('proposalId');

      if (accountNumber) {
        cy.log('🔍 Searching by Account Number: ' + accountNumber);

        cy.get('table tbody tr').then($rows => {
          const matchingRows = $rows.filter((index, row) => {
            const text = Cypress.$(row).find('td').eq(2).text().trim();
            return text.endsWith(accountNumber);
          });

          if (matchingRows.length === 0) {
            throw new Error(`❌ No matching rows found for Account Number: ${accountNumber}`);
          }

          cy.wrap(matchingRows[0]).within(() => {
            cy.contains('Authorize/Decline').click();
          });
        });

      } else if (creditLineId) {
        cy.log('🔍 Searching by Credit Line ID: ' + creditLineId);

        cy.get('table tbody tr').each(($row) => {
          const text = $row.find('td').eq(2).text();
          if (text.includes(`Credit Line ID:${creditLineId}`)) {
            cy.wrap($row).within(() => {
              cy.contains('Authorize/Decline').click();
            });
            return false; // stop further iteration
          }
        });

      } else if (proposalId) {
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

      } else {
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

export default NFTAuthorizeQueuePage;
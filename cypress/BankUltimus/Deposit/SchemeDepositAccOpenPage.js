class SchemeDepositAccOpen {

  SDAccOpen() {

    const dataSDAccOpen = Cypress.env('excelData');
    cy.intercept('POST', '/BankUltimus/src/BankUltimus.UI/BU_Deposit/DepositSchemeACUI.aspx?FUNCTION_ID=0201020&FAST_PATH=2003').as('formReload');

    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNoPrdId', { timeout: 10000 })
      .should('be.visible')
      .should('not.be.disabled')
      .click({ force: true }) // optional, gives focus
      .clear()
      .type(dataSDAccOpen.prod_ID, { force: true }).type('{enter}');

    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustId').focus().blur();
    cy.wait('@formReload');
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustId', { timeout: 10000 })
      .should('be.visible')
      .should('not.be.disabled')
      .type(dataSDAccOpen.cus_ID, { force: true }).type('{enter}');

    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusMailAddrType').focus().blur();
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusMailAddrType', { timeout: 10000 })
      .should('not.be.disabled')
      .should('contain.text', 'Permanent')
      .select(dataSDAccOpen.address_type, { force: true });
    cy.wait('@formReload');


    cy.wait(3000);
    //Check if textbox is empty
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccOpeningPrp').invoke('val').then((text) => {
      if (!text) {
        // If empty, type the purpose and click OK
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTermNo').select(dataSDAccOpen.term_No, { force: true });
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccOpeningPrp').type(dataSDAccOpen.purpose).type('{enter}');
      }
    });

    cy.get('#ctl00_contPlcHdrMasterHolder_LschkSMSNotificationAlert').click({ force: true });
    // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTermNo').invoke('val').then((text) => {
    //   if (!text) {
    //     //If empty, type the purpose and click OK
    //     cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTermNo').select(dataSDAccOpen.term_No, { force: true }); 
    //   }
    // });
    // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlInstallmentAmt').focus().blur();
    // cy.wait('@formReload');
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlInstallmentAmt', { timeout: 10000 })  // wait for it
      .should('not.be.disabled')
      .find('option')
      .should('have.length.greaterThan', 1);  // ensure options are loaded

    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlInstallmentAmt')
      .select('15000', { force: true });

    // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlInstallmentAmt', { timeout: 10000 })
    //   .should('not.be.disabled')
    //   .select(dataSDAccOpen.amount, { force: true });
    //cy.wait('@formReload');
    //cy.get('#ctl00_contPlcHdrMasterHolder_LsddlInstallmentAmt').select(dataSDAccOpen.amount, { force: true });
    // cy.wait('@formReload');

    // Re-select if necessary (e.g., if dropdown resets after reload)
    cy.wait(3000);
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlBeneficialOwner', { timeout: 10000 })
      .should('not.be.disabled')
      .select(dataSDAccOpen.ben_owner, { force: true });
    cy.wait(1000); // if needed

    // Wait until dropdown becomes enabled
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTranspRisk', { timeout: 10000 })
      .should('not.be.disabled')
      .select(dataSDAccOpen.risk, { force: true })  // in case it's slightly hidden
      .blur(); 
    cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click()

    
    // Wait for popup to be visible and contain expected text
    cy.get('.ui-dialog-content', { timeout: 10000 }) // 10s wait
      .should('be.visible')
      .invoke('text')
      .then((popupText) => {
        // Debug print
        cy.log('Popup Text: ' + popupText);

        const match = popupText.match(/Account No\s*:\s*(\d+)/);

        if (!match) {
          throw new Error("❌ Account Number not found in popup text.");
        }

        const accountNumber = match[1];
        expect(accountNumber).to.not.be.null;

        Cypress.env('accountNumber', accountNumber);
        cy.log('✅ Extracted Account Number: ' + accountNumber);
      }); 

    cy.wait(3000);
    cy.get('.ui-button-text').click();


  }
}

export default SchemeDepositAccOpen;
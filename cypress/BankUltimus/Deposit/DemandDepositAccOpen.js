class DemandDepositAccOpen {

  DDAccOpen() {

    const dataDDAccOpen = Cypress.env('excelData');
    cy.intercept('POST', '/BankUltimus/src/BankUltimus.UI/BU_Deposit/DepositDemandACUI.aspx?FUNCTION_ID=0201001&FAST_PATH=2001').as('formReload');

    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNoPrdId').type(dataDDAccOpen.prod_ID);

    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustId').clear();
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustId').focus().type(dataDDAccOpen.cus_ID);
    cy.wait(3000);

    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccOpeningPrp').clear();

    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusMailAddrType').select(dataDDAccOpen.address_type).blur();
    cy.wait(3000);
    cy.wait('@formReload');       //intercept Post Request call
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusMailAddrType').focus().select(dataDDAccOpen.address_type, { force: true });


    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTrNat').select(dataDDAccOpen.trans_nature).blur();
    cy.wait('@formReload');       //intercept Post Request call
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTrNat').focus().select(dataDDAccOpen.trans_nature, { force: true });

    cy.wait(3000);
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTransPeriod').select(dataDDAccOpen.trans_period).blur();
    cy.wait('@formReload');       //intercept Post Request call
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTransPeriod').select(dataDDAccOpen.trans_period);



    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtNoTrans').type(dataDDAccOpen.noOf_trans);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtTransAmt').type(dataDDAccOpen.trans_max_size);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtTotalValue').type(dataDDAccOpen.total_value);
    cy.wait(3000);
    cy.get('#ctl00_contPlcHdrMasterHolder_BtnKYCAdd').click();

    //cy.get('#ctl00_contPlcHdrMasterHolder_LsddlBeneficialOwner').click();
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlBeneficialOwner').select(dataDDAccOpen.ben_owner).blur();
    cy.wait('@formReload');       //intercept Post Request call   
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlBeneficialOwner').select(dataDDAccOpen.ben_owner);

    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTranspRisk').select(dataDDAccOpen.risk).blur();
    cy.wait('@formReload');       //intercept Post Request call   
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTranspRisk').select(dataDDAccOpen.risk);

    cy.get('#ctl00_contPlcHdrMasterHolder_LschkATM').uncheck();//.blur();
    cy.wait('@formReload');       //intercept Post Request call   


    cy.wait(3000);
    // Check if textbox is empty
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccOpeningPrp').invoke('val').then((text) => {
      if (!text) {
        // If empty, type the purpose and click OK
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccOpeningPrp').type(dataDDAccOpen.purpose);

        cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
      } else {
        // If not empty, directly click OK
        cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
      }
    });



    cy.wait(3000);

 
    // Wait for popup to be visible and contain expected text
    cy.get('.ui-dialog-content', { timeout: 10000 }) // 10s wait
      .should('be.visible')
      .invoke('text')
      .then((popupText) => {
        // Debug print
        cy.log('Popup Text: ' + popupText);

        const match = popupText.match(/Account Number\s*:\s*(\d+)/);

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

export default DemandDepositAccOpen;
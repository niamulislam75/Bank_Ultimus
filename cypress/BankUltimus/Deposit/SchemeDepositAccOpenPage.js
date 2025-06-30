class SchemeDepositAccOpen {

  SDAccOpen() {

    const dataSDAccOpen = Cypress.env('excelData');
    cy.intercept('POST', '/BankUltimus/src/BankUltimus.UI/BU_Deposit/DepositSchemeACUI.aspx?FUNCTION_ID=0201020&FAST_PATH=2003').as('formReload');

    Cypress.on('uncaught:exception', (err, runnable) => {
      // যদি error message এ "setCursorPosition" থাকে তাহলে ignore করবে
      if (err.message.includes('setCursorPosition is not defined')) {
        return false; // এই error কে Cypress fail হিসেবে ধরবে না
      }else{
          cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNoPrdId').type(dataSDAccOpen.prod_ID);
      }
    });

  

    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustId').clear();
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustId').focus().type(dataSDAccOpen.cus_ID);
    cy.wait(3000);

    // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNoPrdId', { timeout: 10000 }) // Wait up to 10 seconds
    //   .should('be.visible')
    //   .and('not.be.disabled')
    //   .clear()
    //   .type(dataSDAccOpen.Product_ID + '{enter}');

    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustId').clear();
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustId').focus();
    cy.wait(3000);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustId').should('be.visible')
      .and('not.be.disabled').clear().type(dataSDAccOpen.cus_ID + '{enter}');

    cy.wait(3000);
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusMailAddrType')
      .should('be.visible')
      .should('not.be.disabled')
      .should('contain', dataSDAccOpen.address_type)
      .select(dataSDAccOpen.Address_Type, { force: true });
    // cy.wait(3000);
    // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusMailAddrType')
    //   .should('be.visible')
    //   .should('not.be.disabled')
    //   .should('contain', dataSDAccOpen.Address_Type)
    //   .select(dataSDAccOpen.Address_Type, { force: true });

  }
}

export default SchemeDepositAccOpen;
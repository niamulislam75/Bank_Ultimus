class AuthorizeCustomer {

  AuthorizeCust() {

    const authCustInfo = Cypress.env('excelData');
    const customerID = Cypress.env('customerID');

    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlAuthFunction')
      .select('1501 - Customers Profile [Individual]');

    cy.get('#ctl00_contPlcHdrMasterHolder_btnAuthSearch').click();

    cy.wait(3000);

    cy.then(() => {
      const customerID = Cypress.env('customerID');

      cy.get('table tbody tr').then($rows => {
        const matchingRows = $rows.filter((index, row) => {
          const text = Cypress.$(row).find('td').eq(2).text().trim();
          return text.slice(-10) === customerID;
        });

        cy.wait(3000);

        if (matchingRows.length === 0) {
          throw new Error(`❌ No matching rows found for customerID: ${customerID}`);
        }

        cy.wrap(matchingRows[0]).within(() => {
          cy.contains('Authorize/Decline').click();
        });
      });
    });

    cy.get('#ctl00_contPlcHdrMasterHolder_btnExit').click();
    cy.get('.ui-state-focus').click();
    cy.wait(3000);
    cy.get('#ctl00_contPlcHdrMasterHolder_btnAuth').click();
    cy.get('.ui-button').click();



  }
}

export default AuthorizeCustomer;
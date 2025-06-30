class AccountInquary {

    AccInquary() {

       // const dataAccInquary = Cypress.env('excelData');
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (
                err.message.includes('setCursorPosition is not defined') ||
                err.message.includes("Cannot read properties of null")
            ) {
                return false; // prevent test from failing
            }
        });
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNo').focus().type('6699121000018');//dataAccInquary.AccNo

        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNo').focus().click({ force: true });
        //------use this block for dynamically use acc no. 
        cy.then(() => {
             const accountNumber = Cypress.env('accountNumber'); 
            cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNo')
                .clear() // Optional: clear input first
                .type(accountNumber + '{enter}');

        });

        cy.xpath("//td[contains(text(),'Available Balance :')]")
            .should('be.visible') // Ensure "Available Balance :" is visible
            .invoke('text')
            .then((availableBalanceText) => {
                // Validate "Available Balance :" text
                if (availableBalanceText.trim() === 'Available Balance :') {
                    cy.get('#ctl00_contPlcHdrMasterHolder_show fieldset:nth-of-type(4) table tbody tr:nth-of-type(1) td:nth-of-type(2)')
                        .invoke('text')
                        .then((balanceValueText) => {
                            // Validate the balance value "20,651.00"
                            const expectedBalance = '1,00,000.00';
                            if (balanceValueText.trim() === expectedBalance) {
                                cy.log('Validation passed: Available Balance and value are correct.');
                            } else {
                                cy.log(`Validation failed: Expected balance "${expectedBalance}", but found "${balanceValueText.trim()}".`);
                                throw new Error(`Balance value mismatch. Expected: "${expectedBalance}", Found: "${balanceValueText.trim()}"`);
                            }
                        });
                }
                cy.wait(3000)

            }
            );

    }
}

export default AccountInquary;
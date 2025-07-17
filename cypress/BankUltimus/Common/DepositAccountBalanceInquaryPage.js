class AccountInquary {

    AccInquary() {


        //------use this block for dynamically use acc no. 
        cy.then(() => {
            const accountNumber = Cypress.env('accountNumber');
            //const accountNumber = Cypress.env('6699251000013');
            const productCode = accountNumber.substring(4, 7);
            Cypress.env('productCode', productCode);
            cy.log('Product Code:', productCode);
            cy.log('Account Number:', accountNumber); // Log the account number for debugging
            cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNo')
                .clear() // Optional: clear input first
                .type(accountNumber).type('{enter}');

        });
        //------use this block for dynamically use acc no. 

        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNo')
        //     .clear() // Optional: clear input first
        //     .type('6699251000013' + '{enter}');

        cy.then(() => {
            const productCode = Cypress.env('productCode');
            //const productCode = Cypress.env('251');
            // const TransactionAmount = Cypress.env('transAmount');
            // console.log('Transaction Amount:', TransactionAmount); // Log the transaction amount for debugging

            if (parseInt(productCode) <= 199) {// Demand Deposit
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

            } else if (parseInt(productCode) >= 201 && parseInt(productCode) <= 299) {// Time Deposit
                console.log('Product Code is Time Deposit:', productCode);
                cy.get('#ctl00_contPlcHdrMasterHolder_show > :nth-child(13)')
                    .contains('Available Balance')
                    .parent() // get the row
                    .find('td') // get all cells in that row
                    .eq(1) // second cell contains the value
                    .invoke('text')
                    .then((val) => {
                        const actualBalance = val.replace(/[, ]/g, '').trim(); // string value like '15000.00'
                        const expectedBalance = '100000.00'; // expected value as string

                        if (actualBalance === expectedBalance) {
                            cy.log('✅ Validation passed: Available Balance is correct.');
                        } else {
                            cy.log(`❌ Validation failed: Expected "${expectedBalance}", but found "${actualBalance}".`);
                            throw new Error(`Balance mismatch. Expected: "${expectedBalance}", Found: "${actualBalance}"`);
                        }
                    });
                // cy.get('#ctl00_contPlcHdrMasterHolder_fieldsetNominee')
                //     .find('table tr') // Find all table rows
                //     .not(':first')    // Exclude the header row
                //     .then(($rows) => {
                //         const nomineeCount = $rows.length;
                //         cy.log('Total Nominees:'+ nomineeCount +'Founds');

                //         // ✅ Optional assertion: Check at least 1 nominee
                //         expect(nomineeCount).to.be.greaterThan(0);
                //     });


            } else if (parseInt(productCode) >= 301 && parseInt(productCode) <= 399) {// Scheme Deposit
                console.log('Product Code is Scheme Deposit:', productCode);
                cy.get('#ctl00_contPlcHdrMasterHolder_show')
                    .contains('Available Balance')
                    .parent() // get the row
                    .find('td') // get all cells in that row
                    .eq(1) // second cell contains the value
                    .invoke('text')
                    .then((val) => {
                        const actualBalance = val.replace(/[, ]/g, '').trim(); // string value like '15000.00'
                        const expectedBalance = '15000'; // expected value as string

                        if (actualBalance === expectedBalance) {
                            cy.log('✅ Validation passed: Available Balance is correct.');
                        } else {
                            cy.log(`❌ Validation failed: Expected "${expectedBalance}", but found "${actualBalance}".`);
                            throw new Error(`Balance mismatch. Expected: "${expectedBalance}", Found: "${actualBalance}"`);
                        }
                    });


            } else {
                throw new Error("❌ No identifier (productCode) found in Cypress.env()");
            }
        });





    }
}

export default AccountInquary;
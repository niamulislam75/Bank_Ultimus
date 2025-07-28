class TimeDepositAccOpen {

    TDAccOpen() {

        const dataTDAccOpen = Cypress.env('excelData');
        cy.intercept('POST', '/BankUltimus/src/BankUltimus.UI/BU_Deposit/DepositTimeACUI.aspx?FUNCTION_ID=0201009&FAST_PATH=2002').as('formReload');


        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNoPrdId', { timeout: 10000 }) // Wait up to 10 seconds
            .should('be.visible')
            .and('not.be.disabled')
            .clear()
            .type(dataTDAccOpen.prod_ID).type('{enter}');


        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustId').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustId').focus();
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustId').should('be.visible')
            .and('not.be.disabled').clear().type(dataTDAccOpen.cus_ID).type('{enter}');

        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusMailAddrType', { timeout: 10000 })
            .should('be.visible')
            .should('not.be.disabled')
            .should('contain', dataTDAccOpen.address_type)
            .select(dataTDAccOpen.address_type, { force: true });


        cy.wait(3000);
        //cy.get('#ctl00_contPlcHdrMasterHolder_LstxtTOT_TERM_NO').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtTOT_TERM_NO').clear().type(dataTDAccOpen.term_No).type('{enter}');

        cy.wait(3000);
        //cy.get('#ctl00_contPlcHdrMasterHolder_LstxtPRINCIPAL_AMT').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtPRINCIPAL_AMT').clear().type(dataTDAccOpen.principal_AMT).type('{enter}');

        cy.wait(3000);

        //cy.get('#ctl00_contPlcHdrMasterHolder_LstxtINSTRUMENT_NO').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtINSTRUMENT_NO').clear().type(dataTDAccOpen.instrument_No).type('{enter}');

        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccOpeningPrp', { timeout: 10000 })
            .should('exist')
            .should('not.be.disabled')
            .type(dataTDAccOpen.purpose).type('{enter}');

        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LschkPrincipalToTrfAcc').click();
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LschkIntToTrfAcc').click();


        // Wait for page to stabilize
        cy.wait(1000); // if needed

        // Wait until dropdown becomes enabled
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlBeneficialOwner', { timeout: 10000 })
            .should('not.be.disabled')
            .select(dataTDAccOpen.ben_owner, { force: true })  // in case it's slightly hidden
            .blur();

        // Wait for form reload request to complete
        cy.wait('@formReload');

        // Re-select if necessary (e.g., if dropdown resets after reload)
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlBeneficialOwner', { timeout: 10000 })
            .should('not.be.disabled')
            .select(dataTDAccOpen.ben_owner, { force: true });


        cy.wait(1000); // if needed

        // Wait until dropdown becomes enabled
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTranspRisk', { timeout: 10000 })
            .should('not.be.disabled')
            .select(dataTDAccOpen.risk, { force: true })  // in case it's slightly hidden
            .blur();

        // Wait for form reload request to complete
        cy.wait('@formReload');

        // Re-select if necessary (e.g., if dropdown resets after reload)
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTranspRisk', { timeout: 10000 })
            .should('not.be.disabled')
            .select(dataTDAccOpen.risk, { force: true });



        cy.get('#ctl00_contPlcHdrMasterHolder_LschkPrincipalToTrfAcc')
            .then(($checkbox) => {
                if ($checkbox.is(':checked')) {
                    cy.log('❌ Checkbox is not Unchecked');
                    cy.get('#ctl00_contPlcHdrMasterHolder_LschkPrincipalToTrfAcc').click();
                }
            });
        cy.get('#ctl00_contPlcHdrMasterHolder_LschkIntToTrfAcc')
            .then(($checkbox) => {
                if ($checkbox.is(':checked')) {
                    cy.log('❌ Checkbox is not Unchecked');
                    cy.get('#ctl00_contPlcHdrMasterHolder_LschkIntToTrfAcc').click();
                }
            });

        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccOpeningPrp').invoke('val').then((text) => {
        //     if (!text) {
        //         // If empty, type the purpose and click OK
        //         cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccOpeningPrp').should('not.be.disabled').type(dataTDAccOpen.purpose);
        //         cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();

        //     } else {
        //         cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
        //     }
        // });


        //
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccOpeningPrp')
            // .should('exist')
            // .should('be.visible')
            // .should('not.be.disabled')
            .invoke('val')
            .then((text) => {
                if (!text) {
                    // Wait until the input is stable before typing
                    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccOpeningPrp')
                        .type(dataTDAccOpen.purpose); // add delay if typing too fast triggers DOM change
                    cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click({ force: true }); // use force if needed
                }

                cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click({ force: true }); // use force if needed
            });


        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccOpeningPrp')
        //     .clear() // optional, for clean typing
        //     .type(dataTDAccOpen.purpose); // add delay if typing too fast triggers DOM change
        // cy.wait(3000);
        // cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click({ force: true }); // use force if needed

        //






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

export default TimeDepositAccOpen;
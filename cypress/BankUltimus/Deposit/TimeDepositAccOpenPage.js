class TimeDepositAccOpen {

    TDAccOpen() {

        const dataTDAccOpen = Cypress.env('excelData');
        cy.intercept('POST', '/BankUltimus/src/BankUltimus.UI/BU_Deposit/DepositTimeACUI.aspx?FUNCTION_ID=0201009&FAST_PATH=2002').as('formReload');


        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNoPrdId', { timeout: 10000 }) // Wait up to 10 seconds
            .should('be.visible')
            .and('not.be.disabled')
            .clear()
            .type(dataTDAccOpen.prod_ID + '{enter}');

        //cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNoPrdId').type(dataTDAccOpen.ProductID);
        //cy.wait(3000);

        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustId', { timeout: 10000 }) // Wait up to 10 seconds
        //     .should('be.visible')
        //     .and('not.be.disabled')
        //     .clear()
        //     .type(dataTDAccOpen.CustomerID + '{enter}');
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustId').clear();
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustId').focus().type(dataTDAccOpen.CustomerID);dataTDAccOpen.Address_Type
        // cy.wait(3000);

        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustId').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustId').focus();
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustId').should('be.visible')
            .and('not.be.disabled').clear().type(dataTDAccOpen.cus_ID + '{enter}');

        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusMailAddrType').focus().blur();
        // //cy.wait(3000);
        // cy.wait('@formReload');       //intercept Post Request call
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusMailAddrType').focus().select('Permanent Address', { force: true });
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusMailAddrType', { timeout: 10000 })
            .should('be.visible')
            .should('not.be.disabled')
            .should('contain', dataTDAccOpen.address_type)
            .select(dataTDAccOpen.address_type, { force: true });


        cy.wait(3000);
        //cy.get('#ctl00_contPlcHdrMasterHolder_LstxtTOT_TERM_NO').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtTOT_TERM_NO').clear().type(dataTDAccOpen.term_No + '{enter}');

        cy.wait(3000);
        //cy.get('#ctl00_contPlcHdrMasterHolder_LstxtPRINCIPAL_AMT').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtPRINCIPAL_AMT').clear().type(dataTDAccOpen.principal_AMT + '{enter}');

        cy.wait(3000);

        //cy.get('#ctl00_contPlcHdrMasterHolder_LstxtINSTRUMENT_NO').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtINSTRUMENT_NO').clear().type(dataTDAccOpen.instrument_No);

        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccOpeningPrp', { timeout: 10000 })
            .should('exist')
            .should('not.be.disabled')
            .type(dataTDAccOpen.purpose);

        // cy.wait(3000);
        // // Check if textbox is empty
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccOpeningPrp').invoke('val').then((text) => {
        //     if (!text) {
        //         // If empty, type the purpose and click OK
        //         cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccOpeningPrp').type(dataTDAccOpen.Purpose);
        //     }
        // });
        // cy.wait(3000);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccOpeningPrp').clear().type(dataTDAccOpen.Purpose);
        cy.get('#ctl00_contPlcHdrMasterHolder_LschkPrincipalToTrfAcc').click();
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LschkIntToTrfAcc').click();

        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlBeneficialOwner')
        //     .should('exist') // wait for element to appear
        //     .then(($select) => {
        //         cy.wrap($select).select(dataTDAccOpen.Ben_Owner, { force: true }); // replace with actual option text or value
        //     });



        // Intercept form reload request before clicking/selecting anything (if applicable)
        //cy.intercept('POST', '**/ServiceHelper.asmx/**').as('formReload');

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



        // cy.wait(3000);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlBeneficialOwner').select(dataTDAccOpen.Ben_Owner).blur();
        // cy.wait('@formReload');       //intercept Post Request call   
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlBeneficialOwner').select(dataTDAccOpen.Ben_Owner);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlBeneficialOwner', { timeout: 10000 })
        //     .should('be.visible')
        //     .should('not.be.disabled')
        //     .should('contain', dataTDAccOpen.Ben_Owner)
        //     .select(dataTDAccOpen.Ben_Owner, { force: true });
        // cy.wait(3000);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTranspRisk').select(dataTDAccOpen.Risk).blur();
        // cy.wait('@formReload');       //intercept Post Request call   
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTranspRisk').select(dataTDAccOpen.Risk);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTranspRisk', { timeout: 10000 })
        //     .should('be.visible')
        //     .should('not.be.disabled')
        //     .should('contain', dataTDAccOpen.Risk)
        //     .select(dataTDAccOpen.Risk, { force: true });


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



        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtINSTRUMENT_NO').invoke('val').then((text) => {
        //     if (!text) {
        //         // If empty, type the purpose and click OK
        //         cy.get('#ctl00_contPlcHdrMasterHolder_LstxtINSTRUMENT_NO').type(dataTDAccOpen.Instrument_no);
        //     }
        // });
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccOpeningPrp').invoke('val').then((text) => {
        //     if (!text) {
        //         // If empty, type the purpose and click OK
        //         cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccOpeningPrp').type(dataTDAccOpen.Purpose);

        //     }
        // });
        // cy.wait(3000);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LschkPrincipalToTrfAcc').click();

        // cy.get('#ctl00_contPlcHdrMasterHolder_LschkPrincipalToTrfAcc').then(($checkbox) => {
        //     if ($checkbox.is(':checked')) {
        //         cy.wrap($checkbox).uncheck({ force: true });
        //         cy.log('Checkbox was checked — now unchecked');
        //         cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
        //     }
        //     // else {
        //     //     cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
        //     // }
        // });

        // Wait for popup to be visible and contain expected text 

        // cy.get('.ui-button-text') // Replace with actual popup selector
        //     .invoke('text')
        //     .then((popupText) => {
        //         const match = popupText.match(/Account No\s*:\s*(\d+)/);

        //         if (!match) {
        //             throw new Error("❌ Account Number not found in popup text.");
        //         }

        //         const accountNumber = match[1];
        //         expect(accountNumber).to.not.be.null;
        //         cy.log('✅ Extracted Account No: ' + accountNumber);

        //     });

        cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
        cy.wait(3000);
        cy.get('.ui-button-text').click();


    }
}

export default TimeDepositAccOpen;
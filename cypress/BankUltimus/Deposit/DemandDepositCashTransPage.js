class DemandDepositCashTrans {

    DDCashTrans() {


        const dataDDCashTrans = Cypress.env('excelData');
        cy.intercept('POST', 'http://192.168.10.199/BankUltimus/BU_Trans/CorCashTransDDUI.aspx?FUNCTION_ID=0125001&FAST_PATH=7001').as('formReload');



        //------use this block for dynamically use acc no. 
        cy.then(() => {
            const accountNumber = Cypress.env('accountNumber');
            cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNo')
                .clear() // Optional: clear input first
                .type(accountNumber + '{enter}');

        }); 
        //#ctl00_contPlcHdrMasterHolder_LstxtAccNo
        //cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNo').clear().type(dataDDCashTrans.AccNo + '{enter}');

        cy.wait(3000);

        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlDrCr').focus().blur();
        cy.wait('@formReload');       //intercept Post Request call
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlDrCr').focus().select(dataDDCashTrans.DrCr);

         cy.wait(3000);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlDrCr').focus().blur();
        // cy.wait('@formReload');
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxTransAmtCcy').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxTransAmtCcy').focus().type(dataDDCashTrans.Amount,'{enter}');
        // cy.wait(3000);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxTransAmtCcy').focus().type(dataDDCashTrans.Amount);
        //cy.get('#ctl00_contPlcHdrMasterHolder_LstxTransAmtLcy').click();

        cy.wait(3000);

        //cy.get('#ctl00_contPlcHdrMasterHolder_LstxtNarration').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtNarration').type(dataDDCashTrans.Narration);

        cy.get('#ctl00_contPlcHdrMasterHolder_lsddlDepositorBeareType').focus().blur();
        cy.wait('@formReload');       //intercept Post Request call
        cy.get('#ctl00_contPlcHdrMasterHolder_lsddlDepositorBeareType').focus().select(dataDDCashTrans.BeareType);

        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();


        cy.get('#ui-dialog-title-dialog', { timeout: 10000 })  // adjust selector if needed
            .should('be.visible');
        cy.get('#dialog') // or the actual selector that targets the text container
            .should('contain.text', 'Batch No')
            .invoke('text')
            .then((popupText) => {
                cy.log(`Popup Text: "${popupText}"`);

                const match = popupText.match(/Batch\s*No\s*:\s*(\d+)/i);

                if (!match) {
                    throw new Error("❌ Batch No. not found in popup text.");
                }

                const batchNo = match[1];
                Cypress.env('batchNo', batchNo);
                cy.log(`✅ Batch No: ${batchNo}`);
            });



        cy.wait(3000);
        cy.get('.ui-button-text').click();
    }
}

export default DemandDepositCashTrans;
class TimeDepositTrfTrans {

    TDtrfTrans() {


        const dataTDtrfTrans = Cypress.env('excelData');
        cy.intercept('POST', '/http://192.168.20.127/BankUltimus/src/BankUltimus.UI/BU_Trans/CorTRFTransTDUI.aspx?FUNCTION_ID=0125010&FAST_PATH=7033').as('formReload');

        //------use this block for dynamically use acc no. 
        cy.then(() => {
            const accountNumber = Cypress.env('accountNumber');
            cy.log('Account Number Found: ' + accountNumber);
            cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNo')
                .clear() // Optional: clear input first
                .type(accountNumber).type('{enter}');

        }); 

        
    //    // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNo')
    //     // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNo').clear().type(dataDDtrfTrans.AccNo + '{enter}');

    //     //cy.wait(3000);
         
    //     // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlDrCr').focus().select(dataDDtrfTrans.DrCr).blur();
    //     // cy.wait('@formReload');       //intercept Post Request call
    //     // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlDrCr').focus().select(dataDDtrfTrans.DrCr);
       
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxTransAmtCcy').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxTransAmtCcy').type(dataTDtrfTrans.amount).type('{enter}');
 

        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtNarration').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtNarration').type(dataTDtrfTrans.narration).type('{enter}');

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

export default TimeDepositTrfTrans;
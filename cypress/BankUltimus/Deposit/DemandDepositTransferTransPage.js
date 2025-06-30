class DemandDepositTrfTrans {

    DDtrfTrans() {


        const dataDDtrfTrans = Cypress.env('excelData');
        cy.intercept('POST', '/BankUltimus/src/BankUltimus.UI/BU_Trans/CorTrfTransDDUI.aspx?FUNCTION_ID=0125008&FAST_PATH=7031').as('formReload');



        //------use this block for dynamically use acc no. 
        cy.then(() => {
            const accountNumber = Cypress.env('accountNumber');
            cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNo')
                .clear() // Optional: clear input first
                .type(accountNumber + '{enter}');

        }); 

        
       // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNo')
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNo').clear().type(dataDDtrfTrans.AccNo + '{enter}');

        //cy.wait(3000);
         
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlDrCr').focus().select(dataDDtrfTrans.DrCr).blur();
        // cy.wait('@formReload');       //intercept Post Request call
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlDrCr').focus().select(dataDDtrfTrans.DrCr);
       
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxTransAmtCcy').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxTransAmtCcy').type(dataDDtrfTrans.amount);

        //  cy.wait(3000);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxTransAmtCcy').clear();
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxTransAmtCcy').type(dataDDtrfTrans.Amount);


        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtNarration').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtNarration').type(dataDDtrfTrans.narration);

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

export default DemandDepositTrfTrans;
class TransactionAuthorizationPage {

    TransAuth() {

        //const dataTransAuth = Cypress.env('excelData');
        cy.intercept('POST', '/BankUltimus/src/BankUltimus.UI/BU_Trans/CorTransAuthorizationUI.aspx?FUNCTION_ID=0127001&FAST_PATH=8001').as('formReload');

        //Select Transaction Mode-Transfer
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTransMode').select('Transfer').blur();
        cy.wait('@formReload');       //intercept Post Request call
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTransMode').focus().select('Transfer', { force: true });

        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTransMode')
        //     .invoke('val')
        //     .then((text) => {
        //         if (text === 'Cash') {
        //             cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTransMode').select('Transfer').blur();
        //             cy.wait('@formReload');       //intercept Post Request call
        //             cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTransMode').focus().select('Transfer', { force: true });

        //         } 
        //     });
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTransMode').select(dataTransAuth.trans_mode).blur();
        // cy.wait('@formReload');       //intercept Post Request call
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTransMode').focus().select(dataTransAuth.trans_mode, { force: true });

        //cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_btnFind').click(); //Click on Find btn for search Transaction
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_gvUTQ > tbody > tr') // Select all rows
            .each(($row) => {
                const batchNoToSelect = Cypress.env('batchNo');
                const cells = $row.find('td');
                const batchNo = Cypress.$(cells[1]).text().trim(); // 2nd column = Batch No.

                if (batchNo === batchNoToSelect) {
                    cy.wrap(cells[0]).contains('Select').click(); // 1st column = Select link
                }
            });
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();//click Authorization Btn


        cy.wait(3000);
        cy.get(':nth-child(2) > .ui-button-text').click();//click Authorization confirmation btn

        cy.wait(3000);
        cy.get('.ui-button-text').click();   //click auth complete confirmation btn 


    }
}

export default TransactionAuthorizationPage;
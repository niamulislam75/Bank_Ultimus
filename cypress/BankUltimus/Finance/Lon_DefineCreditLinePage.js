class Lon_DefineCreditLine {

    DefineCreditLine() {

        const dataDefineCreditLine = Cypress.env('excelData');
        cy.intercept('POST', '/BankUltimus/src/BankUltimus.UI/BU_Finance/corLonCreditAndInvestmentLineUI.aspx?FUNCTION_ID=0006009&FAST_PATH=1264').as('formReload');

        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCorLonCreditName').type(dataDefineCreditLine.name);

        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlBranchCurrency').select(dataDefineCreditLine.currency);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProductGroup').select(dataDefineCreditLine.Prd_group);
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlFundedFacility').select(dataDefineCreditLine.facility);
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlApprovalLevel').select(dataDefineCreditLine.app_level);
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlApprovalAuthority').select(dataDefineCreditLine.app_authority);
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_BtnApprovalAuthority').click();
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_gvFinDept_ctl02_Chk').click();
        cy.get('#ctl00_contPlcHdrMasterHolder_gvFinDept_ctl04_Chk').click();
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlNatureFacility').select(dataDefineCreditLine.nature_CIB);
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlNatureSector').select(dataDefineCreditLine.nature_CL);
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
        
        cy.get('.ui-dialog-content', { timeout: 10000 }) // Adjust selector if needed
            .should('be.visible')
            .invoke('text')
            .then((popupText) => {
                cy.log('Popup Text: ' + popupText);

                //const match = popupText.match(/Credit Line ID:\s*(\d+)/);
                const match = popupText.match(/ID:\s*(\d+)/);
                if (!match) {
                    throw new Error("❌ Credit Line ID not found in popup text.");
                }

                const creditLineId = match[1];
                expect(creditLineId).to.not.be.null;

                Cypress.env('creditLineId', creditLineId);
                cy.log('✅ Extracted Credit Line ID: ' + creditLineId);
            });


        cy.wait(3000);
        cy.get('.ui-button-text').click();




    }
}

export default Lon_DefineCreditLine;
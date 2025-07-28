class Lon_AccountOpen {

    LoanAccountOpenPage() {

        //cy.wait(3000);
        const dataLoanAccountOpenPage = Cypress.env('excelData');
        cy.intercept('POST', 'http://192.168.20.127/BankUltimus/src/BankUltimus.UI/BU_Finance/CorLonCommitRegUI.aspx?FUNCTION_ID=0110001&FAST_PATH=3131').as('formReload');
        
        
        //------use this block for dynamically use acc no. 
        cy.then(() => {
            const proposalId = Cypress.env('proposalId');
            cy.get('#ctl00_contPlcHdrMasterHolder_LstxtProposalId')
                .clear() // Optional: clear input first
                .type(proposalId).type('{enter}');

        }); 
     
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtRemarks').type(dataCommitmentPortfolioRegister.remarks).type('{enter}');
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
        
        cy.wait(3000);
       

        cy.wait(3000);
        cy.get('.ui-button-text').click();

    }
}

export default Lon_AccountOpen;
class Lon_FinancingApprovalPage {

    FinancingApproval() {

        //cy.wait(3000);
        const dataFinancingApproval = Cypress.env('excelData');
        cy.intercept('POST', 'http://192.168.20.127/BankUltimus/src/BankUltimus.UI/BU_Finance/CorLonApprovalUI.aspx?FUNCTION_ID=0108002&FAST_PATH=3121').as('formReload');
        
        
        //------use this block for dynamically use acc no. 
        cy.then(() => {
            const proposalId = Cypress.env('proposalId');
            cy.get('#ctl00_contPlcHdrMasterHolder_LstxtProposalId')
                .clear() // Optional: clear input first
                .type(proposalId).type('{enter}');

        }); 
     
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlApprovalStatus').select(dataFinancingApproval.approval_Status).blur();
        //cy.wait(3000);
        cy.wait('@formReload');       //intercept Post Request call
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlApprovalStatus').focus().select(dataFinancingApproval.approval_Status, { force: true });
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtRemarks').type(dataFinancingApproval.remarks).type('{enter}');
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtApprovalRefNoOB').type(dataFinancingApproval.app_Ref_No).type('{enter}');
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
        
        cy.wait(3000);
       

        cy.wait(3000);
        cy.get('.ui-button-text').click();

    }
}

export default Lon_FinancingApprovalPage;
class Lon_FinancialProposalRegister {

    FinancialProposalRegister() {

        //cy.wait(3000);
        const dataFinancialProposalRegister = Cypress.env('excelData');
        cy.intercept('POST', '/BankUltimus/src/BankUltimus.UI/BU_Finance/CorLonProposalNewUI.aspx?FUNCTION_ID=0108001&FAST_PATH=3111').as('formReload');
        //cy.intercept('POST', '/BankUltimus/src/BankUltimus.UI/BU_Finance/CorLonProposalNewUI.aspx?FUNCTION_ID=0108001&FAST_PATH=3111').as('formReload2');

        //cy.get('#ctl00_contPlcHdrMasterHolder_LstxtForwardingRefNo').type(dataFinancialProposalRegister.for_ref_no).blur();

        //cy.wait('@formReload');
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtForwardingRefNo').focus().type(dataFinancialProposalRegister.for_ref_no).type('{enter}');

        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCreditDept').select(dataFinancialProposalRegister.fin_Dept);
        cy.wait(3000);
        //cy.get('#')
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustomerID').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustomerID').focus().type(dataFinancialProposalRegister.cus_ID).type('{enter}');
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustomerID').focus().type('{enter}');
        //cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlMailingAddressType').select(dataFinancialProposalRegister.address_type).blur();
        cy.wait(3000);
        cy.wait('@formReload');       //intercept Post Request call
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlMailingAddressType').focus().select(dataFinancialProposalRegister.address_type, { force: true });
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtEconomicPurposeCodeSBS').type(dataFinancialProposalRegister.eco_sbs).type('{enter}');
        //cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtSecurityCode').type(dataFinancialProposalRegister.sec_code);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlLendingPurpose').focus().select(dataFinancialProposalRegister.credit_Purpose, { force: true });
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlLendingConcentration').focus().select(dataFinancialProposalRegister.credit_Concen, { force: true });
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlExportSector').focus().select(dataFinancialProposalRegister.sector, { force: true });
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlExposureType').focus().select(dataFinancialProposalRegister.expo_Type, { force: true });


        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProduct')
            .contains('option', 'CASH CREDIT') // Partial text match
            .then($option => {
                const val = $option.attr('value');
                cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProduct')
                    .select(val, { force: true });
            });


        //cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProduct').focus().select('608 - CASH CREDIT - HYPO', { force: true });
        // cy.log('Product Value:', someVariable);--dataFinancialProposalRegister.product

        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlApprovalAuthority')
            .contains('option', 'Branch Manager') // Partial text match
            .then($option => {
                const val = $option.attr('value');
                cy.get('#ctl00_contPlcHdrMasterHolder_LsddlApprovalAuthority')
                    .select(val, { force: true });
            });

        //cy.get('#ctl00_contPlcHdrMasterHolder_LsddlApprovalAuthority').focus().select(dataFinancialProposalRegister.approval_Auth, { force: true });
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtLimitAmount').type(dataFinancialProposalRegister.limit_Amount).type('{enter}');
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtLimitValidity').type(dataFinancialProposalRegister.limit_Validity).type('{enter}');
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtLimitValidity').type(dataFinancialProposalRegister.limit_Validity).type('{enter}');
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlLimitValidity').focus().select(dataFinancialProposalRegister.limit_Validity2, { force: true });
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtACValidity').type(dataFinancialProposalRegister.duration).type('{enter}');
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlACValidity').focus().select(dataFinancialProposalRegister.duration2, { force: true });
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlEnvironCategory').focus().select(dataFinancialProposalRegister.env_Category, { force: true });
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlRiskCategory').focus().select(dataFinancialProposalRegister.risk_Category, { force: true });
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlInterestRateType').focus().select(dataFinancialProposalRegister.int_Rate, { force: true });
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtDepositNote').type(dataFinancialProposalRegister.remarks).type('{enter}');
        // Check if textbox is empty

        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtSecurityCode').type(dataFinancialProposalRegister.sec_code).type('{enter}');
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtSecurityCode').invoke('val').then((text) => {
            if (!text) {
                // If empty, type the purpose and click OK
                cy.get('#ctl00_contPlcHdrMasterHolder_LstxtSecurityCode').type(dataFinancialProposalRegister.sec_code).type('{enter}');

                cy.wait(3000);
                cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
                cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
            } else {
                // If not empty, directly click OK
                cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
            }
        });


        cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();

        cy.get('.ui-state-focus > .ui-button-text').click();

        //cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
        cy.get('.ui-dialog-content', { timeout: 10000 })  // বা popup এর selector যেটা ঠিক
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                const match = text.match(/ID:\s*(\d+)/);

                if (match) {
                    const proposalId = match[1];
                    expect(proposalId).to.not.be.null;
                    Cypress.env('proposalId', proposalId);
                    cy.log('Proposal ID:', proposalId);                   

                } else {
                    throw new Error('❌ Proposal ID not found!');
                }
            });


        cy.wait(3000);
        cy.get('.ui-button-text').click();

    }
}

export default Lon_FinancialProposalRegister;
class CustomerInquiry {

  CustInquiry() {

    const custInquiry = Cypress.env('excelData');
    const customerID = Cypress.env('customerID');

    //cy.visit(custInquiry.HomePageUrl);
    cy.get('#txtMenuSearch').type(custInquiry.FastPath).type('{enter}');
    cy.get(2000);

    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustomerId').type(customerID).type('{enter}');
    //cy.wait(3000);
    
//comment


  }
}

export default CustomerInquiry;
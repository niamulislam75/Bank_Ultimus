class CIFOrgInfo {

  cifOrgInfo() {

    const dataCIFOrgInfo = Cypress.env('excelData');   //define object

    cy.intercept('POST', '/BankUltimus/src/BankUltimus.UI/BU_Service/ServiceHelper.asmx/MenuEnable').as('formReload1');
    cy.intercept('POST', '/BankUltimus/src/BankUltimus.UI/BU_Service/ServiceHelper.asmx/CreateMenu').as('formReload2');


    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCustoerCategory').select('Organization Private Sector');
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtName').type(dataCIFOrgInfo.OrgTradeName);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtIDCBORG').select('Medium Enterprise - Service Concern  (21)');
    //Go to Organization Details Tab
    cy.get('#ctl00_contPlcHdrMasterHolder_TabCIFOrgDtlInfo').click();

    //Organization Detail Tab
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtNet').type(dataCIFOrgInfo.NetWorth);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAnnualTurnover').type(dataCIFOrgInfo.AnnualTurnover);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtIncorporationNo').type(dataCIFOrgInfo.IncorporationNo);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtDOE').type(dataCIFOrgInfo.DateOfIncorporation);


    //Go to Owner/Shareholder Info Tab
    cy.get('#ctl00_contPlcHdrMasterHolder_TabOwnrShrInfo').focus();
    cy.get('#ctl00_contPlcHdrMasterHolder_TabOwnrShrInfo').click();


    //Owner/Shareholder Info Tab

    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtOWNER_CUST_ID').focus().type(dataCIFOrgInfo.OwnerCustId).type('{enter}');
    cy.wait(2000);
    cy.get('#ctl00_contPlcHdrMasterHolder_lsddlOrganizationType').focus();
    cy.get('#ctl00_contPlcHdrMasterHolder_lsddlOrganizationType').select(dataCIFOrgInfo.OrgType, { force: true });
    
    cy.wait(2000);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtShare').type(dataCIFOrgInfo.OwnersShare);
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlDesignationCode').focus();
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlDesignationCode').select('Proprietor', { force: true });

    cy.get('#ctl00_contPlcHdrMasterHolder_btnOwnerAdd').focus();
    cy.get('#ctl00_contPlcHdrMasterHolder_btnOwnerAdd').click();
    cy.wait(2000);
    

    //Go to Address Tab
    cy.get('#ctl00_contPlcHdrMasterHolder_TabCIFAddress').click();

    //Address Tab
    

    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusAddrType').select(dataCIFOrgInfo.AddressType, { force: true });
    cy.wait('@formReload1');
    cy.wait('@formReload2');
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCusAddress1').type(dataCIFOrgInfo.Address, { force: true });
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCusAddress1').type(dataCIFOrgInfo.Address, { force: true });
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCusTown').type(dataCIFOrgInfo.CityTownArea, { force: true });
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCusPostCode').type(dataCIFOrgInfo.ZIP, { force: true });
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusCountry').select(dataCIFOrgInfo.Country, { force: true });
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusState').select(dataCIFOrgInfo.Division, { force: true });
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusDistrict').select(dataCIFOrgInfo.District, { force: true });
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusThana').select(dataCIFOrgInfo.PS, { force: true });
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusPostOffice').select(dataCIFOrgInfo.PostOffice, { force: true });
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCusMobile').type(dataCIFOrgInfo.Mobile, { force: true });
    //cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCusPhone').type(dataCIFOrgInfo.LandPhone, { force: true });
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCPname').type(dataCIFOrgInfo.ContPersonName, { force: true });
    cy.get('#ctl00_contPlcHdrMasterHolder_LsChkAddressCopy').check();
    cy.get('#ctl00_contPlcHdrMasterHolder_btnAddressAdd').focus().click();


    //Go to Documents Tab
    cy.get('#ctl00_contPlcHdrMasterHolder_TabMstrCharge').focus().click();

    //Documents Tab
    cy.get('#ctl00_contPlcHdrMasterHolder_gvDocList_ctl01_Chk1').focus().check();

    //Go to KYC Page
    cy.get('#ctl00_contPlcHdrMasterHolder_TabOrgKYC').focus().click();
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCustomerConcentration').select(dataCIFOrgInfo.CustConcentration, { force: true });

    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtSectorIDSBS').dblclick({ force: true })
    cy.wait(2000);

    cy.get('#object').then(($obj) => {
      const doc = $obj[0].contentWindow.document;
      const body = doc.body;

      cy.wrap(doc)
        .find('#btnFind')
        .click();

      cy.wait(2000);

      cy.wrap(body)
        .find('table#ls_grid')
        .contains('td', 'IT-BASED ACTIVITIES')
        .then(($cell) => {
          // Use jQuery to get the row from the cell
          const $row = Cypress.$($cell).closest('tr'); // Use Cypress.$() to keep it chainable
          cy.wrap($row).scrollIntoView().dblclick({ force: true });
        });

    });


    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlOWNERSHIP_TYPE_ID_CTR').select(dataCIFOrgInfo.NatureOfOwnershipCTR, { force: true });
    cy.wait(2000);
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlOWNERSHIP_TYPE_ID_CIB').focus();
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlOWNERSHIP_TYPE_ID_CIB').select(dataCIFOrgInfo.NatureOfOwnershipCIB, { force: true });
    cy.wait(2000);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtNOB').type(dataCIFOrgInfo.NatureOfBusiness, { force: true });
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtSourceOfFund_Org').type(dataCIFOrgInfo.SourceVerified, { force: true });
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlKYCProfessionORG').select(dataCIFOrgInfo.KYC_Profession, { force: true });
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlKYCOpenNatureORG').focus();
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlKYCOpenNatureORG').select(dataCIFOrgInfo.KYC_Open_Nature, { force: true });
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlKYCOpenNatureORG').select(dataCIFOrgInfo.KYC_Open_Nature, { force: true });
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlAddrVerified').select('Yes', {force:true});
    cy.wait(2000);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtHowVarified').type('Test');


    cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click({ force: true });

    cy.wait(2000);
    cy.get('.ui-state-focus').click();

    cy.get('#dialog')
      .invoke('text')
      .then((text) => {
        const cleanedText = text.trim();
        const customerID = cleanedText.slice(-10);
        cy.log('Customer ID: ' + customerID);

        Cypress.env('customerID', customerID);
      });


    cy.wait(2000);
    cy.get('.ui-button').click();



    

  }
}

export default CIFOrgInfo;
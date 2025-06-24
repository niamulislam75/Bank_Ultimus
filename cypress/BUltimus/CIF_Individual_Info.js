
class CIFInfo {

  cifInfo() {

    const dataCIFInfo = Cypress.env('excelData');   //define object


    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtIndividualSalutation').type(dataCIFInfo.Title);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtFirstName').type(dataCIFInfo.FirstName);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtMiddleName').type(dataCIFInfo.MiddleName);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtLastName').type(dataCIFInfo.LastName);

    //Basic Info Starts
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlNationality').select(dataCIFInfo.Nationality);    //select Option from dropdown

    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtNationalID').type(dataCIFInfo.NationalID);

    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtApointmentDate').clear();
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtApointmentDate').type(dataCIFInfo.DOB).type('{enter}');

    //cy.get('.ui-button-text').click();

    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtSmartCardNo').clear();
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtSmartCardNo').type(dataCIFInfo.SmartCardNo).type('{enter}');
    //cy.get('.ui-button-text').click();

    // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtPassport').clear();
    // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtPassport').type(dataCIFInfo.PassportNo).type('{enter}');

    //   cy.get('#ctl00_contPlcHdrMasterHolder_LstxtPassportIssueDt').clear();
    //   cy.get('#ctl00_contPlcHdrMasterHolder_LstxtPassportIssueDt').type(dataCIFInfo.PassPortIssDate).type('{enter}');

    //   cy.get('#ctl00_contPlcHdrMasterHolder_LstxtPassportExpireDt').clear();
    //   cy.get('#ctl00_contPlcHdrMasterHolder_LstxtPassportExpireDt').type(dataCIFInfo.PassPortExpDate).type('{enter}');

    //   cy.get('#ctl00_contPlcHdrMasterHolder_LsddlIssueCountry').select(dataCIFInfo.PassPortIssCountry);

    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlPlaceOfBirthOfCustomer').select(dataCIFInfo.PlaceOfBirth);


    //Basic Info Ends

    cy.get('#ctl00_contPlcHdrMasterHolder_TabCIFPersonalInfo').click();  //Go to Personal Details Tab


    //Personal Details Tab Starts

    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlGender').select(dataCIFInfo.Gender);
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlOccupation').select(dataCIFInfo.Occupation);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtMonthlyIncome').focus();
    cy.wait(3000);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtMonthlyIncome').type('70000');
    //cy.get('#ctl00_contPlcHdrMasterHolder_LstxtMonthlyIncome').type(dataCIFInfo.MonthlyIncome).type('{enter}');

    // cy.intercept('POST', '**/MenuEnable').as('menuEnable');
    // cy.intercept('POST', '**/CreateMenu').as('createMenu');

    // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtMonthlyIncome').type(dataCIFInfo.MonthlyIncome);

    // cy.wait('@menuEnable');
    // cy.wait('@createMenu');
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlResidenceloc').select(dataCIFInfo.ResidenceLoc);

    //Personal Details Tab Ends

    cy.get('#ctl00_contPlcHdrMasterHolder_TabCIFIntroducer').click();   //Go to Introducer Tab

    //Introducer Tab Starts

    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlIntroducerType').select(dataCIFInfo.IntroducerType);

    //Introducer Tab Ends

    cy.get('#ctl00_contPlcHdrMasterHolder_TabCIFAddress').click();    //Go to Address Tab

    //Address Tab Starts

    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusAddrType').select(dataCIFInfo.AddressType);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCusAddress1').type(dataCIFInfo.Address);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCusPhone').type(dataCIFInfo.LandPhone);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCusMobile').type(dataCIFInfo.Mobile);

    // cy.intercept('POST', '/BankUltimus/BU_Core/corCusProfileIndividualUI.aspx?FUNCTION_ID=0101001&FAST_PATH=1501').as('formReload');
    // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCusTown').type(dataCIFInfo.CityTownArea);//.blur();
    // //cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCusTown').blur();
    // cy.wait('@formReload');       //intercept Post Request call

    // Now safe to proceed
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCusTown').focus();
    cy.wait(2000);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCusTown').type(dataCIFInfo.CityTownArea);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCusTown').blur();

    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCusPostCode').focus();
    cy.wait(2000);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCusPostCode').type(dataCIFInfo.ZIP_PostalCode).type('{enter}');
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusCountry').select(dataCIFInfo.Country);
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusState').select(dataCIFInfo.Division_State);
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusDistrict').select(dataCIFInfo.District);
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusThana').select(dataCIFInfo.PS);
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusPostOffice').select(dataCIFInfo.PO);


    cy.get('#ctl00_contPlcHdrMasterHolder_LsChkAddressCopy').check();
    cy.wait(2000);   //checkbox check of Resident Address is same as Permanent Address
    cy.get('#ctl00_contPlcHdrMasterHolder_btnAddressAdd').click();    //Add Address
    cy.wait(3000);

    //Address Tab Ends

    cy.get('#ctl00_contPlcHdrMasterHolder_TabCIFWorks').click();    //Go to works Page
    //cy.get('.ui-button').click();
    cy.get('#ctl00_contPlcHdrMasterHolder_TabCIFFamily').click();   //Go to Family Page

    cy.wait(3000);
    //Family Page Starts 
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtPname').focus();
    cy.wait(2000);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtPname').type(dataCIFInfo.FName);

    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtMName').focus();
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtMName').type(dataCIFInfo.MName);
    // Family page ends

    cy.get('#ctl00_contPlcHdrMasterHolder_TabCIFDokument').click();   //Go to documents Page

    //Document Page Starts
    cy.get('#ctl00_contPlcHdrMasterHolder_gvDocList_ctl01_Chk1').check();
    //Document Page ends

    cy.get('#ctl00_contPlcHdrMasterHolder_TabCIFKYC').click();    //Go to KYC Page

    //Go to KYC Page 
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCustomerConcentration').select(dataCIFInfo.CustConcentration);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtSectorIDSBS').dblclick({ force: true })
    cy.wait(6000);

    cy.get('#object').then(($obj) => {
      //const doc = $obj[0].contentDocument || $obj[0].contentWindow.document;
      const doc = $obj[0].contentWindow.document;
      const wrappedDoc = cy.wrap(doc);

      cy.wrap(doc)
        .find('#btnFind')
        .click();

      cy.wrap(doc)
        .find('div.FindUIDiv div.gridBorder div:nth-child(2) table:nth-child(1) tbody:nth-child(1) tr:nth-child(2) > td:nth-child(2)')
        .scrollIntoView()
        .dblclick({ force: true });

    });

    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtNatureofBusinessandSourceofFound').type('test of CIF Individual Cypress');

    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtSourceOfFundDescription_indi').focus();
    cy.wait(2000);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtSourceOfFundDescription_indi').type('test of CIF Individual Cypress');
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlKYCProfession').select(dataCIFInfo.KYC_Prof);

    //cy.intercept('POST', '/BankUltimus/BU_Core/corCusProfileIndividualUI.aspx?FUNCTION_ID=0101001&FAST_PATH=1501').as('formReload');
    cy.intercept('POST', '/BankUltimus/src/BankUltimus.UI/BU_Service/ServiceHelper.asmx/MenuEnable').as('formReload1');
    cy.intercept('POST', '/BankUltimus/src/BankUltimus.UI/BU_Service/ServiceHelper.asmx/CreateMenu').as('formReload2');
    //cy.wait('@formReload');       //intercept Post Request call
    //cy.wait('@formReload1');
    //cy.wait('@formReload2');

    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlKYCOpenNature').should('not.be.disabled');
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlKYCOpenNature').select(dataCIFInfo.KYC_Open_Nature, '{force: true}');

    //cy.wait('@formReload');       //intercept Post Request call


    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlRelationshipRisk').should('not.be.disabled');
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlRelationshipRisk').select('No');
    //cy.wait('@formReload');       //intercept Post Request call
    cy.wait('@formReload1');
    cy.wait('@formReload2');       //intercept Post Request call
    //cy.wait(5000);
    //

    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlRelationshipRisk2').should('not.be.disabled');
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlRelationshipRisk2').select('No', '{force: true}');
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCustomerAddressVerified').focus();
    cy.wait(2000);
    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCustomerAddressVerified').select('Yes');
    cy.wait(2000);
    cy.get('#ctl00_contPlcHdrMasterHolder_LstxtHowVarified').type('Test Data');

    cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();


    cy.wait(8000);

    cy.get('#dialog')
      .invoke('text')
      .then((text) => {
        const cleanedText = text.trim();
        const customerID = cleanedText.slice(-10);
        cy.log('Customer ID: ' + customerID);

        Cypress.env('customerID', customerID);
      });



    cy.get('.ui-button').click();











  }
}

export default CIFInfo;
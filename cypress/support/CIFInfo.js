
class CIFInfo {
    
    cifInfo() {
        
        const dataCIFInfo = Cypress.env('excelData');

        
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtIndividualSalutation').type(dataCIFInfo.Title);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtFirstName').type(dataCIFInfo.FirstName);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtMiddleName').type(dataCIFInfo.MiddleName);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtLastName').type(dataCIFInfo.LastName);

        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlNationality').select(dataCIFInfo.Nationality);    //select Option from dropdown
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtNationalID').type(dataCIFInfo.NationalID);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtSmartCardNo').type(dataCIFInfo.SmartCardNo);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtPassport').type(dataCIFInfo.PassportNo);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtPassportIssueDt').type(dataCIFInfo.PassportIssDate);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtPassportExpireDt').type(dataCIFInfo.PassportExpDate);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlIssueCountry').select(dataCIFInfo.PassPortIssCountry);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtApointmentDate').type(dataCIFInfo.DOB);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlPlaceOfBirthOfCustomer').select(dataCIFInfo.POB);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtBirthRegNo').type(dataCIFInfo.BirthRegNo);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtBirthRegNoIssueDt').type(dataCIFInfo.BirthRegIssDate);
        

        
      }
    }
    
    export default CIFInfo;
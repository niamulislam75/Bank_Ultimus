import { faker } from '@faker-js/faker';

class DepositAccBeneficiary {

    beneficiary() {

        const dataBeneficiary = Cypress.env('excelData');
        cy.intercept('POST', 'http://192.168.20.127/BankUltimus/src/BankUltimus.UI/BU_Deposit/DepositAccBeneficiaryInfoUI.aspx?FUNCTION_ID=0201095&FAST_PATH=2005').as('formReload');
        cy.then(() => {
            const accountNumber = Cypress.env('accountNumber');
            cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNo')
                .clear() // Optional: clear input first
                .type(accountNumber + '{enter}');

        });

        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNo')
        //     .clear() // Optional: clear input first
        //     .type('6699121000042' + '{enter}');
        cy.wait(3000); // Wait for the form to reload after entering the account number
        const beneficiaryName = faker.person.fullName();
        const beneficiaryFather = faker.person.fullName();
        const beneficiaryMother = faker.person.fullName();
        //const NID = faker.number({ min: 1000000000, max: 9999999999 }).toString(); // Generates a random 10-digit number
        const randomRelation = faker.lorem.word();
        // const birthDate = rawDate.toLocaleDateString('en-GB'); // Formats as DD/MM/YYYY  
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustNameBeneficiary').type(beneficiaryName).type('{enter}');
        cy.wait(3000); // Wait for 3 seconds to ensure the form is ready
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtFatherNameBeneficiary').type(beneficiaryFather).type('{enter}');
        cy.wait(3000); // Wait for 3 seconds to ensure the form is ready
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtMotherNameBeneficiary').type(beneficiaryMother).type('{enter}');

        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlGenderBeneficiary').focus().select(dataBeneficiary.gender, { force: true });
        cy.wait(3000); // Wait for 3 seconds to ensure the form is ready
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtNationalIdBeneficiary').focus().type(dataBeneficiary.national_ID).type('{enter}');

       
        cy.wait(3000); // Wait for 3 seconds to ensure the form is ready
        //cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCitybeneficiary').type(databeneficiary.city).type('{enter}');

        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtRelationBeneficiary').type(randomRelation).type('{enter}');
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtBirthDateBeneficiary').type('01-01-2001').type('{enter}');
       
        //cy.wait(3000); // Wait for 3 seconds to ensure the form is ready
        cy.get('#ctl00_contPlcHdrMasterHolder_BtnBeneficiaryAdd').click(); // Click Add beneficiary button
         cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_BtnBeneficiaryAdd').click(); // Click Add beneficiary button
        cy.wait(3000); // Wait for 3 seconds to ensure the form is ready
        cy.wait('@formReload'); // Wait for the form to reload after Click Add beneficiary button
        // cy.wait(3000); // Wait for 3 seconds to ensure the form is ready
        cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();

        //cy.wait(3000);
        cy.get('.ui-button-text').click(); // Click OK button to close the dialog

    }
}

export default DepositAccBeneficiary;


import { faker } from '@faker-js/faker';

class DepositAccNominee {

    nominee() {

        const dataNominee = Cypress.env('excelData');
        cy.intercept('POST', '/http://192.168.20.127/BankUltimus/src/BankUltimus.UI/BU_Deposit/DepositAccNomineeInfoUI.aspx?FUNCTION_ID=0201063&FAST_PATH=2004').as('formReload');
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
        const nomineeName = faker.person.fullName();
        const nomineeFather = faker.person.fullName();
        const nomineeMother = faker.person.fullName();
        //const NID = faker.number({ min: 1000000000, max: 9999999999 }).toString(); // Generates a random 10-digit number
        const randomRelation = faker.lorem.word();
        // const birthDate = rawDate.toLocaleDateString('en-GB'); // Formats as DD/MM/YYYY 
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustNameNominee').type(nomineeName).type('{enter}');
        cy.wait(3000); // Wait for 3 seconds to ensure the form is ready
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtFatherName').type(nomineeFather).type('{enter}');
        cy.wait(3000); // Wait for 3 seconds to ensure the form is ready
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtMotherName').type(nomineeMother).type('{enter}');

        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlGender').focus().select(dataNominee.gender, { force: true });
        cy.wait(3000); // Wait for 3 seconds to ensure the form is ready
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtNationalId').focus().type(dataNominee.national_ID).type('{enter}');

        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlMailingAddressNominee').focus().select(dataNominee.mailing_Address, { force: true });
        cy.wait(3000); // Wait for 3 seconds to ensure the form is ready
        //cy.get('#ctl00_contPlcHdrMasterHolder_LsddlMailingAddressNominee').select(dataNominee.mailing_Address);
        // cy.wait('@formReload'); // Wait for the form to reload after entering the mailing_Address
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAddress1Nominee').type(dataNominee.address).type('{enter}');
        cy.wait(3000); // Wait for 3 seconds to ensure the form is ready
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlPAcountryNominee').select(dataNominee.country, { force: true });

        // cy.wait('@formReload'); // Wait for the form to reload after entering the division
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlDistrict').select(dataNominee.district, { force: true });
        // cy.wait('@formReload'); // Wait for the form to reload after entering the district
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCityNominee')
            .should('be.visible')
            .then(($el) => {
                $el.val('Dhaka');
                $el.trigger('change');
            });

        cy.wait(3000); // Wait for 3 seconds to ensure the form is ready
        //cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCityNominee').type(dataNominee.city).type('{enter}');

        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtRelationNominee').type(randomRelation).type('{enter}');
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtBirthDate').type('01-01-2000').type('{enter}');
        // cy.wait('@formReload'); // Wait for the form to reload after entering the birth_Date
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtShareNominee').type(dataNominee.share).type('{enter}');
        // cy.wait('@formReload'); // Wait for the form to reload after entering the share

        cy.wait(3000); // Wait for 3 seconds to ensure the form is ready
        cy.get('#ctl00_contPlcHdrMasterHolder_Button1').click();
        // cy.wait('@formReload'); // Wait for the form to reload after Click Add Nominee button
        // cy.wait(3000); // Wait for 3 seconds to ensure the form is ready
        cy.get('.ui-widget-overlay', { timeout: 10000 }).should('not.exist');
        cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();

        cy.wait(3000);
        cy.get('.ui-button-text').click(); // Click OK button to close the dialog

    }
}

export default DepositAccNominee;


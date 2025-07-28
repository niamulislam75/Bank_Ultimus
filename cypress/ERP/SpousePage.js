//import { faker } from '@faker-js/faker';
class SpousePage {

    Spouse() {
        cy.origin('http://192.168.10.36:4300', () => {
            //cy.visit('/hrm/employee-profile/employee-info');
            cy.log('Spouse Page');
            //spouseName
            cy.get('common-input-field[controlname="spouseName"] input')
                .should('be.visible')
                .clear()
                .type('Mukta Akter');
            //spouseOccupation
            cy.get('common-input-field[controlname="spouseOccupation"] input')
                .should('be.visible')
                .clear()
                .type('Housewife');
            //spouseGender//chk
            // cy.contains('Female')
            //     .prev('input[type="radio"]')
            //     .check({ force: true });
            cy.contains('Female')                     // Finds the text node
                .parent()                               // Gets the parent element
                .find('input[type="radio"]')           // Finds the radio input inside it
                .check();                              // Checks the radio

            //Blood Group//ddl use contains
            cy.get('.mat-mdc-select-placeholder').contains('Select').click();
            cy.get('mat-option').contains('O+').click();
            cy.get('.mat-mdc-select-value-text').should('contain.text', 'O+');
 
            //spouseMobile
            cy.get('common-input-field[controlname="spouseMobile"] input')
                .should('be.visible')
                .clear()
                .type('01723546985');
            //spouseEmail
            cy.get('common-input-field[controlname="spouseEmail"] input')
                .should('be.visible')
                .clear()
                .type('mukta@gmail.com');
            //Religion //ddl use contains
             cy.get('.mat-mdc-select-placeholder').contains('Select').click();
            cy.get('mat-option').contains('Islam').click();
            cy.get('.mat-mdc-select-value-text').should('contain.text', 'Islam');

            // cy.contains('mat-option', 'Religion').click();
            // cy.get('mat-option span.mdc-list-item__primary-text')
            //     .contains('Islam')
            //     .click({ force: true }); // use force if the element is hidden under dropdown

            //spouseDOB//dp
            cy.contains('Date of Birth')
                .parent()       // move to the form-field wrapper
                .find('input')  // get the actual date input
                .type('01-01-1999');
            //spouseNationality
            cy.get('common-input-field[controlname="spouseNationality"] input')
                .should('be.visible')
                .clear()
                .type('Bangladeshi');
            //spouseNationalId
            cy.get('common-input-field[controlname="spouseNationalId"] input')
                .should('be.visible')
                .clear()
                .type('9858754856236');
            //spousePassportNo
            cy.get('common-input-field[controlname="spousePassportNo"] input')
                .should('be.visible')
                .clear()
                .type('556696256545');
            //spousePassportIssueDate//dp
            cy.contains('Passport Issue Date')
                .parent()       // move to the form-field wrapper
                .find('input')  // get the actual date input
                .type('01-01-2024');
            //spousePassportExpiryDate//dp 
            cy.contains('Passport Expiry Date')
                .parent()       // move to the form-field wrapper
                .find('input')  // get the actual date input
                .type('01-01-2034');
            //spousePRStatus//chk
            cy.contains('PR Status')
                .parent()
                .find('input[type="checkbox"]')
                .check();
            //spouseMarriageDate//dp
            cy.contains('Marriage Date')
                .parent()       // move to the form-field wrapper
                .find('input')  // get the actual date input
                .type('01-01-2019');
            //spouseCountry//ddl          
            cy.get('[controlname="spouseCountry"] mat-select').click({ force: true });
            cy.get('mat-option').contains('Bangladesh').click({ force: true });
            //spouseDivision//ddl
            cy.get('[controlname="spouseDivision"] mat-select').click({ force: true });
            cy.get('mat-option').contains('Dhaka').click({ force: true });
            //spouseDistrict//ddl
            cy.get('[controlname="spouseDistrict"] mat-select').click({ force: true });
            cy.get('mat-option').contains('Dhaka').click({ force: true });
            //spouseUpazila//ddl
            cy.get('[controlname="spouseUpazila"] mat-select').click({ force: true });
            cy.get('mat-option').contains('Rupganj').click({ force: true });
            //spousePostCode
            cy.get('common-input-field[controlname="spousePostCode"] input')
                .should('be.visible')
                .clear()
                .type('5103');
            //spouseAddress//txtarea
            cy.get('common-input-textarea[controlname="spouseAddress"] textarea')
                .should('be.visible')
                .type('Dhaka, Bangladesh');

            cy.contains('button', 'Save & Next')
                .should('not.be.disabled')  // waits until it's enabled
                .click()

        });
    }
}

export default SpousePage;


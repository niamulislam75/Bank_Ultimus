//import { faker } from '@faker-js/faker';
class ChildrenPage {

    Children() {
        cy.origin('http://192.168.10.36:4300', () => {
            //cy.visit('/hrm/employee-profile/employee-info');
            cy.log('Children Page');
            //------------Add Children 1-----------------------//
            //childrenName
            cy.get('common-input-field[controlname="childrenName"] input')
                .should('be.visible')
                .clear()
                .type('Nusaibah Nahiyat');
            //BloodGroup//ddl
            cy.get('.mat-mdc-select-placeholder').contains('Select').click();
            cy.get('mat-option').contains('O+').click();
            cy.get('.mat-mdc-select-value-text').should('contain.text', 'O+');

            //childrenGender//chk
            cy.contains('Female')                     // Finds the text node
                .parent()                               // Gets the parent element
                .find('input[type="radio"]')           // Finds the radio input inside it
                .check();                              // Checks the radio

            //childrenDateofBirth//date
            cy.contains('Date of Birth')
                .parent()       // move to the form-field wrapper
                .find('input')  // get the actual date input
                .type('30-09-2021');
            //childrenNationality
            cy.get('common-input-field[controlname="childrenNationality"] input')
                .should('be.visible')
                .clear()
                .type('Bangladeshi');
            //childrenNationalIDNo
            cy.get('common-input-field[controlname="childrenNationalIDNo"] input')
                .should('be.visible')
                .clear()
                .type('9876543210');
            //childrenAddress//txtarea
            cy.get('common-input-textarea[controlname="childrenAddress"] textarea')
                .should('be.visible')
                .type('Dhaka, Bangladesh');
            //childrenOccupation
            cy.get('common-input-field[controlname="childrenOccupation"] input')
                .should('be.visible')
                .clear()
                .type('Student');
            //Religion//ddl
            cy.get('.mat-mdc-select-placeholder').contains('Select').click();
            cy.get('mat-option').contains('Islam').click();
            cy.get('.mat-mdc-select-value-text').should('contain.text', 'Islam');


            //childrenEducationalLevel
            cy.get('common-input-field[controlname="childrenEducationalLevel"] input')
                .should('be.visible')
                .clear()
                .type('one');

            cy.get('button[type="submit"]').contains('Add').click()
            cy.wait(1000);
            //------------Add Children 2-----------------------//
            // //childrenName
            // cy.get('common-input-field[controlname="childrenName"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Najmul Mustakim');
            // //BloodGroup//ddl
            //  cy.get('.mat-mdc-select-placeholder').contains('Select').click();
            // cy.get('mat-option').contains('O+').click();
            // cy.get('.mat-mdc-select-value-text').should('contain.text', 'O+');
            // //childrenGender//chk
            // cy.contains('Male')                     // Finds the text node
            //     .parent()                               // Gets the parent element
            //     .find('input[type="radio"]')           // Finds the radio input inside it
            //     .check();                              // Checks the radio

            // //childrenDateofBirth//date
            // cy.contains('Date of Birth')
            //     .parent()       // move to the form-field wrapper
            //     .find('input')  // get the actual date input
            //     .type('03-03-2023');
            // //childrenNationality
            // cy.get('common-input-field[controlname="childrenNationality"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Bangladeshi');
            // //childrenNationalIDNo
            // cy.get('common-input-field[controlname="childrenNationalIDNo"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('9876543210');
            // //childrenAddress//txtarea
            // cy.get('common-input-textarea[controlname="childrenAddress"] textarea')
            //     .should('be.visible')
            //     .type('Dhaka, Bangladesh');
            // //childrenOccupation
            // cy.get('common-input-field[controlname="childrenOccupation"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Student');
            // //Religion//ddl
            // cy.get('.mat-mdc-select-placeholder').contains('Select').click();
            // cy.get('mat-option').contains('Islam').click();
            // cy.get('.mat-mdc-select-value-text').should('contain.text', 'Islam');


            // //childrenEducationalLevel
            // cy.get('common-input-field[controlname="childrenEducationalLevel"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('nursary');

            // cy.get('button[type="submit"]').contains('Add').click()
            // cy.wait(3000);

            cy.contains('button', 'Save & Next')
                .should('not.be.disabled')  // waits until it's enabled
                .click()

        });
    }
}

export default ChildrenPage;


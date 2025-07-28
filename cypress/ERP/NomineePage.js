//import { faker } from '@faker-js/faker';
class NomineePage {

    Nominee() {
        cy.origin('http://192.168.10.36:4300', () => {
            //cy.visit('/hrm/employee-profile/employee-info');
            cy.log('Nominee Page');
            //------------Add Nominee 1-----------------------//
            //nomineeName
            cy.get('common-input-field[controlname="nomineeName"] input')
                .should('be.visible')
                .clear()
                .type('Nusaibah Nahiyat');
            //nomineeOccupation
            cy.get('common-input-field[controlname="nomineeOccupation"] input')
                .should('be.visible')
                .clear()
                .type('Student');
            //nomineeDateofBirth//date
            cy.contains('Date of Birth')
                .parent()       // move to the form-field wrapper
                .find('input')  // get the actual date input
                .type('30-09-2021');
            // nomineeGender//rb
            cy.contains('Female')                     // Finds the text node
                .parent()                               // Gets the parent element
                .find('input[type="radio"]')           // Finds the radio input inside it
                .check();                              // Checks the radio

            //Religion //ddl

            cy.get('.mat-mdc-select-placeholder').contains('Select').click();
            cy.get('mat-option').contains('Islam').click();
            cy.get('.mat-mdc-select-value-text').should('contain.text', 'Islam');


            //nomineeNationality
            cy.get('common-input-field[controlname="nomineeNationality"] input')
                .should('be.visible')
                .clear()
                .type('Bangladeshi');
            //nomineeNationalIDNo
            cy.get('common-input-field[controlname="nomineeNationalIDNo"] input')
                .should('be.visible')
                .clear()
                .type('9876543210');
            //Relation//ddl

            cy.get('.mat-mdc-select-placeholder').contains('Select').click();
            cy.get('mat-option').contains('Father').click();
            cy.get('.mat-mdc-select-value-text').should('contain.text', 'Father');
 
            //nomineeShare
            cy.get('common-input-field[controlname="nomineeShare"] input')
                .should('be.visible')
                .clear()
                .type('100%');
            //NomineeFundCategory//ddl          
             cy.get('.mat-mdc-select-placeholder').contains('Select').click();
            cy.get('mat-option').contains('Provident Fund').click();
            cy.get('.mat-mdc-select-value-text').should('contain.text', 'Provident Fund');
            // cy.get('[controlname="NomineeFundCategory"] mat-select').click({ force: true });
            // cy.get('mat-option').contains('Provident Fund').click({ force: true });

            //nomineePassportNo
            cy.get('common-input-field[controlname="nomineePassportNo"] input')
                .should('be.visible')
                .clear()
                .type('9876543210');
            //nomineePresentAddress//txtarea
            cy.get('common-input-textarea[controlname="nomineePresentAddress"] textarea')
                .should('be.visible')
                .type('Dhaka, Bangladesh');
            //nomineePermanentAddress//txtarea
            cy.get('common-input-textarea[controlname="nomineePermanentAddress"] textarea')
                .should('be.visible')
                .type('Dhaka, Bangladesh');

            cy.get('button[type="submit"]').contains('Add').click()
            cy.wait(1000);
            // //------------Add Nominee 2-----------------------//
            // //nomineeName
            // cy.get('common-input-field[controlname="nomineeName"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Najmul Mustakim');
            // //nomineeOccupation
            // cy.get('common-input-field[controlname="nomineeOccupation"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Student');
            // //nomineeDateofBirth//date
            // cy.contains('Date of Birth')
            //     .parent()       // move to the form-field wrapper
            //     .find('input')  // get the actual date input
            //     .type('03-03-2023');
            // // nomineeGender//rb
            // cy.contains('Male')                     // Finds the text node
            //     .parent()                               // Gets the parent element
            //     .find('input[type="radio"]')           // Finds the radio input inside it
            //     .check();                              // Checks the radio

            // //Religion //ddl
           
            // cy.get('.mat-mdc-select-placeholder').contains('Select').click();
            // cy.get('mat-option').contains('Islam').click();
            // cy.get('.mat-mdc-select-value-text').should('contain.text', 'Islam');
 
            // //nomineeNationality
            // cy.get('common-input-field[controlname="nomineeNationality"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Bangladeshi');
            // //nomineeNationalIDNo
            // cy.get('common-input-field[controlname="nomineeNationalIDNo"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('9876543210');
            // //Relation//ddl
           
            // cy.get('.mat-mdc-select-placeholder').contains('Select').click();
            // cy.get('mat-option').contains('Father').click();
            // cy.get('.mat-mdc-select-value-text').should('contain.text', 'Father');
 
            // //nomineeShare
            // cy.get('common-input-field[controlname="nomineeShare"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('50%');
            // //NomineeFundCategory//ddl          
            //  cy.get('.mat-mdc-select-placeholder').contains('Select').click();
            // cy.get('mat-option').contains('Provident Fund').click();
            // cy.get('.mat-mdc-select-value-text').should('contain.text', 'Provident Fund');        
            // // cy.get('[controlname="NomineeFundCategory"] mat-select').click({ force: true });
            // // cy.get('mat-option').contains('Provident Fund').click({ force: true });
            // //nomineePassportNo
            // cy.get('common-input-field[controlname="nomineePassportNo"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('9876543210');
            // //nomineePresentAddress//txtarea
            // cy.get('common-input-textarea[controlname="nomineePresentAddress"] textarea')
            //     .should('be.visible')
            //     .type('Dhaka, Bangladesh');
            // //nomineePermanentAddress//txtarea
            // cy.get('common-input-textarea[controlname="nomineePermanentAddress"] textarea')
            //     .should('be.visible')
            //     .type('Dhaka, Bangladesh');

            // cy.get('button[type="submit"]').contains('Add').click()
            // cy.wait(3000);

            cy.contains('button', 'Save & Next')
                .should('not.be.disabled')  // waits until it's enabled
                .click()

        });
    }
}

export default NomineePage;


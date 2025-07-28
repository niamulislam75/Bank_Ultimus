//import { faker } from '@faker-js/faker';
class ReferencePage {

    Reference() {
        cy.origin('http://192.168.10.36:4300', () => {
            //cy.visit('/hrm/employee-profile/employee-info');
            cy.log('Reference Page');
            //------------Add Reference 1-----------------------//
            //referenceName
            cy.get('common-input-field[controlname="referenceName"] input')
                .should('be.visible')
                .clear()
                .type('reference1');
            //referenceOccupation
            cy.get('common-input-field[controlname="referenceOccupation"] input')
                .should('be.visible')
                .clear()
                .type('SERVICE');
            //referenceNationality
            cy.get('common-input-field[controlname="referenceNationality"] input')
                .should('be.visible')
                .clear()
                .type('Bangladeshi');
            //referenceRelation
            cy.get('common-input-field[controlname="referenceRelation"] input')
                .should('be.visible')
                .clear()
                .type('teacher');
            //referenceMobile
            cy.get('common-input-field[controlname="referenceMobile"] input')
                .should('be.visible')
                .clear()
                .type('01723546985');
            //referenceOrganization
            cy.get('common-input-field[controlname="referenceOrganization"] input')
                .should('be.visible')
                .clear()
                .type('Organization1');
            //referenceEmail
            cy.get('common-input-field[controlname="referenceEmail"] input')
                .should('be.visible')
                .clear()
                .type('reference@gmail.com');
            //referencePresentAddress//txtarea
            cy.get('common-input-textarea[controlname="referencePresentAddress"] textarea')
                .should('be.visible')
                .type('Dhaka, Bangladesh');
            //referencePermanentAddress// txtarea
            cy.get('common-input-textarea[controlname="referencePermanentAddress"] textarea')
                .should('be.visible')
                .type('Dhaka, Bangladesh');
            cy.get('button[type="submit"]').contains('Add').click()
            cy.wait(1000);


            //------------Add Reference 2-----------------------//
            // //referenceName
            // cy.get('common-input-field[controlname="referenceName"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('reference2');
            // //referenceOccupation
            // cy.get('common-input-field[controlname="referenceOccupation"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('SERVICE');
            // //referenceNationality
            // cy.get('common-input-field[controlname="referenceNationality"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Bangladeshi');
            // //referenceRelation
            // cy.get('common-input-field[controlname="referenceRelation"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('teacher');
            // //referenceMobile
            // cy.get('common-input-field[controlname="referenceMobile"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('01723546985');
            // //referenceOrganization
            // cy.get('common-input-field[controlname="referenceOrganization"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Organization1');
            // //referenceEmail
            // cy.get('common-input-field[controlname="referenceEmail"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('reference@gmail.com');
            // //referencePresentAddress//txtarea
            // cy.get('common-input-textarea[controlname="referencePresentAddress"] textarea')
            //     .should('be.visible')
            //     .type('Dhaka, Bangladesh');
            // //referencePermanentAddress// txtarea
            // cy.get('common-input-textarea[controlname="referencePermanentAddress"] textarea')
            //     .should('be.visible')
            //     .type('Dhaka, Bangladesh');

            // cy.get('button[type="submit"]').contains('Add').click()
            // cy.wait(3000);
            cy.contains('button', 'Save & Next')
                .should('not.be.disabled')  // waits until it's enabled
                .click();

        });
    }
}

export default ReferencePage;


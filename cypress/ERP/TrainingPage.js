//import { faker } from '@faker-js/faker';
class TrainingPage {

    Training() {
        cy.origin('http://192.168.10.36:4300', () => {
            //cy.visit('/hrm/employee-profile/employee-info');
            cy.log('Training Page');
            //------------Add Traning 1-----------------------//
            //topic
            cy.get('common-input-field[controlname="topic"] input')
                .should('be.visible')
                .clear()
                .type('ISTQB Certified Tester Foundation Level');
            //arrangeOrganization
            cy.get('common-input-field[controlname="arrangeOrganization"] input')
                .should('be.visible')
                .clear()
                .type('Dafodil University');
            //area//txtarea
            cy.get('common-input-textarea[controlname="area"] textarea')
                .should('be.visible')
                .type('This is a training for ISTQB Certified Tester Foundation Level.');
            //venue
            cy.get('common-input-field[controlname="venue"] input')
                .should('be.visible')
                .clear()
                .type('Online');
            //country//ddl
            cy.get('[controlname="country"] mat-select').click({ force: true });
            cy.get('mat-option').contains('Bangladesh').click({ force: true });
            //city
            cy.get('common-input-field[controlname="city"] input')
                .should('be.visible')
                .clear()
                .type('Dhaka');
            // duration//ddl2

            cy.get('input[formcontrolname="duration"]')
                .scrollIntoView()
                .should('be.visible')
                .type('240').type('{enter}'); // Use type with {enter} to select the option

            //timeUnit            
            cy.get('common-mat-select-search[controlname="timeUnit"] mat-select').click();
            // Then select the desired option
            cy.get('mat-option span.mdc-list-item__primary-text')
                .contains('Hours') // or 'Days'
                .click();

            //year
            cy.get('common-input-field[controlname="year"] input')
                .should('be.visible')
                .clear()
                .type('2022');
            //costBearer
            cy.get('common-input-field[controlname="costBearer"] input')
                .should('be.visible')
                .clear()
                .type('Office');
            //trainingCost
            cy.get('common-input-field[controlname="trainingCost"] input')
                .should('be.visible')
                .clear()
                .type('10000');

            cy.get('button[type="submit"]').contains('Add').click()
            cy.wait(1000);
            //------------Add Traning 2-----------------------//
            // //topic
            // cy.get('common-input-field[controlname="topic"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Automation Testing');
            // //arrangeOrganization
            // cy.get('common-input-field[controlname="arrangeOrganization"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Brac University');
            // //area//txtarea
            // cy.get('common-input-textarea[controlname="area"] textarea')
            //     .should('be.visible')
            //     .type('This is a training for Automation Testing.');
            // //venue
            // cy.get('common-input-field[controlname="venue"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Online');
            // //country//ddl
            // cy.get('[controlname="country"] mat-select').click({ force: true });
            // cy.get('mat-option').contains('Bangladesh').click({ force: true });
            // //city
            // cy.get('common-input-field[controlname="city"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Dhaka');
            // // duration//ddl2

            // cy.get('input[formcontrolname="duration"]')
            //     .scrollIntoView()
            //     .should('be.visible')
            //     .type('240').type('{enter}'); // Use type with {enter} to select the option

            // //timeUnit            
            // cy.get('common-mat-select-search[controlname="timeUnit"] mat-select').click();
            // // Then select the desired option
            // cy.get('mat-option span.mdc-list-item__primary-text')
            //     .contains('Hours') // or 'Days'
            //     .click();
            // //year
            // cy.get('common-input-field[controlname="year"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('2022');
            // //costBearer
            // cy.get('common-input-field[controlname="costBearer"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Office');
            // //trainingCost
            // cy.get('common-input-field[controlname="trainingCost"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('10000');

            // cy.get('button[type="submit"]').contains('Add').click()
            // cy.wait(3000);

            cy.contains('button', 'Save & Next')
                .should('not.be.disabled')  // waits until it's enabled
                .click()

        });
    }
}

export default TrainingPage;


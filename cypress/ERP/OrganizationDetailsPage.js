//import { faker } from '@faker-js/faker';
class OrganizationDetailsPage {

    OrganizationDetails() {
        cy.origin('http://192.168.10.36:4300', () => {
            //cy.visit('/hrm/employee-profile/employee-info');
            cy.log('Organization Details Page');

            cy.get('common-input-field[controlname="employeeType"] input')
                .should('be.visible')
                .clear()
                .type('Permanent');
            cy.get('[controlname="jobStatus"] mat-select').click({ force: true });
            cy.get('mat-option').contains('Confirmed').click({ force: true });

            cy.get('common-input-field[controlname="workingUnit"] input')
                .should('be.visible')
                .clear()
                .type('7');
            //Corporate Designation   
            cy.contains('Corporate Designation').then(el => {
                console.log('Found element:', el)
            });

            cy.get('.mat-mdc-select-placeholder').contains('Select').click();
            cy.get('mat-option').contains('Senior Software Developer').click();
            cy.get('.mat-mdc-select-value-text').should('contain.text', 'Senior Software Developer');



            //Functional Role
            cy.get('common-input-field[controlname="functionalRole"] input')
                .should('be.visible')
                .clear()
                .type('Senior Software Developer');
            cy.get('common-input-field[controlname="reportTo"] input')
                .should('be.visible')
                .clear()
                .type('Team Lead');
            //cy.get('#mat-input-35').type('Team Lead');

            //joiningDate
            cy.contains('Joining Date')
                .parent()       // move to the form-field wrapper
                .find('input')  // get the actual date input
                .type('23-07-2025');

            //Department
            cy.get('[controlname="department"] mat-select').click({ force: true });
            cy.get('mat-option').contains('Bank Solutions').click({ force: true });

            //confirmationDate
             cy.contains('Confirmation Date')
                .parent()       // move to the form-field wrapper
                .find('input')  // get the actual date input
                .type('23-07-2025');

            cy.get('common-input-field[controlname="costCenter"] input')
                .should('be.visible')
                .clear()
                .type('Finance Department');

            cy.get('common-input-field[controlname="basicSalary"] input')
                .should('be.visible')
                .clear()
                .type('40000');
            cy.get('common-input-field[controlname="pfNo"] input')
                .should('be.visible')
                .clear()
                .type('480');
            cy.get('common-input-field[controlname="joinBatch"] input')
                .should('be.visible')
                .clear()
                .type('101');
            cy.get('common-input-field[controlname="probationPeriod"] input')
                .should('be.visible')
                .clear()
                .type('0');

            //expectedConfirmDate
             cy.contains('Expected Confirm Date')
                .parent()       // move to the form-field wrapper
                .find('input')  // get the actual date input
                .type('23-07-2025');


            //eligibleForOvertime
            cy.get('[controlname="eligibleForOvertime"] mat-select').click({ force: true });
            cy.get('mat-option').contains('Yes').click({ force: true });           


            cy.contains('button', 'Save & Next')
                .should('not.be.disabled')  // waits until it's enabled
                .click();

        });
    }
}

export default OrganizationDetailsPage;


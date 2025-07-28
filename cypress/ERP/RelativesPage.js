//import { faker } from '@faker-js/faker';
class RelativesPage {

    Relatives() {
        cy.origin('http://192.168.10.36:4300', () => {
            //cy.visit('/hrm/employee-profile/employee-info');
            cy.log('Relatives Page');
            //------------Add Relative 1-----------------------//
            // Relation//ddl

            cy.get('.mat-mdc-select-placeholder').contains('Select').click();
            cy.get('mat-option').contains('Brother').click();
            cy.get('.mat-mdc-select-value-text').should('contain.text', 'Brother');
            //relativeName
            cy.get('common-input-field[controlname="relativeName"] input')
                .should('be.visible')
                .clear()
                .type('relative1');
            //relativeNationality
            cy.get('common-input-field[controlname="relativeNationality"] input')
                .should('be.visible')
                .clear()
                .type('Bangladeshi');
            //relativeNationalId
            cy.get('common-input-field[controlname="relativeNationalId"] input')
                .should('be.visible')
                .clear()
                .type('9876543210');
            //relativePassportNo
            cy.get('common-input-field[controlname="relativePassportNo"] input')
                .should('be.visible')
                .clear()
                .type('A123456789');
            //relativeMobile
            cy.get('common-input-field[controlname="relativeMobile"] input')
                .should('be.visible')
                .clear()
                .type('01723546985');
            //relativePersonalEmail
            cy.get('common-input-field[controlname="relativePersonalEmail"] input')
                .should('be.visible')
                .clear()
                .type('relative@gmail.com');
            //relativeOccupation
            cy.get('common-input-field[controlname="relativeOccupation"] input')
                .should('be.visible')
                .clear()
                .type('Engineer');
            //relativePermanentCountry//ddl                 
            cy.get('[controlname="relativePermanentCountry"] mat-select').click({ force: true });
            cy.get('mat-option').contains('Bangladesh').click({ force: true });
            //relativePermanentDivision//ddl
            cy.get('[controlname="relativePermanentDivision"] mat-select').click({ force: true });
            cy.get('mat-option').contains('Dhaka').click({ force: true });
            //relativePermanentDistrict//ddl
            cy.get('[controlname="relativePermanentDistrict"] mat-select').click({ force: true });
            cy.get('mat-option').contains('Dhaka').click({ force: true });
            //relativePermanentUpazila//ddl   
            cy.get('[controlname="relativePermanentUpazila"] mat-select').click({ force: true });
            cy.get('mat-option').contains('Rupganj').click({ force: true });
            //relativePostCode
            cy.get('common-input-field[controlname="relativePostCode"] input')
                .should('be.visible')
                .clear()
                .type('1212');
            //relativePresentAddress//txtarea
            cy.get('common-input-textarea[controlname="relativePresentAddress"] textarea')
                .should('be.visible')
                .type('Dhaka, Bangladesh');

            cy.get('button[type="submit"]').contains('Add').click()
            cy.wait(1000);
            //------------Add Relative 2-----------------------//
            // // Relation//ddl 
            // cy.get('.mat-mdc-select-placeholder').contains('Select').click();
            // cy.get('mat-option').contains('Brother').click();
            // cy.get('.mat-mdc-select-value-text').should('contain.text', 'Brother');
            // //relativeName
            // cy.get('common-input-field[controlname="relativeName"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('relative2');
            // //relativeNationality
            // cy.get('common-input-field[controlname="relativeNationality"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Bangladeshi');
            // //relativeNationalId
            // cy.get('common-input-field[controlname="relativeNationalId"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('9876543210');
            // //relativePassportNo
            // cy.get('common-input-field[controlname="relativePassportNo"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('A123456789');
            // //relativeMobile
            // cy.get('common-input-field[controlname="relativeMobile"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('01723546985');
            // //relativePersonalEmail
            // cy.get('common-input-field[controlname="relativePersonalEmail"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('relative@gmail.com');
            // //relativeOccupation
            // cy.get('common-input-field[controlname="relativeOccupation"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Engineer');
            // //relativePermanentCountry//ddl                 
            // cy.get('[controlname="relativePermanentCountry"] mat-select').click({ force: true });
            // cy.get('mat-option').contains('Bangladesh').click({ force: true });
            // //relativePermanentDivision//ddl
            // cy.get('[controlname="relativePermanentDivision"] mat-select').click({ force: true });
            // cy.get('mat-option').contains('Dhaka').click({ force: true });
            // //relativePermanentDistrict//ddl
            // cy.get('[controlname="relativePermanentDistrict"] mat-select').click({ force: true });
            // cy.get('mat-option').contains('Dhaka').click({ force: true });
            // //relativePermanentUpazila//ddl   
            // cy.get('[controlname="relativePermanentUpazila"] mat-select').click({ force: true });
            // cy.get('mat-option').contains('Rupganj').click({ force: true });
            // //relativePostCode
            // cy.get('common-input-field[controlname="relativePostCode"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('1212');
            // //relativePresentAddress//txtarea
            // cy.get('common-input-textarea[controlname="relativePresentAddress"] textarea')
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

export default RelativesPage;


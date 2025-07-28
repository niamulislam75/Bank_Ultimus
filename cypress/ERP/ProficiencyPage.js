//import { faker } from '@faker-js/faker';
class ProficiencyPage {

    Proficiency() {
        cy.origin('http://192.168.10.36:4300', () => {
            //cy.visit('/hrm/employee-profile/employee-info');
            cy.log('Proficiency Page');
            //------------Add Proficiency 1-----------------------//
            //language
            cy.get('[controlname="language"] mat-select').click({ force: true });
            cy.get('mat-option').contains('Bengali').click({ force: true });
            //readingStrength
            cy.get('[controlname="readingStrength"] mat-select').click({ force: true });
            cy.get('mat-option').contains('High').click({ force: true });
            //writingStrength
            cy.get('[controlname="writingStrength"] mat-select').click({ force: true });
            cy.get('mat-option').contains('High').click({ force: true });
            //speakingStrength
            cy.get('[controlname="speakingStrength"] mat-select').click({ force: true });
            cy.get('mat-option').contains('High').click({ force: true });

            cy.get('button[type="submit"]').contains('Add').click()
            cy.wait(1000);
            //  //------------Add Proficiency 2-----------------------//
            // //language
            // cy.get('[controlname="language"] mat-select').click({ force: true });
            // cy.get('mat-option').contains('English').click({ force: true });
            // //readingStrength
            // cy.get('[controlname="readingStrength"] mat-select').click({ force: true });
            // cy.get('mat-option').contains('High').click({ force: true });
            // //writingStrength
            // cy.get('[controlname="writingStrength"] mat-select').click({ force: true });
            // cy.get('mat-option').contains('High').click({ force: true });
            // //speakingStrength
            // cy.get('[controlname="speakingStrength"] mat-select').click({ force: true });
            // cy.get('mat-option').contains('High').click({ force: true });

            // cy.get('button[type="submit"]').contains('Add').click()
            // cy.wait(3000);

            cy.contains('button', 'Save & Next')
                .should('not.be.disabled')  // waits until it's enabled
                .click();

        });
    }
}

export default ProficiencyPage;


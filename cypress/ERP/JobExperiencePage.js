//import { faker } from '@faker-js/faker';
class JobExperiencePage {

    JobExperience() {
        cy.origin('http://192.168.10.36:4300', () => {
            //cy.visit('/hrm/employee-profile/employee-info');
            cy.log('Job Experience Page');
            //----------ADD Experience 1-----------------//
            //organization
            cy.get('common-input-field[controlname="organization"] input')
                .should('be.visible')
                .clear()
                .type('Birds Group');
            //joiningDate//dp 
            cy.contains('Joining Date')
                .parent()       // move to the form-field wrapper
                .find('input')  // get the actual date input
                .type('01-07-2018');
            //lastWorkingDate//dp
            cy.contains('Last Working Date')
                .parent()       // move to the form-field wrapper
                .find('input')  // get the actual date input
                .type('31-05-2019');
            //joiningDesignation
            cy.get('common-input-field[controlname="joiningDesignation"] input')
                .should('be.visible')
                .clear()
                .type('Web Developer');
            //joiningDesignationReportTo
            cy.get('common-input-field[controlname="joiningDesignationReportTo"] input')
                .should('be.visible')
                .clear()
                .type('Team Lead');
            //lastDesignation
            cy.get('common-input-field[controlname="lastDesignation"] input')
                .should('be.visible')
                .clear()
                .type('Senior Web Developer');
            //lastDesignationReportTo
            cy.get('common-input-field[controlname="lastDesignationReportTo"] input')
                .should('be.visible')
                .clear()
                .type('Team Lead');
            //effectiveDate//dp
            cy.contains('Effective Date')
                .parent()       // move to the form-field wrapper
                .find('input')  // get the actual date input
                .type('01-01-2019');
            //jobTitle
            cy.get('common-input-field[controlname="jobTitle"] input')
                .should('be.visible')
                .clear()
                .type('Software Engineer');
            //salary
            cy.get('common-input-field[controlname="salary"] input')
                .should('be.visible')
                .clear()
                .type('30000');
            //totalNumberofEmployees
            cy.get('common-input-field[controlname="totalNumberofEmployees"] input')
                .should('be.visible')
                .clear()
                .type('35');
            //headofTheDeptDiv
            cy.get('common-input-field[controlname="headofTheDeptDiv"] input')
                .should('be.visible')
                .clear()
                .type('Arifur Rahman');
            //designationDeptDiv
            cy.get('common-input-field[controlname="designationDeptDiv"] input')
                .should('be.visible')
                .clear()
                .type('IT Head');
            //mobileDeptDiv
            cy.get('common-input-field[controlname="mobileDeptDiv"] input')
                .should('be.visible')
                .clear()
                .type('01725698947');
            //headofTheHR
            cy.get('common-input-field[controlname="headofTheHR"] input')
                .should('be.visible')
                .clear()
                .type('Shamim Ahmed');
            //designationHR
            cy.get('common-input-field[controlname="designationHR"] input')
                .should('be.visible')
                .clear()
                .type('Manager HR');
            //mobileHR
            cy.get('common-input-field[controlname="mobileHR"] input')
                .should('be.visible')
                .clear()
                .type('01723456789');
            //responsibilities//txtarea
            cy.get('common-input-textarea[controlname="responsibilities"] textarea')
                .should('be.visible')
                .type('software development, team management, project coordination');
            // significantAchievements//textarea
            cy.get('common-input-textarea[controlname="significantAchievements"] textarea')
                .should('be.visible')
                .type('Successfully led a team to complete a major project ahead of schedule');
            //otherBenefits//textarea
            cy.get('common-input-textarea[controlname="otherBenefits"] textarea')
                .should('be.visible')
                .type('Health insurance, performance bonuses');
            //----------ADD Experience-----------------//
            cy.get('.justify-end > .submit-button > .mat-mdc-button-touch-target').click();
            cy.wait(1000);
            //----------ADD Experience 2-----------------//
            // //organization
            // cy.get('common-input-field[controlname="organization"] input')
            //     .scrollIntoView()
            //     .should('be.visible')
            //     .clear()
            //     .type('Leads Corporation Ltd.');
            // //joiningDate//dp 
            // cy.contains('Joining Date')
            //     .parent()       // move to the form-field wrapper
            //     .find('input')  // get the actual date input
            //     .type('16-07-2019');
            // //lastWorkingDate//dp
            // cy.contains('Last Working Date')
            //     .parent()       // move to the form-field wrapper
            //     .find('input')  // get the actual date input
            //     .type('30-06-2024');
            // //joiningDesignation
            // cy.get('common-input-field[controlname="joiningDesignation"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Software Engineer');
            // //joiningDesignationReportTo
            // cy.get('common-input-field[controlname="joiningDesignationReportTo"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Project Manager');
            // //lastDesignation
            // cy.get('common-input-field[controlname="lastDesignation"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Senior Software Engineer');
            // //lastDesignationReportTo
            // cy.get('common-input-field[controlname="lastDesignationReportTo"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Manager');
            // //effectiveDate//dp
            // cy.contains('Effective Date')
            //     .parent()       // move to the form-field wrapper
            //     .find('input')  // get the actual date input
            //     .type('01-01-2021');
            // //jobTitle
            // cy.get('common-input-field[controlname="jobTitle"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Software Development');
            // //salary
            // cy.get('common-input-field[controlname="salary"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('60000');
            // //totalNumberofEmployees
            // cy.get('common-input-field[controlname="totalNumberofEmployees"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('200');
            // //headofTheDeptDiv
            // cy.get('common-input-field[controlname="headofTheDeptDiv"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Arifur Rahman');
            // //designationDeptDiv
            // cy.get('common-input-field[controlname="designationDeptDiv"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('IT Head');
            // //mobileDeptDiv
            // cy.get('common-input-field[controlname="mobileDeptDiv"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('01725698947');
            // //headofTheHR
            // cy.get('common-input-field[controlname="headofTheHR"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Shamim Ahmed');
            // //designationHR
            // cy.get('common-input-field[controlname="designationHR"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Manager HR');
            // //mobileHR
            // cy.get('common-input-field[controlname="mobileHR"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('01723456789');
            // //responsibilities//txtarea
            // cy.get('common-input-textarea[controlname="responsibilities"] textarea')
            //     .should('be.visible')
            //     .type('software development, team management, project coordination');
            // // significantAchievements//textarea
            // cy.get('common-input-textarea[controlname="significantAchievements"] textarea')
            //     .should('be.visible')
            //     .type('Successfully led a team to complete a major project ahead of schedule');
            // //otherBenefits//textarea
            // cy.get('common-input-textarea[controlname="otherBenefits"] textarea')
            //     .should('be.visible')
            //     .type('Health insurance, performance bonuses');
           
            // cy.get('.justify-end > .submit-button > .mat-mdc-button-touch-target').click();
            // cy.wait(3000);
            // //cy.get(':nth-child(3) > .mdc-button > .mdc-button__label > .flex > span').click();


            cy.contains('button', 'Save & Next')
                .should('not.be.disabled')  // waits until it's enabled
                .click();



            //cy.get(':nth-child(3) > .mdc-button > .mdc-button__label > .flex > span').click();


        });
    }
}

export default JobExperiencePage;


//import { faker } from '@faker-js/faker';
class EducationalInfoPage {

    EducationalInfo() {
        cy.origin('http://192.168.10.36:4300', () => {
            //cy.visit('/hrm/employee-profile/employee-info');
            cy.log('Educational Info Page');
            //degree
            cy.get('common-input-field[controlname="degree"] input')
                .should('be.visible')
                .clear()
                .type('BSC');
            //groupMajor
            cy.get('common-input-field[controlname="groupMajor"] input')
                .should('be.visible')
                .clear()
                .type('Bachelor of Science in Computer Science');
            //passingYear
            cy.get('common-input-field[controlname="passingYear"] input')
                .should('be.visible')
                .clear()
                .type('2020');
            //boardName
            cy.get('common-input-field[controlname="boardName"] input')
                .should('be.visible')
                .clear()
                .type('Dhaka');
            //rollNo
            cy.get('common-input-field[controlname="rollNo"] input')
                .should('be.visible')
                .clear()
                .type('9857485458');
            //registrationNo
            cy.get('common-input-field[controlname="registrationNo"] input')
                .should('be.visible')
                .clear()
                .type('9875874525');
            //instituteName
            cy.get('common-input-field[controlname="instituteName"] input')
                .should('be.visible')
                .clear()
                .type('Dhaka University');
            //scaleOfGpa
            cy.get('common-input-field[controlname="scaleOfGpa"] input')
                .should('be.visible')
                .clear()
                .type('4.00');
            //gradeDivision
            cy.get('common-input-field[controlname="gradeDivision"] input')
                .should('be.visible')
                .clear()
                .type('3.88');
            //obtainedCgpa
            cy.get('common-input-field[controlname="obtainedCgpa"] input')
                .should('be.visible')
                .clear()
                .type('3.88');
            //ADD
            cy.get('.justify-end > .submit-button > .mat-mdc-button-touch-target').click();
            cy.wait(1000);
            //-------------------------------------------------------------------------------------------//
            // //degree
            // cy.get('common-input-field[controlname="degree"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('MSC');
            // //groupMajor
            // cy.get('common-input-field[controlname="groupMajor"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Master of Science in Computer Science');
            // //passingYear
            // cy.get('common-input-field[controlname="passingYear"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('2024');
            // //boardName
            // cy.get('common-input-field[controlname="boardName"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Dhaka');
            // //rollNo
            // cy.get('common-input-field[controlname="rollNo"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('9857485458');
            // //registrationNo
            // cy.get('common-input-field[controlname="registrationNo"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('9875874525');
            // //instituteName
            // cy.get('common-input-field[controlname="instituteName"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Dhaka University');
            // //scaleOfGpa
            // cy.get('common-input-field[controlname="scaleOfGpa"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('4.00');
            // //gradeDivision
            // cy.get('common-input-field[controlname="gradeDivision"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('3.88');
            // //obtainedCgpa
            // cy.get('common-input-field[controlname="obtainedCgpa"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('3.88');
            // //ADD
            // cy.get('.justify-end > .submit-button > .mat-mdc-button-touch-target').click();
            // cy.wait(3000);
            // //-------------------------------------------------------------------------------------------//
            // //degree
            // cy.get('common-input-field[controlname="degree"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Microsoft Certified: Azure Fundamentals');
            // //groupMajor
            // cy.get('common-input-field[controlname="groupMajor"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Microsoft Certified: Azure Fundamentals');
            // //passingYear
            // cy.get('common-input-field[controlname="passingYear"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('2025');
            // //boardName
            // cy.get('common-input-field[controlname="boardName"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Online Certification');
            // //rollNo
            // cy.get('common-input-field[controlname="rollNo"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('9857485458');
            // //registrationNo
            // cy.get('common-input-field[controlname="registrationNo"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('9875874525');
            // //instituteName
            // cy.get('common-input-field[controlname="instituteName"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('microsoft.com');
            // //scaleOfGpa
            // cy.get('common-input-field[controlname="scaleOfGpa"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('4.00');
            // //gradeDivision
            // cy.get('common-input-field[controlname="gradeDivision"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('3.88');
            // //obtainedCgpa
            // cy.get('common-input-field[controlname="obtainedCgpa"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('3.88');
            // //professionalDegree//chk
            // cy.contains('Professional Degree')
            //     .parent()
            //     .find('input[type="checkbox"]')
            //     .check();
            // //ADD
            // cy.get('.justify-end > .submit-button > .mat-mdc-button-touch-target').click();
            // cy.wait(3000);





            // cy.get('#mat-input-64').type('BSC');
            // cy.get('#mat-input-65').type('Bachelor of Science in Computer Science');
            // cy.get('#mat-input-66').type('2020');
            // cy.get('#mat-input-67').type('Dhaka');
            // cy.get('#mat-input-68').type('9857485458');
            // cy.get('#mat-input-69').type('9875874525');
            // cy.get('#mat-input-70').type('Dhaka University');
            // cy.get('#mat-input-72').type('4.00');
            // cy.get('#mat-input-73').type('3.88');
            // cy.get('.justify-end > .submit-button > .mat-mdc-button-touch-target').click();
            // cy.wait(3000);
            //cy.get(':nth-child(3) > .mdc-button > .mdc-button__label > .flex > span').click();

            cy.contains('button', 'Save & Next')
                .should('not.be.disabled')  // waits until it's enabled
                .click()

        });
    }
}

export default EducationalInfoPage;


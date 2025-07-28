//import { faker } from '@faker-js/faker';
class AddtionalInfoPage {

    AddtionalInfo() {
        cy.origin('http://192.168.10.36:4300', () => {
            //cy.visit('/hrm/employee-profile/employee-info');
            //favoriteColor
            cy.log('Addtional Info Page');
            cy.get('common-input-field[controlname="favoriteColor"] input')
                .should('be.visible')
                .clear()
                .type('navy blue');
            //hobby
            cy.get('common-input-field[controlname="hobby"] input')
                .should('be.visible')
                .clear()
                .type('Reading Book');
            //facebookIDLink
            cy.get('common-input-field[controlname="facebookIDLink"] input')
                .should('be.visible')
                .clear()
                .type('www.facebook.com/niamul.islam');
            //linkedInIDLink
            cy.get('common-input-field[controlname="linkedInIDLink"] input')
                .should('be.visible')
                .clear()
                .type('www/linkedin.com/in/niamul-islam');
            //professionalMembershipInformation//chk
            cy.contains('Professional Membership Information')
                .parent()
                .find('input[type="checkbox"]')
                .check();

            //professionalMembershipDetails
            cy.get('common-input-field[controlname="professionalMembershipDetails"] input')
                .should('be.visible')
                .clear()
                .type('9854582542');
            //willingnesstoDonateBlood//chk
            cy.contains('Willingness to Donate Blood')
                .parent()
                .find('input[type="checkbox"]')
                .check();

            //ethnic//chk
            cy.contains('Ethnic Identity')
                .parent()
                .find('input[type="checkbox"]')
                .check();

            //prStatus//chk
            cy.contains('PR Status')
                .parent()
                .find('input[type="checkbox"]')
                .check();

            //tinNumber
            cy.get('common-input-field[controlname="tinNumber"] input')
                .should('be.visible')
                .clear()
                .type('121345');
            //existingTaxZone
            cy.get('common-input-field[controlname="existingTaxZone"] input')
                .should('be.visible')
                .clear()
                .type('Dhaka');
            //existingTaxCircle
            cy.get('common-input-field[controlname="existingTaxCircle"] input')
                .should('be.visible')
                .clear()
                .type('dhaka');
            //drivingLicenseType//ddl
            cy.get('[controlname="drivingLicenseType"] mat-select').click({ force: true });
            cy.get('mat-option').contains('Non-professional').click({ force: true });
            //drivingLicenseIssueDate//dp            
            cy.contains('Driving License Issue Date')
                .parent()       // move to the form-field wrapper
                .find('input')  // get the actual date input
                .type('23-07-2025');
            //drivingLicensExpiryDate//dp            
            cy.contains('Driving Licens Expiry Date')
                .parent()       // move to the form-field wrapper
                .find('input')  // get the actual date input
                .type('23-07-2035');
            //flexcubeUserID
            cy.get('common-input-field[controlname="flexcubeUserID"] input')
                .should('be.visible')
                .clear()
                .type('flexcubeUserID');
            //flexcubeAuthorizerID
            cy.get('common-input-field[controlname="flexcubeAuthorizerID"] input')
                .should('be.visible')
                .clear()
                .type('flexcubeAuthorizerID');
            //pcUserID
            cy.get('common-input-field[controlname="pcUserID"] input')
                .should('be.visible')
                .clear()
                .type('121345');
            //pcIPAddress
            cy.get('common-input-field[controlname="pcIPAddress"] input')
                .should('be.visible')
                .clear()
                .type('192.168.20.70');
            //foodLiking//ddl
            cy.get('[controlname="foodLiking"] mat-select').click({ force: true });
            cy.get('mat-option').contains('Non-Vegetarian').click({ force: true });
            //overallScore
            cy.get('common-input-field[controlname="overallScore"] input')
                .should('be.visible')
                .clear()
                .type('80');
            // dualCitizenshipStatus//chk
            // countryNameDualCitizenship
            // cy.get('common-input-field[controlname="employeeType"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Permanent');
            // dualPassportNumber
            // cy.get('common-input-field[controlname="employeeType"] input')
            //     .should('be.visible')
            //     .clear()
            //     .type('Permanent');
            //country_visited//txtarea
            cy.get('common-input-textarea[controlname="country_visited"] textarea')
                .should('be.visible')
                .type('Bangladesh, India, Pakistan');
            //emp_medical_history//txtarea
            cy.get('common-input-textarea[controlname="emp_medical_history"] textarea')
                .should('be.visible')
                .type('No medical history');
            //last_checkup//txtarea
            cy.get('common-input-textarea[controlname="last_checkup"] textarea')
                .should('be.visible')
                .type('No last checkup');
            //major_operation//txtarea
            cy.get('common-input-textarea[controlname="major_operation"] textarea')
                .should('be.visible')
                .type('No major operation');
            //parents_medical_history//txtarea
            cy.get('common-input-textarea[controlname="parents_medical_history"] textarea')
                .should('be.visible')
                .type('OK');

            // cy.get('#mat-input-47').type('navy blue');
            // cy.get('#mat-input-48').type('Book Reading');
            // cy.get('#mat-input-49').type('www.facebook.com/niamul.islam');
            // cy.get('#mat-input-50').type('www/linkedin.com/in/niamul-islam');
            // cy.get('#mat-input-52').type('9854582542');
            // cy.get('#mat-input-59').type('121345');
            // cy.get('#mat-input-60').type('192.168.20.70');

            //cy.get(':nth-child(3) > .mdc-button > .mdc-button__label > .flex > span').click();

            cy.contains('button', 'Save & Next')
                .should('not.be.disabled')  // waits until it's enabled
                .click()

        });
    }
}

export default AddtionalInfoPage;


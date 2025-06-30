class EmployeeDetailsPage {

    EmployeeDetails() {

        const dataEmployeeDetails = Cypress.env('excelData');

        cy.get(':nth-child(3) > :nth-child(2) > .text-2xl').click();

        cy.origin('http://192.168.10.36:4300', () => {
            cy.get("span[class='ng-tns-c321347134-2']").click();
        });

        cy.origin('http://192.168.10.36:4300', () => {
            cy.contains('a', 'Employee Details', { timeout: 10000 })  // anchor ট্যাগ যেটার ভিতরে লেখা আছে "Employee Details"
                .should('be.visible')
                .click();
            // Fill up the form
            cy.get('#mat-input-0').type(dataEmployeeDetails.emp_ID);
            cy.get('#mat-input-1').type(dataEmployeeDetails.full_name_EN);
            cy.get('#mat-input-2').type(dataEmployeeDetails.full_name_BN);
            cy.get('#mat-input-3').type(dataEmployeeDetails.father_name_EN);
            cy.get('#mat-input-4').type(dataEmployeeDetails.mother_name_EN);


        });
        //  cy.origin('http://192.168.10.36:4300', () => {
        //     cy.contains('a', 'Employee Details', { timeout: 10000 })  // anchor ট্যাগ যেটার ভিতরে লেখা আছে "Employee Details"
        //         .should('be.visible')
        //         .click();


        // });

        // cy.url('http://192.168.10.36:4300/hrm/employee-profile/employee-info', () => {

        //     cy.get('#mat-input-0', { timeout: 10000 }).should('be.visible');

        // Fill up the form
        cy.get('#mat-input-0').type(dataEmployeeDetails.emp_ID);
        cy.get('#mat-input-1').type(dataEmployeeDetails.full_name_EN);
        cy.get('#mat-input-2').type(dataEmployeeDetails.full_name_BN);
        cy.get('#mat-input-3').type(dataEmployeeDetails.father_name_EN);
        cy.get('#mat-input-4').type(dataEmployeeDetails.mother_name_EN);

        //     // Dropdowns
        //     cy.get('#mat-select-0').click();
        //     cy.contains('mat-option', dataEmployeeDetails.religion).click();

        //     cy.get('#mat-select-1').click();
        //     cy.contains('mat-option', dataEmployeeDetails.blood_group).click();

        // });



        //  cy.origin('http://192.168.10.36:4200', () => {            

        //     cy.get('#mat-input-0', { timeout: 10000 }) // এইটা employee form এর input field
        //         .should('be.visible')
        //         .type(dataEmployeeDetails.emp_ID);
        // });
        // cy.origin('http://192.168.10.36:4200', () => {
        //     cy.contains('#mat-input-0', { timeout: 10000 })  // anchor ট্যাগ যেটার ভিতরে লেখা আছে "Employee Details"
        //         .should('be.visible')
        //         .type(dataEmployeeDetails.emp_ID);
        // });


        // cy.get('#mat-input-0').type(dataEmployeeDetails.emp_ID);
        // cy.get('#mat-input-1').type(dataEmployeeDetails.full_name_EN);
        // cy.get('#mat-input-2').type(dataEmployeeDetails.full_name_BN);
        // cy.get('#mat-input-3').type(dataEmployeeDetails.father_name_EN);
        // cy.get('#mat-input-4').type(dataEmployeeDetails.father_name_BN);



    }
}

export default EmployeeDetailsPage;
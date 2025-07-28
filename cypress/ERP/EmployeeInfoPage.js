//import { faker } from '@faker-js/faker';
class EmployeeInfoPage {

  EmployeeInfo() {
    //const empID = faker.number(5).toString().padStart(5, '0'); // Generates a random 5-digit number
    // const empNameEN = faker.person.fullName();
    // const nomineeFather = faker.person.fullName();
    // const nomineeMother = faker.person.fullName();

    //cy.get(':nth-child(3) > :nth-child(2) > .text-2xl').click();
 cy.contains('Employee', { timeout: 10000 })
        .should('be.visible')
        .click();
    cy.origin('http://192.168.10.36:4300', () => {

      //cy.get("span[class='ng-tns-c321347134-2']").click();
      
      cy.get('.mat-mdc-tooltip-trigger.fuse-vertical-navigation-item.ng-tns-c321347134-5').click();

      cy.contains('a', 'Employee Details', { timeout: 10000 })
        .should('be.visible')
        .click();
      cy.visit('/hrm/employee-profile/employee-info');

      // const empNumber = 3; // Example: for EMP003
      // const empId = `EMP${empNumber.toString().padStart(4, '0')}`;

      // cy.get('#mat-input-0').clear().type(empId);

      //cy.get('input[matinput][type="text"][required][aria-required="true"][aria-describedby="mat-mdc-error-12"]').type('EMP031');
      cy.get('common-input-field[controlname="employeeId"] input')
        .should('be.visible')
        .clear()
        .type('EMP084');

      cy.get('common-input-field[controlname="employeeNameEn"] input')
        .should('be.visible')
        .clear()
        .type('Md. Niamul Islam');
      // cy.get('#mat-input-2').type('মোঃ নিয়ামুল ইসলাম');employeeNameBn
      cy.get('common-input-field[controlname="employeeNameBn"] input')
        .should('be.visible')
        .clear()
        .type('মোঃ নিয়ামুল ইসলাম');
      // cy.get('#mat-input-3').type('Md. Abdur Rahman');fatherNameEn
      cy.get('common-input-field[controlname="fatherNameEn"] input')
        .should('be.visible')
        .clear()
        .type('Md. Abdur Rahman');
      // cy.get('#mat-input-4').type('মোঃ আবদুর রহমান');fatherNameBn
      cy.get('common-input-field[controlname="fatherNameBn"] input')
        .should('be.visible')
        .clear()
        .type('মোঃ আবদুর রহমান');
      // cy.get('#mat-input-5').type('Mst. Tahura Begum');motherNameEn
      cy.get('common-input-field[controlname="motherNameEn"] input')
        .should('be.visible')
        .clear()
        .type('Mst. Tahura Begum');
      // cy.get('#mat-input-6').type('মোসা. তহুরা বেগম');motherNameBn
      cy.get('common-input-field[controlname="motherNameBn"] input')
        .should('be.visible')
        .clear()
        .type('মোসা. তহুরা বেগম');
      // cy.get('#mat-input-7').type('12/8/1990  ');dob
      // cy.get('common-input-field[controlname="dob"] input')
      //   .should('be.visible')
      //   .clear()
      //   .type('12/8/1990');
      cy.get('input[placeholder="DD-MM-YYYY"][data-mat-calendar="mat-datepicker-0"]').clear().type('01-01-2001')

      // cy.get('#mat-input-7')
      //   .should('be.visible')
      //   .clear()
      //   .type('12/8/1990');
      // cy.get('#mat-input-8').type('Thakurgaon');placeOfBirth
      cy.get('common-input-field[controlname="placeOfBirth"] input')
        .should('be.visible')
        .clear()
        .type('Thakurgaon');
      // cy.get('#mat-input-9').type('5845125456');birthCertificateNo
      cy.get('common-input-field[controlname="birthCertificateNo"] input')
        .should('be.visible')
        .clear()
        .type('5845125456');
      // cy.get('#mat-input-10').type('Bangladeshi');nationality
      cy.get('common-input-field[controlname="nationality"] input')
        .should('be.visible')
        .clear()
        .type('Bangladeshi');
      // cy.get('#mat-input-11').type('9854585487985');nid
      cy.get('common-input-field[controlname="nid"] input')
        .should('be.visible')
        .clear()
        .type('9854585487985');

      // cy.get('[controlname="religion"] mat-select').click({ force: true });
      // cy.get('mat-option').contains('Islam').click({ force: true });
      cy.get('#mat-select-value-1').click();
      cy.get('.mat-select-search-inner-row > .mat-select-search-input').type('Islam');
      cy.get('#mat-option-32 > .mdc-list-item__primary-text').click();

      // cy.get('[controlname="bloodGroup"] mat-select').click({ force: true });
      // cy.get('mat-option').contains('O+').click({ force: true });
      cy.get('#mat-select-value-2').click();
      cy.get('.mat-select-search-inner-row > .mat-select-search-input').type('O+');//bloodGroup
      cy.get('#mat-option-42 > .mdc-list-item__primary-text').click();


      // cy.get('#mat-input-12').type('5.9');height
      cy.get('common-input-field[controlname="height"] input')
        .should('be.visible')
        .clear()
        .type('5.9');
      // cy.get('#mat-input-13').type('90');weight
      cy.get('common-input-field[controlname="weight"] input')
        .should('be.visible')
        .clear()
        .type('90');

      // cy.get('#mat-select-value-0').click('Married');maritalStatus
      cy.get('[controlname="maritalStatus"] mat-select').click({ force: true });
      cy.get('mat-option').contains('Married').click({ force: true });

      cy.get('input[placeholder="DD-MM-YYYY"][data-mat-calendar="mat-datepicker-1"]')
        .clear()
        .type('01-01-2012')

      // cy.get('#mat-input-16').type('01308194737');homePhone
      cy.get('common-input-field[controlname="homePhone"] input')
        .should('be.visible')
        .clear()
        .type('01308194737');
      // cy.get('#mat-input-17').type('01723339875');personalMobileNo
      cy.get('common-input-field[controlname="personalMobileNo"] input')
        .should('be.visible')
        .clear()
        .type('01723339875');
      // cy.get('#mat-input-18').type('01723339875');officialMobileNo
      cy.get('common-input-field[controlname="officialMobileNo"] input')
        .should('be.visible')
        .clear()
        .type('01723339875');
      // cy.get('#mat-input-19').type('nishamulislam@gmail.com');personalEmail
      cy.get('common-input-field[controlname="personalEmail"] input')
        .should('be.visible')
        .clear()
        .type('nishamulislam@gmail.com');
      // cy.get('#mat-input-20').type('niamul.islam@leads-bd.com');officialEmail
      cy.get('common-input-field[controlname="officialEmail"] input')
        .should('be.visible')
        .clear()
        .type('niamul.islam@leads-bd.com');
      // cy.get('#mat-input-21').type('4858'); extensionNo
      cy.get('common-input-field[controlname="extensionNo"] input')
        .should('be.visible')
        .clear()
        .type('4858');
      // cy.get('#mat-input-22').type('2415652545');passportNo
      cy.get('common-input-field[controlname="passportNo"] input')
        .should('be.visible')
        .clear()
        .type('2415652545');
      // cy.get('#mat-input-23').type('Dhaka');placeOfIssue
      cy.get('common-input-field[controlname="placeOfIssue"] input')
        .should('be.visible')
        .clear()
        .type('Dhaka');
      // cy.get('#mat-input-24').type('01/01/2015');issueDate
      cy.get('#mat-input-24')
        .should('be.visible')
        .clear()
        .type('01/01/2015');
      // cy.get('#mat-input-25').type('31/12/2030');expireDate
      cy.get('#mat-input-25')
        .should('be.visible')
        .clear()
        .type('31/12/2030');
      // cy.get('#mat-input-26').type('98758745789');drivingLicenseNo
      cy.get('common-input-field[controlname="drivingLicenseNo"] input')
        .should('be.visible')
        .clear()
        .type('98758745789');



      cy.get('[controlname="presentCountry"] mat-select').click({ force: true });
      cy.get('mat-option').contains('Bangladesh').click({ force: true });
      cy.get('[controlname="presentDivision"] mat-select').click({ force: true });
      cy.get('mat-option').contains('Dhaka').click({ force: true });
      cy.get('[controlname="presentDistrict"] mat-select').click({ force: true });
      cy.get('mat-option').contains('Dhaka').click({ force: true });
      cy.get('[controlname="presentUpazila"] mat-select').click({ force: true });
      cy.get('mat-option').contains('Rupganj').click({ force: true });

      // cy.get('[controlname="presentPostCode"] mat-select').click({ force: true });
      // cy.get('mat-option').contains('1207').click({ force: true });
      cy.get('common-input-field[controlname="presentPostCode"] input')
        .should('be.visible')
        .clear()
        .type('1207');
      cy.get('common-input-textarea[controlname="presentAddress"] textarea')
        .should('be.visible')
        .type('Section-6, Block-C, Mirpur');




      cy.get('[controlname="permanentCountry"] mat-select').click({ force: true });
      cy.get('mat-option').contains('Bangladesh').click({ force: true });
      cy.get('[controlname="permanentDivision"] mat-select').click({ force: true });
      cy.get('mat-option').contains('Dhaka').click({ force: true });
      cy.get('[controlname="permanentDistrict"] mat-select').click({ force: true });
      cy.get('mat-option').contains('Dhaka').click({ force: true });
      cy.get('[controlname="permanentUpazila"] mat-select').click({ force: true });
      cy.get('mat-option').contains('Rupganj').click({ force: true });

      cy.get('common-input-field[controlname="permanentPostCode"] input')
        .should('be.visible')
        .clear()
        .type('1207');

      cy.get('common-input-textarea[controlname="permanentAddress"] textarea')
        .should('be.visible')
        .type('Section-6, Block-C, Mirpur');


      cy.get('common-input-field[controlname="contactPerson"] input')
        .should('be.visible')
        .clear()
        .type('Mukta Akter');
      cy.get('common-input-field[controlname="contactPersonRelation"] input')
        .should('be.visible')
        .clear()
        .type('Wife');
      cy.get('common-input-field[controlname="contactNo"] input')
        .should('be.visible')
        .clear()
        .type('01308194737');
      cy.get('common-input-field[controlname="contactNidNo"] input')
        .should('be.visible')
        .clear()
        .type('9875874578921');
      cy.get('common-input-field[controlname="contactEmail"] input')
        .should('be.visible')
        .clear()
        .type('mukta@gmail.com');



      cy.get('[controlname="contactCountry"] mat-select').click({ force: true });
      cy.get('mat-option').contains('Bangladesh').click({ force: true });
      cy.get('[controlname="contactDivision"] mat-select').click({ force: true });
      cy.get('mat-option').contains('Dhaka').click({ force: true });
      cy.get('[controlname="contactDistrict"] mat-select').click({ force: true });
      cy.get('mat-option').contains('Dhaka').click({ force: true });
      cy.get('[controlname="contactUpazila"] mat-select').click({ force: true });
      cy.get('mat-option').contains('Rupganj').click({ force: true });

      cy.get('common-input-field[controlname="contactPostCode"] input')
        .should('be.visible')
        .clear()
        .type('1207');
      cy.get('common-input-textarea[controlname="contactAddress"] textarea')
        .should('be.visible')
        .type('Section-6, Block-C, Mirpur');



      cy.contains('button', 'Save & Next')
        .should('not.be.disabled')  // waits until it's enabled
        .click()

      //cy.get(':nth-child(2) > .mdc-button > .mdc-button__label > .flex > span').click();
      //cy.get(':nth-child(3) > .mdc-button > .mdc-button__label > .flex > span').click();
    });



    // const dataMenuSearch = Cypress.env('excelData');

    // cy.url().should('eq', dataMenuSearch.HomePageUrl);
    // cy.get('#txtMenuSearch').type(dataMenuSearch.fast_path).type('{enter}');

  }
}

export default EmployeeInfoPage;


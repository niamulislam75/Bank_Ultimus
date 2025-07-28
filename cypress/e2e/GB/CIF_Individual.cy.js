const { readExcelData } = require('../../support/readExcel.js'); // Node-style import
import LoginPage from '../../BUltimus/LogIn.js'; // ES Module import
import GoToFastPath from '../../BUltimus/GoToFastPath.js'
import CIFInfo from '../../BUltimus/CIF_Individual_Info.js'
import DoLogOut from '../../BUltimus/LogOut.js';
import AuthorizeCustomer from '../../BUltimus/AuthorizeCustomer.js';
import CustomerInquiry from '../../BUltimus/CustomerInquiry.js';

describe('Login Test Using Excel Data', () => {

  const loginPage = new LoginPage();
  const fastPath = new GoToFastPath();
  const cifInfo = new CIFInfo();
  const logOut = new DoLogOut();
  const authCustomer = new AuthorizeCustomer();
  const customerInq = new CustomerInquiry();




  it('should Create a Customer (Individual)', () => {

    //Login with valid User ID
    cy.task('readExcel', {
      fileName: 'CIF_Data.xlsx',
      sheetName: 'Sheet1'
    }).then((dataLogin) => {
      Cypress.env('excelData', dataLogin[0]); // Use first row
      loginPage.Login();
    });


    // Go to Customer Individual Page (FP: 1501)
    cy.task('readExcel', {
      fileName: 'CIF_Data.xlsx',
      sheetName: 'Sheet2'
    }).then((dataFastPath) => {
      Cypress.env('excelData', dataFastPath[0]); // Use first row
      fastPath.FastPath();
    });

    // Fill in Customer Individual Page -BASIC INFO (FP: 1501)
    cy.task('readExcel', {
      fileName: 'CIF_Data.xlsx',
      sheetName: 'Sheet3'
    }).then((dataCIFInfo) => {
      Cypress.env('excelData', dataCIFInfo[0]); // Use first row
      cifInfo.cifInfo();
    });


    logOut.LogOut();    //Log out from the first user

    //Login with valid User ID to Authorize CIF
    cy.task('readExcel', {
      fileName: 'CIF_Data.xlsx',
      sheetName: 'Sheet1'
    }).then((dataLogin) => {
      Cypress.env('excelData', dataLogin[1]); // Use second row
      loginPage.Login();
    });


    // Go to Non-Financial Authorization Page (FP: 8002)
    cy.task('readExcel', {
      fileName: 'CIF_Data.xlsx',
      sheetName: 'Sheet2'
    }).then((dataFastPath) => {
      Cypress.env('excelData', dataFastPath[1]); // Use first row
      fastPath.FastPath();
    });

    //Authorize Individual Customer
    cy.task('readExcel', {
      fileName: 'CIF_Data.xlsx',
      sheetName: 'NftAuth'
    }).then((authorizeCustomer) => {
      Cypress.env('excelData', authorizeCustomer[0]); // Use first row
      authCustomer.AuthorizeCust();
    });

    cy.wait(3000)

    cy.task('readExcel', {
      fileName: 'CIF_Data.xlsx',
      sheetName: 'Sheet2'
    }).then((custInq) => {
      Cypress.env('excelData', custInq[2]); // Use seocnd row
      customerInq.CustInquiry();
    });




  });

});
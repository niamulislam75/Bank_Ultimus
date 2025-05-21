const { readExcelData } = require('../support/readExcel.js'); // Node-style import
import LoginPage from '../BUltimus/LogIn.js'; // ES Module import
import GoToCIFPage from '../BUltimus/CIFPage.js'
import CIFInfo from '../BUltimus/CIFInfo.js'
import DoLogOut from '../BUltimus/LogOut.js';
import GoToAuthPage from '../BUltimus/GoToAuthPage.js';
import AuthorizeCustomer from '../BUltimus/AuthorizeCustomer.js';
import CustomerInquiry from '../BUltimus/CustomerInquiry.js';

describe('Login Test Using Excel Data', () => {
  
  const loginPage = new LoginPage();
  const cifPage = new GoToCIFPage();
  const cifInfo = new CIFInfo();
  const logOut = new DoLogOut();
  const authPage = new GoToAuthPage();
  const authCustomer = new AuthorizeCustomer();
  const customerInq = new CustomerInquiry();

  

  it('should Create a Customer (Individual)', () => {

    //Login with valid User ID
    cy.task('readExcel', {
      fileName: 'loginData.xlsx',
      sheetName: 'Sheet1'
    }).then((dataLogin) => {
      Cypress.env('excelData', dataLogin[0]); // Use first row
      loginPage.Login();
    });
    
    
    // Go to Customer Individual Page (FP: 1501)
    cy.task('readExcel', {
      fileName: 'loginData.xlsx',
      sheetName: 'Sheet2'
    }).then((dataCIFPage) => {
      Cypress.env('excelData', dataCIFPage[0]); // Use first row
      cifPage.CIFPage();
    });

    // Fill in Customer Individual Page -BASIC INFO (FP: 1501)
    cy.task('readExcel', {
      fileName: 'loginData.xlsx',
      sheetName: 'Sheet3'
    }).then((dataCIFInfo) => {
      Cypress.env('excelData', dataCIFInfo[0]); // Use first row
      cifInfo.cifInfo();
    });


    logOut.LogOut();    //Log out from the first user

    //Login with valid User ID to Authorize CIF
    cy.task('readExcel', {
      fileName: 'loginData.xlsx',
      sheetName: 'Sheet1'
    }).then((dataLogin) => {
      Cypress.env('excelData', dataLogin[1]); // Use second row
      loginPage.Login();
    });


    // Go to Non-Financial Authorization Page (FP: 8002)
    cy.task('readExcel', {
      fileName: 'loginData.xlsx',
      sheetName: 'Sheet2'
    }).then((dataAuthPage) => {
      Cypress.env('excelData', dataAuthPage[1]); // Use seocnd row
      authPage.AuthPage();
    });

    authCustomer.AuthorizeCust();

    cy.wait(3000)

    cy.task('readExcel', {
      fileName: 'loginData.xlsx',
      sheetName: 'Sheet2'
    }).then((custInq) => {
      Cypress.env('excelData', custInq[2]); // Use seocnd row
      customerInq.CustInquiry();
    });


    

  });

});
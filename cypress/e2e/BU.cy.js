const { readExcelData } = require('../support/readExcel.js'); // Node-style import
import LoginPage from '../support/BUltimus/LoginPage.js'; // ES Module import
import GoToCIFPage from '../support/BUltimus/CIFPage.js'
import CIFInfo from '../support/BUltimus/CIFInfo.js'

describe('Login Test Using Excel Data', () => {
  
  const loginPage = new LoginPage();
  const cifPage = new GoToCIFPage();
  const cifInfo = new CIFInfo();
  

  it('should login using Excel data', () => {

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

    

  });

});
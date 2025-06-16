import LoginPage from '../BUltimus/LogIn.js'; // ES Module import
import GoToFastPath from '../BUltimus/GoToFastPath.js';
import CIFOrgInfo from '../BUltimus/CIF_Organization.js';
import DoLogOut from '../BUltimus/LogOut.js';
import AuthorizeCustomer from '../BUltimus/AuthorizeCustomer.js';
import CustomerInquiry from '../BUltimus/CustomerInquiry.js';

describe('This suit is for CIF Organization', () => {

    const loginPage = new LoginPage();
    const fastPath = new GoToFastPath();
    const cifOrgInfo = new CIFOrgInfo();
    const logOut = new DoLogOut();
    const authCustomer = new AuthorizeCustomer();
    const customerInq = new CustomerInquiry();

    it('Create CIF Organization profile', () => {

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
        }).then((dataFastPath) => {
            Cypress.env('excelData', dataFastPath[0]); // Use first row
            fastPath.FastPath();
        });

        //Fill in Customer Profile Organization (FP: 1502)
        cy.task('readExcel', {
            fileName: 'loginData.xlsx',
            sheetName: 'Sheet4'
        }).then((dataCIFOrgInfo) => {
            Cypress.env('excelData', dataCIFOrgInfo[0]); // Use first row
            cifOrgInfo.cifOrgInfo();
        });



    });
});
import LoginPage from '../../BUltimus/LogIn.js'; // ES Module import
import GoToFastPath from '../../BUltimus/GoToFastPath.js';
import CIFOrgInfo from '../../BUltimus/CIF_Organization_Info.js';
import DoLogOut from '../../BUltimus/LogOut.js';
import AuthorizeCustomer from '../../BUltimus/AuthorizeCustomer.js';
import CustomerInquiry from '../../BUltimus/CustomerInquiry.js';

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
            fileName: 'CIF_Data.xlsx',
            sheetName: 'Sheet1'
        }).then((dataLogin) => {
            Cypress.env('excelData', dataLogin[3]); // Use first row
            loginPage.Login();
        });


        // Go to Customer Individual Page (FP: 1502)
        cy.task('readExcel', {
            fileName: 'CIF_Data.xlsx',
            sheetName: 'Sheet2'
        }).then((dataFastPath) => {
            Cypress.env('excelData', dataFastPath[3]); // Use Fourth row
            fastPath.FastPath();
        });

        //Fill in Customer Profile Organization (FP: 1502)
        cy.task('readExcel', {
            fileName: 'CIF_Data.xlsx',
            sheetName: 'CIF_Org(1503)'
        }).then((dataCIFOrgInfo) => {
            Cypress.env('excelData', dataCIFOrgInfo[0]); // Use first row
            cifOrgInfo.cifOrgInfo();
        });

        logOut.LogOut();

        //Login with valid User ID to Authorize CIF [Organization]
        cy.task('readExcel', {
            fileName: 'CIF_Data.xlsx',
            sheetName: 'Sheet1'
        }).then((dataLogin) => {
            Cypress.env('excelData', dataLogin[4]); // Use second row
            loginPage.Login();
        });

        //Go to Authorization Page (FP: 8002)
        cy.task('readExcel', {
            fileName: 'CIF_Data.xlsx',
            sheetName: 'Sheet2'
        }).then((dataFastPath) => {
            Cypress.env('excelData', dataFastPath[1]); // Use first row
            fastPath.FastPath();
        });

        //Authorize Organization Customer
        cy.task('readExcel', {
            fileName: 'CIF_Data.xlsx',
            sheetName: 'NftAuth'
        }).then((authorizeCustomer) => {
            Cypress.env('excelData', authorizeCustomer[1]); // Use first row
            authCustomer.AuthorizeCust();
        });

        cy.wait(3000)

        //Customer Inquiry
        cy.task('readExcel', {
            fileName: 'CIF_Data.xlsx',
            sheetName: 'Sheet2'
        }).then((custInq) => {
            Cypress.env('excelData', custInq[2]); // Use seocnd row
            customerInq.CustInquiry();
        });


    });
});
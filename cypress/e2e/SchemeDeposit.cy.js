
const { readExcelData } = require('../support/readExcel.js'); // Node-style import
import LoginPage from '../BankUltimus/Common/LoginPage'; // ES Module import
import MenuSearch from '../BankUltimus/Common/MenuSearch'; // ES Module import
import SchemeDepositAccOpen from '../BankUltimus/Deposit/SchemeDepositAccOpenPage'; // ES Module import 
import LogoutPage from '../BankUltimus/Common/LogoutPage'; // ES Module import
describe('Bank Ultimus', () => {
    it('Step 1: Scheme Deposit Account Open', function () {
        const loginPage = new LoginPage();
        const menuSearch = new MenuSearch();
        const sdAccOpen = new SchemeDepositAccOpen();
        const logoutPage = new LogoutPage();
        //Login with valid Maker User ID
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'Login'
        }).then((dataLogin) => {
            Cypress.env('excelData', dataLogin[0]); // Use first row
            loginPage.Login();
        });

        // Go to DDAccOpen Page (FP: 2001)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[8]); // Use first row
            menuSearch.menu();
        });
        // Fill up all information at 2001
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'SDAccOpen'
        }).then((dataSDAccOpen) => {
            Cypress.env('excelData', dataSDAccOpen[0]); // Use first row
            sdAccOpen.SDAccOpen();
        });
        logoutPage.Logout();//logout maker user   

    });



})
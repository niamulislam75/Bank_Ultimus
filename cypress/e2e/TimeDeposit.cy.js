
const { readExcelData } = require('../support/readExcel.js'); // Node-style import
import LoginPage from '../BankUltimus/Common/LoginPage'; // ES Module import
import MenuSearch from '../BankUltimus/Common/MenuSearch'; // ES Module import
import TimeDepositAccOpen from '../BankUltimus/Deposit/TimeDepositAccOpenPage'; // ES Module import 
import LogoutPage from '../BankUltimus/Common/LogoutPage'; // ES Module import
describe('Bank Ultimus', () => {
    it('Step 1: Time Deposit Account Open', function () {
        const loginPage = new LoginPage();
        const menuSearch = new MenuSearch();
        const tdAccOpen = new TimeDepositAccOpen();
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
            Cypress.env('excelData', dataMenuSearch[7]); // Use first row
            menuSearch.menu();
        });
        // Fill up all information at 2001
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'TDAccOpen'
        }).then((dataTDAccOpen) => {
            Cypress.env('excelData', dataTDAccOpen[0]); // Use first row
            tdAccOpen.TDAccOpen();
        });
        logoutPage.Logout();//logout maker user   

    });



})
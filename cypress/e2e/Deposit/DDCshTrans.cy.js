const { readExcelData } = require('../support/readExcel.js'); // Node-style import
import LoginPage from '../BankUltimus/Common/LoginPage'; // ES Module import
import MenuSearch from '../BankUltimus/Common/MenuSearchPage'; // ES Module import
import DDCashTrans from '../BankUltimus/Deposit/DemandDepositCashTransPage'; // ES Module import


describe('Bank Ultimus', () => {
    it('login test', function () {

        const loginPage = new LoginPage();
        const menuSearch = new MenuSearch();
        const ddCashTrans = new DDCashTrans();


        //Login with valid Checker User ID
        cy.task('readExcel', {
            fileName: 'loginData33.xlsx',
            sheetName: 'Login'
        }).then((dataLogin) => {
            Cypress.env('excelData', dataLogin[1]); // Use 2nd row
            loginPage.Login();
        });

        //Go to DDCashTransaction Page (FP: 7001)
        cy.task('readExcel', {
            fileName: 'loginData33.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[6]); // Use first row
            menuSearch.menu();
        });

        //ddtrfTrans.DDCashTrans();
        //Make DDCashTransaction (FP: 7031)
        cy.task('readExcel', {
            fileName: 'loginData33.xlsx',
            sheetName: 'DDTrans'
        }).then((dataddCashTrans) => {
            Cypress.env('excelData', dataddCashTrans[0]); // Use first row
            ddCashTrans.DDCashTrans();
        });

        // logoutPage.Logout(); //Logout transaction Maker User ID

        // //Login with valid Checker User ID
        // cy.task('readExcel', {
        //     fileName: 'loginData33.xlsx',
        //     sheetName: 'Login'
        // }).then((dataLogin) => {
        //     Cypress.env('excelData', dataLogin[0]); // Use first row
        //     loginPage.Login();
        // });

        // //Go to Transaction Authorize Page (FP: 8001)
        // cy.task('readExcel', {
        //     fileName: 'loginData33.xlsx',
        //     sheetName: 'MenuSearch'
        // }).then((dataMenuSearch) => {
        //     Cypress.env('excelData', dataMenuSearch[3]); // Use first row
        //     menuSearch.menu();
        // });

        // // Transaction Authorize (FP: 8001)
        // cy.task('readExcel', {
        //     fileName: 'loginData33.xlsx',
        //     sheetName: 'TransAuth'
        // }).then((dataTransAuth) => {
        //     Cypress.env('excelData', dataTransAuth[0]); // Use first row
        //     transAuth.TransAuth();
        // });

        // //Go to Account Inquary page (FP: 2011)
        // cy.task('readExcel', {
        //     fileName: 'loginData33.xlsx',
        //     sheetName: 'MenuSearch'
        // }).then((dataMenuSearch) => {
        //     Cypress.env('excelData', dataMenuSearch[4]); // Use first row
        //     menuSearch.menu();
        // });
        //
        //Go to Account Inquary page (FP: 2011)
        // cy.task('readExcel', {
        //     fileName: 'loginData33.xlsx',
        //     sheetName: 'AccountInquary'
        // }).then((dataAccountInquary) => {
        //     Cypress.env('excelData', dataAccountInquary[0]); // Use first row     
          //  accInquary.AccInquary();
        // });


    })

})



























































































































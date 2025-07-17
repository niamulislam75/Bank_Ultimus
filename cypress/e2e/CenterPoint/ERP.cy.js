const { readExcelData } = require('../../support/readExcel.js'); // Node-style import
import ERPLoginPage from '../../ERP/ERPLoginPage'; // ES Module import
//import EmployeeDetails from '../../ERP/EmployeeDetailsPage'; // ES Module import
import EmployeeInfoDetails from '../../ERP/EmployeeInfoDetailsPage'; // ES Module import

describe('Bank Ultimus', () => {
    it('Step 1: Employee Details', function () {
        const erplogin = new ERPLoginPage();
        const employeeDetails = new EmployeeInfoDetails();
        //const menuSearch = new MenuSearch2();

        //Login with valid Maker User ID
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'Login'
        }).then((dataLogin) => {
            Cypress.env('excelData', dataLogin[2]); // Use first row
            erplogin.erpLogin();
        });

        //Go to NFTAuthQueue Page (FP: 8002)
        // cy.task('readExcel', {
        //     fileName: 'loginData3.xlsx',
        //     sheetName: 'EmployeeDetails'
        // }).then((dataMenuSearch) => {
        //     Cypress.env('excelData', dataMenuSearch[0]); // Use 2nd row
        //     menuSearch.menu2();
        // });
         employeeDetails.EmployeeInfoDetails();
        // //Fill up all information at 3111
        // cy.task('readExcel', {
        //     fileName: 'loginData3.xlsx',
        //     sheetName: 'EmployeeDetails'
        // }).then((dataEmployeeDetails) => {
        //     Cypress.env('excelData', dataEmployeeDetails[0]); // Use first row
        //     employeeDetails.EmployeeDetails();
        // });

        // logoutPage.Logout();//logout maker user   

        // //Login with valid Maker User ID
        // cy.task('readExcel', {
        //     fileName: 'loginData3.xlsx',
        //     sheetName: 'Login'
        // }).then((dataLogin) => {
        //     Cypress.env('excelData', dataLogin[1]); // Use first row
        //     loginPage.Login();
        // });
        // //Go to NFTAuthQueue Page (FP: 8002)
        // cy.task('readExcel', {
        //     fileName: 'loginData3.xlsx',
        //     sheetName: 'MenuSearch'
        // }).then((dataMenuSearch) => {
        //     Cypress.env('excelData', dataMenuSearch[1]); // Use 2nd row
        //     menuSearch.menu();
        // });
        // // Authoriza Page (FP: 8002)
        // cy.task('readExcel', {
        //     fileName: 'loginData3.xlsx',
        //     sheetName: 'NftAuth'
        // }).then((dataNftAuth) => {
        //     Cypress.env('excelData', dataNftAuth[2]); // Use first row
        //     nftAuthorize.NftAuth();
        // });

    });



})
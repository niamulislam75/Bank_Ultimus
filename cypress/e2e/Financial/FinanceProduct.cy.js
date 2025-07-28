const { readExcelData } = require('../../support/readExcel.js'); // Node-style import
import LoginPage from '../../BankUltimus/Common/LoginPage'; // ES Module import
import MenuSearch from '../../BankUltimus/Common/MenuSearchPage'; // ES Module import
import DefineCreditLine from '../../BankUltimus/Finance/Lon_DefineCreditLinePage'; // ES Module import 
import LogoutPage from '../../BankUltimus/Common/LogoutPage'; // ES Module import
import NFTAuthorize from '../../BankUltimus/Common/NFTAuthorizeQueuePage'; // ES Module import

describe('Bank Ultimus', () => {
    it('Step 1: Scheme Deposit Account Open', function () {
        const loginPage = new LoginPage();
        const menuSearch = new MenuSearch();
        const defineCLine = new DefineCreditLine();
        const logoutPage = new LogoutPage();
        const nftAuthorize = new NFTAuthorize();
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
            Cypress.env('excelData', dataMenuSearch[9]); // Use first row
            menuSearch.menu();
        });
        // Fill up all information at 2001
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'DefineCreditLine'
        }).then((dataDefineCLine) => {
            Cypress.env('excelData', dataDefineCLine[0]); // Use first row
            defineCLine.DefineCreditLine();
        });

        logoutPage.Logout();//logout maker user   

        //Login with valid Maker User ID
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'Login'
        }).then((dataLogin) => {
            Cypress.env('excelData', dataLogin[1]); // Use first row
            loginPage.Login();
        });
        //Go to NFTAuthQueue Page (FP: 8002)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[1]); // Use 2nd row
            menuSearch.menu();
        });
        // Authoriza Page (FP: 8002)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'NftAuth'
        }).then((dataNftAuth) => {
            Cypress.env('excelData', dataNftAuth[2]); // Use first row
            nftAuthorize.NftAuth();
        });

    });



})
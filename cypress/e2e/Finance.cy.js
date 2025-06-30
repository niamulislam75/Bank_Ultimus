const { readExcelData } = require('../support/readExcel.js'); // Node-style import
import LoginPage from '../BankUltimus/Common/LoginPage'; // ES Module import
import MenuSearch from '../BankUltimus/Common/MenuSearch'; // ES Module import
import FinancialProposalRegister from '../BankUltimus/Finance/Lon_FinancialProposalRegisterPage'; // ES Module import 
import LogoutPage from '../BankUltimus/Common/LogoutPage'; // ES Module import
import NFTAuthorize from '../BankUltimus/Common/NFTAuthorizeQueuePage2'; // ES Module import

describe('Bank Ultimus', () => {
    it('Step 1: Financial Proposal Register', function () {
        const loginPage = new LoginPage();
        const menuSearch = new MenuSearch();
        const financialProposal = new FinancialProposalRegister();
        const logoutPage = new LogoutPage(); 


        // //Login with valid Maker User ID
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'Login'
        }).then((dataLogin) => {
            Cypress.env('excelData', dataLogin[0]); // Use first row
            loginPage.Login();
        });

        // Go to Financial proposal Page (FP: 3111)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[10]); // Use first row
            menuSearch.menu();
        });
        // Fill up all information at 3111
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'FinProposalRegister'
        }).then((dataFinancialProposal) => {
            Cypress.env('excelData', dataFinancialProposal[0]); // Use first row
            financialProposal.FinancialProposalRegister();
        });

        logoutPage.Logout();//logout maker user   
         

    });
it('Step 1: Financial Proposal Register Auth', function () {
        const loginPage = new LoginPage();
        const menuSearch = new MenuSearch();
        const nftAuthorize = new NFTAuthorize();
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
            Cypress.env('excelData', dataNftAuth[3]); // Use first row
            nftAuthorize.NftAuth();
        });

    });

})
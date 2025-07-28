
const { readExcelData } = require('../../support/readExcel.js'); // Node-style import
import LoginPage from '../../BankUltimus/Common/LoginPage'; // ES Module import
import MenuSearch from '../../BankUltimus/Common/MenuSearchPage'; // ES Module import
import TimeDepositAccOpen from '../../BankUltimus/Deposit/TimeDepositAccOpenPage'; // ES Module import 
import LogoutPage from '../../BankUltimus/Common/LogoutPage'; // ES Module import
import NFTAuthorize from '../../BankUltimus/Common/NFTAuthorizeQueuePage'; // ES Module import
import TimeDepositTrfTrans from '../../BankUltimus/Deposit/TimeDepositTransferTransPage';
import TransAuth from '../../BankUltimus/Common/TransactionAuthorizePage'; // ES Module import
import AccInquary from '../../BankUltimus/Common/DepositAccountBalanceInquaryPage'; // ES Module import
import DepositAccNominee from '../../BankUltimus/Common/DepositAccNomineePage'; // ES Module import
import DepositAccBeneficiary from '../../BankUltimus/Common/DepositAccBeneficiaryPage'; // ES Module import
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

        // Go to Time Account Open Page (FP: 2002)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[7]); // Use first row
            menuSearch.menu();
        });
        // Fill up all information at 2002
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'TDAccOpen'
        }).then((dataTDAccOpen) => {
            Cypress.env('excelData', dataTDAccOpen[0]); // Use first row
            tdAccOpen.TDAccOpen();
        });
        logoutPage.Logout();//logout maker user   

    });
    it('Step 2: Time Deposit Account Authorize & Add Nominee', function () {
        const loginPage = new LoginPage();
        const menuSearch = new MenuSearch();
        const nftAuthorize = new NFTAuthorize();
        const logoutPage = new LogoutPage();
        const accNominee = new DepositAccNominee();
        //Login with valid Checker User ID
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
            Cypress.env('excelData', dataMenuSearch[1]); // Use first row
            menuSearch.menu();
        });
        // Authoriza Time Deposit Account (FP: 2002)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'NftAuth'
        }).then((dataNftAuth) => {
            Cypress.env('excelData', dataNftAuth[1]); // Use first row
            nftAuthorize.NftAuth();
        });
        //=========Nominee Information===========
        //Go to DepositAccNominee Page (FP: 2004)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[15]); // Use first row
            menuSearch.menu();
        });
        // Add Nominee For TD(FP: 2004)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'AccNominee'
        }).then((dataddtrfTrans) => {
            Cypress.env('excelData', dataddtrfTrans[0]); // Use first row
            accNominee.nominee();
        });
        logoutPage.Logout();//logout maker user     

    });
    it('Step 3: Nominee Authorize & & Add Beneficiary', function () {
        const loginPage = new LoginPage();
        const menuSearch = new MenuSearch();
        const nftAuthorize = new NFTAuthorize();
        const accBeneficiary = new DepositAccBeneficiary();
        const logoutPage = new LogoutPage();
        //Login with valid Checker User ID
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'Login'
        }).then((dataLogin) => {
            Cypress.env('excelData', dataLogin[0]); // Use first row
            loginPage.Login();
        });

        //Go to NFTAuthQueue Page (FP: 8002)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[1]); // Use first row
            menuSearch.menu();
        });
        // Authoriza Nominee (FP: 2004)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'NftAuth'
        }).then((dataNftAuth) => {
            Cypress.env('excelData', dataNftAuth[1]); // Use first row
            nftAuthorize.NftAuth();
        });

        //=========Beneficiary Information===========
        //Go to DepositAccBeneficiary Page (FP: 2005)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[18]); // Use first row
            menuSearch.menu();
        });
        // Add Nominee For DD(FP: 2004)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'DepoAccBeneficiary'
        }).then((dataBeneficiary) => {
            Cypress.env('excelData', dataBeneficiary[0]); // Use first row
            accBeneficiary.beneficiary();
        });

        logoutPage.Logout();//logout maker user
    });
    it('Step 4: Beneficiary Authorize & Transaction', function () {
        const loginPage = new LoginPage();
        const menuSearch = new MenuSearch();
        const nftAuthorize = new NFTAuthorize();
        const tdTrfTrans = new TimeDepositTrfTrans();
        const logoutPage = new LogoutPage();
        //Login with valid Checker User ID
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
            Cypress.env('excelData', dataMenuSearch[1]); // Use first row
            menuSearch.menu();
        });
        // Authoriza Nominee (FP: 2004)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'NftAuth'
        }).then((dataNftAuth) => {
            Cypress.env('excelData', dataNftAuth[7]); // Use first row
            nftAuthorize.NftAuth();
        });

        //Go to TDTrfTransaction Page (FP: 7033)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[13]); // Use first row
            menuSearch.menu();
        });

        //Make TDTrfTransaction (FP: 7033)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'TDTrans'
        }).then((dataTDtrfTrans) => {
            Cypress.env('excelData', dataTDtrfTrans[0]); // Use first row
            tdTrfTrans.TDtrfTrans();
        });

        logoutPage.Logout();//logout maker user
    });
    it('Step 5: Transaction Authorization & Balance Inquary', function () {
        const loginPage = new LoginPage();
        const menuSearch = new MenuSearch();
        const transAuth = new TransAuth();
        const accInquary = new AccInquary();
        //Login with valid Checker User ID
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'Login'
        }).then((dataLogin) => {
            Cypress.env('excelData', dataLogin[0]); // Use first row
            loginPage.Login();
        });

        //Go to Transaction Authorize Page (FP: 8001)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[3]); // Use first row
            menuSearch.menu();
        });
        // Transaction Authorize (FP: 8001)
        transAuth.TransAuth();
        //Go to Time Deposit Account Balance Inquary page (FP: 2012)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[14]); // Use first row
            menuSearch.menu();
        });
        // deposit account Balance inquary 
        accInquary.AccInquary();


    });


})
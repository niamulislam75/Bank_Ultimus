const { readExcelData } = require('../../support/readExcel.js'); // Node-style import
import LoginPage from '../../BankUltimus/Common/LoginPage'; // ES Module import
import MenuSearch from '../../BankUltimus/Common/MenuSearchPage'; // ES Module import
import DemandDepositAccOpen from '../../BankUltimus/Deposit/DemandDepositAccOpenPage'; // ES Module import 
import LogoutPage from '../../BankUltimus/Common/LogoutPage'; // ES Module import
import NFTAuthorize from '../../BankUltimus/Common/NFTAuthorizeQueuePage'; // ES Module import
import DDTrfTrans from '../../BankUltimus/Deposit/DemandDepositTransferTransPage'; // ES Module import
import TransAuth from '../../BankUltimus/Common/TransactionAuthorizePage'; // ES Module import
import AccInquary from '../../BankUltimus/Common/DepositAccountBalanceInquaryPage'; // ES Module import 
describe('Bank Ultimus', () => {

  it('Step 1: Demand Deposit Account Open', function () {
    const loginPage = new LoginPage();
    const menuSearch = new MenuSearch();
    const ddAccOpen = new DemandDepositAccOpen();
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
      Cypress.env('excelData', dataMenuSearch[0]); // Use first row
      menuSearch.menu();
    });
    // Fill up all information at 2001
    cy.task('readExcel', {
      fileName: 'loginData3.xlsx',
      sheetName: 'DDAccOpen'
    }).then((dataDDAccOpen) => {
      Cypress.env('excelData', dataDDAccOpen[0]); // Use first row
      ddAccOpen.DDAccOpen();
    });
    logoutPage.Logout();//logout maker user   
  });
  it('Step 2: Demand Deposit Account Authorize & Transaction', function () {
    const loginPage = new LoginPage();
    const menuSearch = new MenuSearch();
    const nftAuthorize = new NFTAuthorize();
    const ddtrfTrans = new DDTrfTrans();
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
      Cypress.env('excelData', dataMenuSearch[1]); // Use 2nd row
      menuSearch.menu();
    });
    // Authoriza DD Account (FP: 8002)
    cy.task('readExcel', {
      fileName: 'loginData3.xlsx',
      sheetName: 'NftAuth'
    }).then((dataNftAuth) => {
      Cypress.env('excelData', dataNftAuth[0]); // Use first row
      nftAuthorize.NftAuth();
    });
     //Go to DDTrfTransaction Page (FP: 7031)
    cy.task('readExcel', {
      fileName: 'loginData3.xlsx',
      sheetName: 'MenuSearch'
    }).then((dataMenuSearch) => {
      Cypress.env('excelData', dataMenuSearch[2]); // Use first row
      menuSearch.menu();
    });
    // ddtrfTrans.DDtrfTrans();
    // Make DDTrfTransaction (FP: 7031)
    cy.task('readExcel', {
      fileName: 'loginData3.xlsx',
      sheetName: 'DDTrans'
    }).then((dataddtrfTrans) => {
      Cypress.env('excelData', dataddtrfTrans[0]); // Use first row
      ddtrfTrans.DDtrfTrans();
    });
    logoutPage.Logout();//logout maker user

  });  
  it('Step 3: Transaction Authorization & Balance Inquary', function () {
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
    //Go to DD Account Balance Inquary page (FP: 2011)
    cy.task('readExcel', {
      fileName: 'loginData3.xlsx',
      sheetName: 'MenuSearch'
    }).then((dataMenuSearch) => {
      Cypress.env('excelData', dataMenuSearch[4]); // Use first row
      menuSearch.menu();
    });
    //demand deposit account Balance inquary 
    accInquary.AccInquary();

  });
})



























































































































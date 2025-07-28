const { readExcelData } = require('../../support/readExcel.js'); // Node-style import
import ERPLoginPage from '../../ERP/ERPLoginPage'; // ES Module import
import 'cypress-file-upload';


describe('Bank Ultimus', () => {
    it('Step 1: Testing', function () {
        //const erplogin = new ERPLoginPage();
        // const fileName = '19924.jpg';



        //Login with valid Maker User ID
        // cy.task('readExcel', {
        //     fileName: 'loginData3.xlsx',
        //     sheetName: 'Login'
        // }).then((dataLogin) => {
        //     Cypress.env('excelData', dataLogin[2]); // Use first row
        //     erplogin.erpLogin();
        // });



        // cy.origin('http://192.168.10.36:4300', () => {
        //     //require('cypress-file-upload');
        //     cy.visit('http://192.168.10.36:4300/hrm/employee-profile/photo-signature');

        //      require('cypress-file-upload');
        //     cy.log('Photo & Signature Page');

        //     // Just upload the NID image
        //     cy.get('input[type="file"][accept="image/*"]').eq(1).attachFile('19924.jpg');



        // });
        //If upload only 1 file
        // cy.fixture('document.pdf', 'base64').then(pdfBase64 => {
        //     cy.origin('http://192.168.10.36:4300', {

        //         args: { pdfBase64 }
        //     }, ({ pdfBase64 }) => {
        //         cy.visit('http://192.168.10.36:4300/hrm/employee-profile/attachment');
        //         // Convert base64 to File
        //         const binary = atob(pdfBase64);
        //         const array = [];
        //         for (let i = 0; i < binary.length; i++) {
        //             array.push(binary.charCodeAt(i));
        //         }
        //         const blob = new Blob([new Uint8Array(array)], { type: 'application/pdf' });
        //         const file = new File([blob], 'document.pdf', { type: 'application/pdf' });

        //         const dataTransfer = new DataTransfer();
        //         dataTransfer.items.add(file);

        //         // Find the correct input[type="file"] or dropzone
        //         cy.get('input[type="file"]').then(input => {
        //             input[0].files = dataTransfer.files;
        //             input[0].dispatchEvent(new Event('change', { bubbles: true }));
        //         });

        //         // Optional: assert uploaded file appears in table
        //         //cy.contains('File Name').parent().should('contain', 'document.pdf');
        //     });
        // });

        cy.visit('http://192.168.10.36:4600/candidate-portal/career');
        cy.get('input[type="file"]') // or use a more specific selector like '#file-upload'
            .selectFile('cypress/fixtures/document.pdf', { force: true });
        //cy.contains('Browse files').click().click();


    });



})
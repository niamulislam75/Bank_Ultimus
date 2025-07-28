//import { faker } from '@faker-js/faker';
class AttachmentPage {

    Attachment() {

        //cy.visit('/hrm/employee-profile/employee-info');
        cy.log('Attachment Page');
        cy.fixture('document.pdf', 'base64').then(pdfBase64 => {
            cy.origin('http://192.168.10.36:4300', {

                args: { pdfBase64 }
            }, ({ pdfBase64 }) => {
                // cy.visit('http://192.168.10.36:4300/hrm/employee-profile/attachment');
                // Convert base64 to File
                const binary = atob(pdfBase64);
                const array = [];
                for (let i = 0; i < binary.length; i++) {
                    array.push(binary.charCodeAt(i));
                }
                const blob = new Blob([new Uint8Array(array)], { type: 'application/pdf' });
                const file = new File([blob], 'document.pdf', { type: 'application/pdf' });

                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                cy.wait(1000);
                // Find the correct input[type="file"] or dropzone
                cy.get('input[type="file"]').then(input => {
                    input[0].files = dataTransfer.files;
                    input[0].dispatchEvent(new Event('change', { bubbles: true }));
                });
                cy.wait(3000);
                cy.get(':nth-child(3) > .mdc-button > .mdc-button__label > .flex > span')
                    .should('contain.text', 'Save & Exit')
                    .click({ force: true });
                // Optional: assert uploaded file appears in table
                //cy.contains('File Name').parent().should('contain', 'document.pdf');
            });
        });
        


    }
}

export default AttachmentPage;


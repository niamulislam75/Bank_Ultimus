class PhotoAndSignaturePage {
    PhotoAndSignature() {
        const photoFile = 'photo.jpg';
        const signatureFile = 'signature.jpg';
        const fileType = 'image/jpeg';

        // Load fixtures
        cy.fixture(photoFile, 'base64').then(photoBase64 => {
            cy.fixture(signatureFile, 'base64').then(signatureBase64 => {

                // Use cy.origin to interact with cross-origin
                cy.origin('http://192.168.10.36:4300', {
                    args: {
                        photoBase64,
                        signatureBase64,
                        photoFile,
                        signatureFile,
                        fileType
                    }
                }, ({
                    photoBase64,
                    signatureBase64,
                    photoFile,
                    signatureFile,
                    fileType
                }) => {

                    function createFile(base64, name, type) {
                        const binary = atob(base64);
                        const array = [];
                        for (let i = 0; i < binary.length; i++) {
                            array.push(binary.charCodeAt(i));
                        }
                        const blob = new Blob([new Uint8Array(array)], { type });
                        return new File([blob], name, { type });
                    }

                    // Convert base64 to File
                    const photo = createFile(photoBase64, photoFile, fileType);
                    const signature = createFile(signatureBase64, signatureFile, fileType);

                    const photoDataTransfer = new DataTransfer();
                    photoDataTransfer.items.add(photo);

                    const signatureDataTransfer = new DataTransfer();
                    signatureDataTransfer.items.add(signature);
                    cy.wait(2000); // Wait for the page to load
                    // Wait until both inputs are available
                    cy.get('input[type="file"]').should('have.length.at.least', 2);

                    // Attach photo
                    cy.get('input[type="file"]').eq(0).then(input => {
                        input[0].files = photoDataTransfer.files;
                        input[0].dispatchEvent(new Event('change', { bubbles: true }));
                    });

                    // Attach signature
                    cy.get('input[type="file"]').eq(1).then(input => {
                        input[0].files = signatureDataTransfer.files;
                        input[0].dispatchEvent(new Event('change', { bubbles: true }));
                    });

                    // Wait for overlays to disappear if present
                    cy.get('.cdk-overlay-pane').should('not.exist');

                    // Click "Save & Next"
                    cy.contains('button', 'Save & Next')
                        .should('exist')
                        .should('not.be.disabled')
                        .click({ force: true });
                });
            });
        });
    }
}

export default PhotoAndSignaturePage;

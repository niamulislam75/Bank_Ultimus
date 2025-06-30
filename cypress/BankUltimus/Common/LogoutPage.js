class LogoutPage {
  Logout() {
  
    cy.get('#imgLogOut').click(); // Click logout button
    cy.wait(3000);
    //cy.get("//span[normalize-space()='Yes']").click(); // Click logout confirmation button
    cy.get(':nth-child(2) > .ui-button-text').click(); // Click logout confirmation button
    
  }
}
export default LogoutPage;
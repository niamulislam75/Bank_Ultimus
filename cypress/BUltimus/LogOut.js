class DoLogOut {
    
  LogOut() {

    cy.get('#imgLogOut').click();
    cy.get('.ui-dialog-buttonpane > :nth-child(2)').click();
      
      
    }
  }
  
  export default DoLogOut;
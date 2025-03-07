import LoginPage from "../page-objects/LoginPage";
import '../support/commands'; 


describe("Login Tests", () => {
  beforeEach(function () {  
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.fixture("users").as("users"); 
    LoginPage.visit(); 
  });

  it("Deve fazer login com sucesso", function () {  
    LoginPage.login(this.users.validUser.login, this.users.validUser.password); 
    cy.get('.false > .MuiTypography-root').click();
    cy.get('[data-testid="PersonOutlineIcon"]').should('be.visible');
    
  });
});

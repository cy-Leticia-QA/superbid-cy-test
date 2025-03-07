class LoginPage {
    constructor() {
      this.loginInput = "input[name='login']";
      this.passwordInput = "input[name='password']";
      this.loginButton = ".btn-login";
    }
    visit() {
      cy.visit("https://www.superbid.net/");
      cy.wait(3000);       
      cy.get('.gcap-close').click();
      cy.get('#menu_principal_superior').find('a').last().click(); 
    }
  
    fillEmail(login) {
        cy.origin('https://accounts.superbid.net', { args: { loginInput: this.loginInput, login } }, ({ loginInput, login }) => {
          cy.get(loginInput).type(login);
        });
      }      
    
      fillPassword(password) {
        cy.origin('https://accounts.superbid.net', { args: { passwordInput: this.passwordInput, password } }, ({ passwordInput, password }) => {
          cy.get(passwordInput).type(password);
        });
      }
      
      submit() {
        cy.origin('https://accounts.superbid.net', { args: { loginButton: this.loginButton } }, ({ loginButton }) => {
          cy.get(loginButton).click();
        });
      }
      
    login(email, password) {
      this.fillEmail(email);
      this.fillPassword(password);
      this.submit();
    }
  }
  
  export default new LoginPage();
  
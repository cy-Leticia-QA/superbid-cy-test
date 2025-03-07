Cypress.Commands.add("login", (login, password) => {
    cy.visit("https://accounts.superbid.net/signin?response_type=token&client_id=dzqC3VodSoXukD45BQKg3NQU6-faststore&redirect_uri=https%3A%2F%2Fwww.superbid.net%2F&authorization_uri=https://www.superbid.net/authorization/&language=pt-BR&portal_id=2&hostName=Superbid%20BR&_gl=1*atfh50*_gcl_au*MzUyOTM0Mjc5LjE3NDEyNjI4MTQ.*_ga*Mzk3MDU1NjcwLjE3NDEyNjI4MTQ.*_ga_J5G7LW8YR5*MTc0MTI2MjgxNC4xLjAuMTc0MTI2MjgxNC42MC4wLjQ5MTkwNjEzNQ..");
    cy.get("#email#floating-label516-input").type(login);
    cy.get("#floating-label524-input").type(password);
    cy.get(".btn-login").click();
  });
  Cypress.Commands.add('selectRadioButton', (radioName, value) => {
    cy.get(`input[name="${radioName}"][value="${value}"]`).check()    
  });
  


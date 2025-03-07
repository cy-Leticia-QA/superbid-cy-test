import HomePage from "../page-objects/HomePage";

describe("Acessar site da SuperBid", () => {
  beforeEach(function () {  
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it("Acessar a home com sucesso", function () {  
    HomePage.visit(); 
    cy.url().should("include", "superbid.net"); 
  });
});


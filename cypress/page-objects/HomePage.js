class HomePage {
    visit() {
      cy.visit('https://www.superbid.net');
      cy.wait(3000);       
      cy.get('.gcap-close').click();
    }
    searchForTerm(term) {
        cy.get('#search-input-field').type(term);  
        cy.get('#search-button-submit').click(); 
        cy.get('div[data-auction-category="Carros"]', { timeout: 5000 }).should('exist');
      }
    
  }
  export default new HomePage();
  
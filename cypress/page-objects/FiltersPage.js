import '../support/commands'
class FiltersPage {
  get radioButtonModalidadeLeilao() {
    return cy.get('input[name="filtro"][value="leilao"]');
  }

  get radioButtonModalidadeCompraDireta() {
    return cy.get('input[name="filtro"][value="tomada-de-preco"]');
  }

  get radioButtonModalidadeOferta() {
    return cy.get('input[name="filtro"][value="shopping"]');
  }

  selecionarModalidade(modalidade) {
    cy.selectRadioButton('filtro', modalidade);  
  }

  validarModalidadeSelecionada(modalidade) {
    cy.get(`input[name="filtro"][value="${modalidade}"]`)
      .should('be.checked');
      cy.get('div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-md-6')
      .find('p.MuiTypography-root.MuiTypography-body1')
      .each(($el) => {
        cy.wrap($el)
          .should('contain.text', 'Leilão');  
      }
      )}
  }


export default new FiltersPage();

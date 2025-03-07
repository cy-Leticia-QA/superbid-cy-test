import HomePage from "../page-objects/HomePage";
import FiltersPage from '../page-objects/FiltersPage'; 
import '../support/commands'; 

describe("Consulta de evento com o termo 'Carros'", () => {
    beforeEach(function () {  
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        HomePage.visit();  
    });  
    
    it("Deve consultar um evento com o termo 'Carros' estando logado", function () {
        const searchTerm = 'Carros';
        HomePage.searchForTerm(searchTerm);
        FiltersPage.selecionarModalidade('leilao'); 
        FiltersPage.validarModalidadeSelecionada('leilao');
    
});
});  
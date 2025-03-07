# superbid-cy-test

BDD 

* Test Scenário: Cadastro de Pessoa Física
    CT001 - Acessar a tela de cadastro 
        Given que o usuário deseja fazer cadastro no site 
        When acessar a tela inicial 
        And clicar no botão Cadastrar 
        And selecionar Pessoa Física 
        Then deve habilitar o formulário de cadastro

    CT002 - Preenchimento do formulário
        Given que o fromulário de cadastro foi habilitado na tela 
        When inserir os dados corretamente 
        And clicar em finalizar 
        Then deve visualizar a mensagem de sucesso e deve ser possível fazer login usando os dados cadastrados



* Test Scenario: Login com Sucesso
    CT001 - Login com dados corretos 
        Given que foram inseridos dados de E-mail, login, ou CPF e Senha cadastrados anteriormente 
        When clicar no botão Entrar
        Then deve ser possivel acessar a conta



* Test Scenario: Login com Usuário/Senha errada.
    CT001 - Login com dados corretos 
        Given que foram inseridos dados incorretos de E-mail, login, ou CPF e Senha
        When clicar no botão Entrar
        Then a mensagem 'Usuário ou senha inválidos' deve ser mostrada na tela 



* Test Scenario: Consulta Evento
    CT001 - Buscar eventos de Carro
        Given que o usuário digitou o termo Carros na barra de pesquisa 
        Quando clicar para fazer a busca 
        Then devem ser mostrados eventos com carros



* Test Scenario: Filtro modalidade e Categoria
    CT001 - Filtrar modalidade Leilão 
        Given que estou na tela que exibe resultados de busca
        When selecionar a modalidade Leilão
        Then devem ser mostrados apenas resultados de Leilão 
    
    CT002 - Filtrar categoria Carros com o filtro de modalidade Leilão selecionado 
        Given que estou na tela que exibe resultados de busca
        When selecionar a modalidade Leilão
        And selecionar Categoria Carros 
        Then devem ser mostrados apenas resultados de modalidade Leilão e Categoria Carros 

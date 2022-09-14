/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
        
    });

    it.only('Deve fazer cadastro do local do faturamento', () => {
        EnderecoPage.editarEnderecoFaturamento('Luiz', 'Guilherme', 'EBAC', 'Avenida Brasil', '3010', 'São Paulo', 'São Paulo', '84430000', '4234232020', 'mail@test.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});
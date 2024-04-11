/// <reference types="cypress" />

describe('Teste pagina de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://ebac-jobs-e2e.vercel.app/')
  })

  it('Ir para pagina de cadastro', () => {
    cy.get('.Vaga_vagaLink__DeFkk').first().click()
    cy.get('input').should('have.length', 7)
  })

  it('Preencher os campos do cadastro', () => {
    cy.get('.Vaga_vagaLink__DeFkk').first().click()
    cy.get('input[name="nome-completo"]').type("vithor santos")
    cy.get('input[name="email"]').type("vitho@email.com")
    cy.get('input[name="telefone"]').type("60 976549857")
    cy.get('input[name="endereco"]').type("Av. avenida, Jd. dos Jardins - Jest-JT")
    cy.get('#mac').check()
    cy.get('select[name="escolaridade"]').select('tecnologo')
    cy.get('.Aplicacao_button__tw2AE').click()

    cy.on('window:alert', (texto) => {
      expect(texto).contain('Obrigado pela candidatura!')
    })
  })
})
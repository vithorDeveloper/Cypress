/// <reference types="cypress" />

describe('Teste aplicação de empregos', () => {
  it('Pagina renderizando corretamente', () => {
    cy.visit('https://ebac-jobs-e2e.vercel.app/')
    cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
  })

  it('filtrar empregos', () => {
    cy.visit('https://ebac-jobs-e2e.vercel.app/')
    cy.get('.FormVagas_campo__E1ppF').type('Desenvolvedor front-end{enter}') 
    cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 2)
    //type(simular digitar no campo) {enter} simular o clique
    // cy.get('button[type=submit]').click() simular pra dar o clique no botão
  })
})
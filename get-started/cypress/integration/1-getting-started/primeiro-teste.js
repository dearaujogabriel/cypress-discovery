///<reference types="cypress" />

describe('example to-do app', () => {
  // beforeEach(() => {
  //   cy.visit('https://www.google.com/')
  // })

  // it('can add new todo items', () => {
  //   const newItem = 'Vasco da Gama'
  //   cy.get('[type="text"]').type(`${newItem}{enter}`)

  //   cy.get('[name="q"]').should('have.value', newItem)
  // })

  beforeEach(() => {
    cy.visit('https://vasco.com.br/')
  })

  var teste = '.toggler-menu'

  it('site do Vasco - Sedes', () => {
    cy.get(teste).click()
    cy.get('[id="menu-item-239"]').click()
    cy.get('[id="menu-item-255"]').click()
    cy.get('[class="mb-1"]').should('have.text', ' Sedes')
  })

  it('site do Vasco - Diretoria e Conselho', () => {
    cy.get('.toggler-menu').click()
    cy.get('[id="menu-item-239"]').click()
    cy.get('[id="menu-item-254"]').click()
    cy.get('[class="mb-1"]').should('have.text', ' Diretoria e Conselho')
  })
})

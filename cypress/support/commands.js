// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (username, password) => {
    cy.get('[id="Email"]').clear().type(username)
    cy.get('[id="Password"]').clear().type(password)
    cy.get('form > .buttons > .button-1').click()
})

Cypress.Commands.add('ketik', (locator, value) => {
    cy.get(locator)
    .type(value)
})

Cypress.Commands.add('klik', (locator) => {
    cy.get(locator)
    .should('be.visible')
    .click()
})

Cypress.Commands.add('verifyContain', (locator, value) => {
    cy.get(locator)
    .should('contain.text', value)
})
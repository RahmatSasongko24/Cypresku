import loginPage from '../../support/pageObject/userPage'
const userr = require('../../fixtures/user.json')

describe('test saucedemo', () => {
  beforeEach(() => {
    cy.visit('https://demowebshop.tricentis.com/register')
  })
  it('email already exists', () => {
    cy.get('#gender-male').click()

    cy.get('#FirstName').type('tes')

    cy.get('#LastName').type('tesjuga')

    cy.get('#Email').type('rahmat.sasongko@yopmail.com')

    cy.get('#Password').type('Dummy123')
    cy.get('#ConfirmPassword').type('Dummy123')

    cy.get('#register-button').click()

    cy.wait(2000)

    cy.get('.validation-summary-errors > ul > li').should('contain', 'The specified email already exists')
  })

  it('Sucess Login', () => {
    cy.get('#gender-male').click()

    cy.get('#FirstName').type('tes')

    cy.get('#LastName').type('tesjuga')

    cy.get('#Email').type('rahmat.sasongko1@yopmail.com')

    cy.get('#Password').type('Dummy123')
    cy.get('#ConfirmPassword').type('Dummy123')

    cy.get('#register-button').click()
  })

})
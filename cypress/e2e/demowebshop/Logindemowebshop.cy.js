import loginPage from '../../support/pageObject/userPage'
const userr = require('../../fixtures/user.json')

describe('test saucedemo', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('login_url'))
  })
  it(' multiple failed login', () => {
    cy.fixture('fail-user.json').then((user) => {
      user.failed_login.forEach((datauser) => {
        cy.login(datauser.username,datauser.password)
      })
    })
  })

  
  it('success login', () => {
    loginPage.inputUsername(userr[0].username)
    loginPage.inputPassword(userr[0].password)
    loginPage.clickLoginButton()
    cy.get('.header-links > ul > :nth-child(1) > .account').should('contain.text', 'rahmat.sasongko@yopmail.com')
  })

  it('success login with fixtures', () => {
    cy.fixture('user.json').then((user) => {
      const datauser = user[0];
      cy.login(datauser.username,datauser.password)
      cy.get('.header-links > ul > :nth-child(1) > .account').should('contain.text', 'rahmat.sasongko@yopmail.com')
    })
  })
  it('success login with custom command', () => {
    cy.login('rahmat.sasongko@yopmail.com','Dummy123')
    cy.get('.header-links > ul > :nth-child(1) > .account').should('contain.text', 'rahmat.sasongko@yopmail.com')
  })



})
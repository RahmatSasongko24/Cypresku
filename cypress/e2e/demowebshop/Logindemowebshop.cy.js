import loginPage from '../../support/pageObject/userPage'
const userr = require('../../fixtures/user.json')

describe('test saucedemo', () => {
  beforeEach(() => {
    cy.visit('https://demowebshop.tricentis.com/login')
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
  })

  it('success login with fixtures', () => {
    cy.fixture('user.json').then((user) => {
      const datauser = user[0];
      cy.login(datauser.username,datauser.password)
      
    })
  })
  it('success login with custom command', () => {
    cy.login('rahmat.sasongko@yopmail.com','Dummy123')
    
  })



})
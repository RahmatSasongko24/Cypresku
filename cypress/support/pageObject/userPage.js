class LoginPage {

    username = '[id="Email"]'
    passw = '[id="Password"]'
    loginBtn = '[data-test="login-button"]'
    errorMsg = '[data-test="error"]'
    title = '.title'

  

    inputUsername(username) {
      cy.get(this.username).type(username)
    }
  
    inputPassword(password) {
      cy.get(this.passw).type(password)
    }
  
    clickLoginButton() {
      cy.get('form > .buttons > .button-1').click()
    }
    

}

    
  
export default new LoginPage()
import { uniqueUser } from '../util'

describe('Login', function () {
  beforeEach(() => {
    cy.setupAlgoliaStub()
    cy.loadHomeRoute()
  })

  it('should start with new user not logged in', () => {
    cy.contains('LOGIN').click()
    cy.loginFormExists()
    cy.contains('REGISTER').click({force: true})
    cy.registerFormExists()
  })

  it('should redirect unauthenticated users hitting protected routes to login page', () => {
    cy.visit('/dashboard')
    cy.loginFormExists()
  })

  it('should register, login, and navigate to Dashboard page, logout and go to homepage', () => {
    const user = uniqueUser()
    cy.registerUser(user)
    cy.contains(`Welcome, ${user.name}!`)
    cy.verifyDashboardPage()
    cy.logout(user.name)
    cy.verifyHomepage()
  })

  it('should fail to register with non-matching passwords', () => {
    const user = uniqueUser({ password: 'pass1234', confirmPassword: 'badNonMatchingPassword' })
    cy.registerUser(user)
    cy.contains('Passwords must match!').should('be.visible')
    cy.typeIntoFormField('Password Confirm *', 'pass1234')
    cy.getAriaLabel('Register User Button').click()
    cy.contains(`Welcome, ${user.name}!`)
  })

  it('should not allow registration with duplicate email addresses', () => {
    const user = uniqueUser()
    cy.registerUser(user)
    cy.contains(`Welcome, ${user.name}!`)
    cy.logout(user.name)
    cy.registerUser(user)
  })

  it('should show an error if logging in with bad password', () => {
    const user = uniqueUser({ password: 'goodPassword', confirmPassword: 'goodPassword' })
    cy.registerUser(user)
    cy.contains(`Welcome, ${user.name}!`)
    cy.logout(user.name)
    cy.loginUser({ email: user.email, password: 'wrongPassword' })
    cy.contains('Failed to login with the provided email and password.').should('be.visible')
    cy.typeIntoFormField('Password *', 'goodPassword')
    cy.getAriaLabel('Login User Button').click()
    cy.verifyDashboardPage()
  })

  it('should use localStorage auth token on soft browser refresh', () => {
    const user = uniqueUser()
    cy.registerUser(user)
    cy.logout(user.name)
    cy.loginUser({ email: user.email, password: user.password })
    cy.verifyDashboardPage()
    cy.reload()
    cy.verifyDashboardPage()
  })
})

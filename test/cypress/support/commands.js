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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import { mockAlgolia } from '../util.js'

Cypress.Commands.add('setupAlgoliaStub', () => {
  mockAlgolia()
})

Cypress.Commands.add('loadHomeRoute', () => {
  cy.visit('/')
})

Cypress.Commands.add('goCreateGame', () => {
  cy.contains('Submit a Game').click()
  cy.verifyNotHomepage()
  cy.contains('GET INFO').should('be.visible')
})

Cypress.Commands.add('goLogin', () => {
  cy.contains('LOGIN').click()
  cy.verifyNotHomepage()
  cy.loginFormExists()
})

Cypress.Commands.add('loginFormExists', () => {
  cy.contains('Email *').should('be.visible')
  cy.contains('Password *').should('be.visible')
  cy.contains('Name *').should('not.be.visible')
})

Cypress.Commands.add('registerFormExists', () => {
  cy.contains('Name *').should('be.visible')
  cy.contains('Email *').should('be.visible')
  cy.contains('Password *').should('be.visible')
  cy.contains('Password Confirm *').should('be.visible')
})

Cypress.Commands.add('verifyHomepage', () => {
  cy.contains('The PBBG Directory').should('be.visible')
})

Cypress.Commands.add('verifyNotHomepage', () => {
  cy.contains('The PBBG Directory').should('not.be.visible')
})

Cypress.Commands.add('verifyDashboardPage', () => {
  cy.contains('Dashboard').should('be.visible')
})

Cypress.Commands.add('registerUser', ({ name, email, password, confirmPassword }) => {
  cy.contains('REGISTER').click()
  cy.typeIntoFormField('Name *', name)
  cy.typeIntoFormField('Email *', email)
  cy.typeIntoFormField('Password *', password)
  cy.typeIntoFormField('Password Confirm *', confirmPassword)
  cy.getAriaLabel('Register User Button').click()
})

Cypress.Commands.add('loginUser', ({ email, password }) => {
  cy.contains('LOGIN').click()
  cy.typeIntoFormField('Email *', email)
  cy.typeIntoFormField('Password *', password)
  cy.getAriaLabel('Login User Button').click()
})

Cypress.Commands.add('logout', (name = null) => {
  cy.getAriaLabel(name).first().click() //there are two aria labels because quasar applies to any button inside a btn-dropdown
  cy.contains('Logout').click()
})

Cypress.Commands.add('createNewGameRequest', ({ url, name, shortDescription } = { url: null, name: null, shortDescription: null }) => {
  const gameUrl = url ? url : 'https://www.google.com'
  cy.typeIntoFormField('URL *', gameUrl)
  cy.contains('GET INFO').click()

  cy.contains('Stand by. Loading game data...').should('be.visible')
  cy.contains(`Data loaded for ${gameUrl}`)

  cy.typeIntoFormField('Name *', name ? name : 'TestGame')
  cy.typeIntoFormField('Short Description *', shortDescription ? shortDescription : 'a big long description here and some more text.')
  cy.contains('Save').click()
  cy.verifyHomepage()
  cy.contains('Success!').should('be.visible')
})

Cypress.Commands.add('goDashboard', () => {
  cy.visit('/dashboard')
  cy.verifyNotHomepage()
  cy.verifyDashboardPage()  // must be logged in or will redirect to login
})

Cypress.Commands.add('getAriaLabel',  {prevSubject: 'optional'}, (subject, label) => {
  if (subject) {
    return cy.wrap(subject).find(`*[aria-label="${label}"]`)
  } else {
    return cy.get(`*[aria-label="${label}"]`)
  }
})

Cypress.Commands.add('typeIntoFormField', (labelText, text) => {
  cy.get('label:contains("' + labelText + '")').click()
  cy.focused().clear().type(text)
})

Cypress.Commands.add('expectHTML5ValidationMessage', (inputType, message) => {
  cy.get(`[type="${inputType}"]`).then(($input) => {
    expect($input[0].validationMessage).to.eq(message)
  })
})

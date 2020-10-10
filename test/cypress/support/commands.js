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
  cy.contains('The PBBG Directory').should('not.exist')
  cy.contains('GET INFO').should('exist')
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

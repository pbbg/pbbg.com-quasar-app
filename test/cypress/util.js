export function mockAlgolia () {
  const queries = `https://tf6ehqug2k-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia for JavaScript (3.35.1); Browser (lite); JS Helper (2.28.1); vue-instantsearch 1.7.0&x-algolia-application-id=${Cypress.env('ALGOLIA_APP_ID')}&x-algolia-api-key=${Cypress.env('ALGOLIA_KEY')}`
  cy.fixture('initialAlgoliaResults').as('results')
  cy.server()
  cy.route('POST', queries, '@results')
}

export function uniqueUser ({ name, email, password, confirmPassword } = { name: null, email: null, password: null, confirmPassword: null }) {
  const userName = name ? name : Date.now().toString()
  return {
    name: userName,
    email: email ? email : userName + '@example.com',
    password: password ? password : 'pass1234',
    confirmPassword: confirmPassword ? confirmPassword : 'pass1234',
  }
}

export function uniqueGameName (specificDateNow) {
  return 'game-' + (specificDateNow ? specificDateNow : Date.now().toString())
}

export function uniqueGameUrl (url) {
  return `https://www.${url ? url : uniqueGameName()}.com`
}

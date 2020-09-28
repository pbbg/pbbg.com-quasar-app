export function mockAlgolia () {
  let queries = ''
  if (process.env.CI === true) {
    queries = `https://tf6ehqug2k-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia for JavaScript (3.35.1); Browser (lite); JS Helper (2.28.1); vue-instantsearch 1.7.0&x-algolia-application-id=${process.env.CYPRESS_ALGOLIA_APP_ID}&x-algolia-api-key=${process.env.CYPRESS_ALGOLIA_KEY}`
  } else {
    queries = `https://tf6ehqug2k-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia for JavaScript (3.35.1); Browser (lite); JS Helper (2.28.1); vue-instantsearch 1.7.0&x-algolia-application-id=${Cypress.env('ALGOLIA_APP_ID')}&x-algolia-api-key=${Cypress.env('ALGOLIA_KEY')}`
  }
  cy.fixture('initialAlgoliaResults').as('results')
  cy.server()
  cy.route('POST', queries, '@results')
}

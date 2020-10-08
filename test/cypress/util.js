export function mockAlgolia () {
  const queries = 'https://tf6ehqug2k-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia for JavaScript (3.35.1); Browser (lite); JS Helper (2.28.1); vue-instantsearch 1.7.0&x-algolia-application-id=TF6EHQUG2K&x-algolia-api-key=3ab2216a85ee66f3ecd52c90c1f690fc'
  cy.fixture('initialAlgoliaResults').as('results')
  cy.server()
  cy.route('POST', queries, '@results')
}

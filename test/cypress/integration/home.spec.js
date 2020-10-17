describe('Home', function () {
  beforeEach(() => {
    cy.setupAlgoliaStub()
    cy.loadHomeRoute()
  })

  it('should load up the homepage', () => {
    cy.title().should('include', 'pbbg.com')
    cy.verifyHomepage()
  })

  it('should see some test search results', () => {
    cy.contains('Test Algolia Search Results').should('be.visible')
  })
})

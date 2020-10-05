describe('Home', function () {
  beforeEach(() => {
    cy.setupAlgoliaStub()
    cy.loadHomeRoute()
  })

  it('should load up the homepage', () => {
    cy.title().should('include', 'pbbg.com')
    cy.contains('The PBBG Directory').should('exist')
  })

  it('should see some test search results', () => {
    cy.contains('Test Algolia Search Results').should('exist')
  })
})

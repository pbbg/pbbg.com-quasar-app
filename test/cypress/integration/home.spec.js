describe('Home', function () {
  beforeEach(() => {
    cy.setupAlgoliaStub()
    cy.loadHomeRoute()
  })

  it('should load up the homepage', () => {
    cy.title().should('include', 'pbbg.com')
    cy.verifyHomepage()
  })
})

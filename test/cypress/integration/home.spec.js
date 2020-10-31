describe('Home', function () {
  beforeEach(() => {
    cy.setupAlgoliaStub()
    cy.loadHomeRoute()
  })

  it('should load up the homepage', () => {
    cy.title().should('include', 'pbbg.com')
    cy.verifyHomepage()
  })

  it('should retrieve the news feed when homepage loads', () => {
    cy.contains('News Feed').should('be.visible')
    cy.getAriaLabel('News Feed Loading Icon').should('not.be.visible')
  })
})

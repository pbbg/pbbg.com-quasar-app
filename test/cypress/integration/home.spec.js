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
    cy.getAriaLabel('News Feed Loading Icon').should('not.exist')
  })

  it('should display app version in footer and navigate to changelog', () => {
    cy.getAriaLabel('Changelog Button').should('exist')
    cy.getAriaLabel('Changelog Button').click()
    cy.contains('Changelog').should('be.visible')
  })
})

describe('Home', function () {
  beforeEach(() => {
    cy.goHome()
  })

  it('should load up the homepage', () => {
    cy.title().should('include', 'pbbg.com')
  })
})

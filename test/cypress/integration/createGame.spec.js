describe('Create Game', function () {
  beforeEach(() => {
    cy.setupAlgoliaStub()
    cy.loadHomeRoute()
  })

  it('should be able to submit new game creation', () => {
    cy.title().should('include', 'pbbg.com')
    cy.contains('Submit a Game').click()
    cy.contains('The PBBG Directory').should('not.exist')
    cy.typeIntoFormField('URL *', 'https://www.google.com')
    cy.typeIntoFormField('Name *', 'TestGame')
    cy.typeIntoFormField('Short Description *', 'a big long description here and some more text.')
    cy.contains('Save').click()

    cy.contains('The PBBG Directory').should('exist')
    cy.contains('Success!').should('exist')
  })

  it('should require a valid url before allowing submit', () => {
    cy.goCreateGame()
    cy.typeIntoFormField('URL *', 'invalidUrl')
    cy.contains('Save').click()

    cy.expectHTML5ValidationMessage('url', 'Please enter a URL.')

    cy.typeIntoFormField('URL *', 'https://www.google.com')
    cy.typeIntoFormField('Name *', 'TestGame')
    cy.typeIntoFormField('Short Description *', 'a big long description here and some more text.')
    cy.contains('Save').click()
    cy.contains('The PBBG Directory').should('exist')
    cy.contains('Success!').should('exist')
  })

  it('should require a name before allowing submit', () => {
    cy.goCreateGame()
    cy.typeIntoFormField('URL *', 'https://www.google.com')
    cy.typeIntoFormField('Short Description *', 'a big long description here and some more text.')
    cy.contains('Save').click()

    cy.expectHTML5ValidationMessage('text', 'Please fill out this field.')

    cy.typeIntoFormField('Name *', 'TestGame')
    cy.contains('Save').click()
    cy.contains('The PBBG Directory').should('exist')
    cy.contains('Success!').should('exist')
  })

  it('should require a short description before allowing submit', () => {
    cy.goCreateGame()
    cy.typeIntoFormField('URL *', 'https://www.google.com')
    cy.typeIntoFormField('Name *', 'TestGame')
    cy.contains('Save').click()

    cy.expectHTML5ValidationMessage('textarea', 'Please fill out this field.')

    cy.typeIntoFormField('Short Description *', 'a big long description here and some more text.')
    cy.contains('Save').click()
    cy.contains('The PBBG Directory').should('exist')
    cy.contains('Success!').should('exist')
  })
})

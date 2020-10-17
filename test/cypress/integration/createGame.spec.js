describe('Create Game', function () {
  beforeEach(() => {
    cy.setupAlgoliaStub()
    cy.loadHomeRoute()
  })

  it('should be able to submit new game creation with toast as game data loads', () => {
    cy.goCreateGame()
    cy.createNewGameRequest()
  })

  it('should require a valid url before allowing submit', () => {
    cy.goCreateGame()
    cy.typeIntoFormField('URL *', 'invalidUrl')
    cy.contains('GET INFO').click()

    cy.expectHTML5ValidationMessage('url', 'Please enter a URL.')
    cy.typeIntoFormField('URL *', 'https://www.google.com')
    cy.contains('GET INFO').click()

    cy.typeIntoFormField('Name *', 'TestGame')
    cy.typeIntoFormField('Short Description *', 'a big long description here and some more text.')
    cy.contains('Save').click()
    cy.verifyHomepage()
    cy.contains('Success!').should('be.visible')
  })

  it('should require a name before allowing submit', () => {
    cy.goCreateGame()
    cy.typeIntoFormField('URL *', 'https://www.google.com')
    cy.contains('GET INFO').click()
    cy.typeIntoFormField('Short Description *', 'a big long description here and some more text.')
    cy.contains('Save').click()

    cy.expectHTML5ValidationMessage('text', 'Please fill out this field.')

    cy.typeIntoFormField('Name *', 'TestGame')
    cy.contains('Save').click()
    cy.verifyHomepage()
    cy.contains('Success!').should('be.visible')
  })

  it('should require a short description before allowing submit', () => {
    cy.goCreateGame()
    cy.typeIntoFormField('URL *', 'https://www.google.com')
    cy.contains('GET INFO').click()
    cy.typeIntoFormField('Name *', 'TestGame')
    cy.contains('Save').click()

    cy.expectHTML5ValidationMessage('textarea', 'Please fill out this field.')

    cy.typeIntoFormField('Short Description *', 'a big long description here and some more text.')
    cy.contains('Save').click()
    cy.verifyHomepage()
    cy.contains('Success!').should('be.visible')
  })
})

describe('About page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/about');
  });

  it('Test about page look', () => {
    cy.get('h1').should('have.text', 'About page');
  });
});

describe('Error page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/error');
  });

  it('Test errorpage look', () => {
    cy.get('h2').should('have.text', ' 404 Error ');
    cy.get('h3').should('have.text', 'Page not found');
    cy.get('p').should('have.text', ' Sorry, this page isn`t available ');
    cy.get('a').should('have.text', 'Back to home');
  });
});

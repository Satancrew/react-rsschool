describe('Form page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/form');
  });

  it('Test form look', () => {
    cy.get('form').within(() => {
      cy.get('div').should('have.class', 'form__group');
      cy.get('label').should('have.class', 'form__label');
    });
  });
});

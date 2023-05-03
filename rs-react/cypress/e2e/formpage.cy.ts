describe('Form page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/form');
  });

  it('Test form look', () => {
    cy.get('form').within(() => {
      cy.get('div').should('have.class', 'form__group');
      cy.get('label').should('have.class', 'form__label');
      cy.get('div').should('have.class', 'form__group-numbers');
      cy.get('div').should('have.class', 'form__error-price-stock');
      cy.get('div').should('have.class', 'form__group-checkbox');
    });
    it('Test send form', () => {
      cy.get('input').should('have.class', 'form__label-text').type('Test input');
      cy.get('input').should('have.class', 'form__label-select').select('jewerly');
      cy.get('input')
        .should('have.class', 'form__label-input')
        .selectFile({
          contents: Cypress.Buffer.from('file contents'),
          fileName: 'test.png',
          lastModified: Date.now(),
        });
      cy.get('input').should('have.class', 'form__input-checkbox').click();
      cy.get('input').should('have.class', 'form__input-price').type('500');
      cy.get('input').should('have.class', 'form__input-stock').type('200');
      cy.get('button').should('have.class', 'submit').click();
    });
  });
});

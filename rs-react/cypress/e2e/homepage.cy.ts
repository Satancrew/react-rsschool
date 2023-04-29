describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Test homepage look', () => {
    cy.get('main').within(() => {
      cy.get('div').should('have.class', 'search__wrapper');
      cy.get('input').should('have.class', 'search__input');
      cy.get('input').should('be.enabled');
    });
  });
  it('Test card look', () => {
    cy.get('div').should('have.class', 'card');
    cy.get('img').should('have.class', 'card__image');
    cy.get('div').should('have.class', 'card__data');
    cy.get('div').should('have.class', 'card__data');
  });
  it('Header look', () => {
    cy.get('header').within(() => {
      cy.get('div').should('have.class', 'header__links');
      cy.get('a').should('have.class', 'header__btn');
    });
  });
});

describe('Check api', () => {
  it('Get all characters', () => {
    cy.request({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/character`,
    }).as('getResults');

    cy.get('@getResults').should((response: unknown) => {
      expect((response as Response).status).to.eq(200);
      expect(response).to.have.property('headers');
      expect((response as Response).body).to.have.property('results');
    });
  });

  it('Get search', () => {
    cy.request({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/character/?name=unmuscular`,
    }).as('getResults');

    cy.get('@getResults').should((response: unknown) => {
      expect((response as Response).status).to.eq(200);
      expect(response).to.have.property('headers');
      expect((response as Response).body).to.have.property('results');
    });
  });

  it('Get one character', () => {
    cy.request({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/character/7`,
    }).as('getResults');

    cy.get('@getResults').should((response: unknown) => {
      expect((response as Response).status).to.eq(200);
      expect(response).to.have.property('headers');
      expect((response as Response).body).to.have.property('id');
    });
  });
});

Cypress.Commands.add('getByData', (test) => {
  return cy.get(`[data-testid=${test}]`);
});

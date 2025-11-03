// cypress/e2e/transactions.cy.js
describe('Transactions list', () => {
  it('should show the transactions', () => {
    cy.intercept(
      'GET',
      'http://localhost:9000/api/transactions',
      { fixture: 'transactions.json' },
    );

    cy.visit('http://localhost:5173');
    cy.get('[data-cy=transaction]').should('have.length', 2);
    cy.get('[data-cy=transaction_place]').eq(0).contains('Chinees Restaurant');
    cy.get('[data-cy=transaction_date]').eq(0).should('contain', '01/10/2025');
  });

  it('should show a loading indicator for a very slow response', () => {
    cy.intercept(
      'http://localhost:9000/api/transactions',
      (req) => {
        req.on('response', (res) => {
          res.setDelay(3000);
        });
      },
    ).as('slowResponse');
    cy.visit('http://localhost:5173');
    cy.get('[data-cy=loader]').should('be.visible');
    cy.wait('@slowResponse');
    cy.get('[data-cy=loader]').should('not.exist');
  });
});

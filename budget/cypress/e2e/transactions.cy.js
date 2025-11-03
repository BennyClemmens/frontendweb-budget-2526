// cypress/e2e/transactions.cy.js
describe('Transactions list', () => {
  it('should show the transactions', () => {
    cy.intercept(
      'GET',
      'http://localhost:9000/api/transactions',
      `{"items":[{"id":1,"amount":-97,"date":"2025-10-01","user":{"id":1,"name":"Pieter"},
      "place":{"id":4,"name":"Chinees Restaurant"}}]}`,
    );

    cy.visit('http://localhost:5173/transactions');
    cy.get('[data-cy=transaction]').should('have.length', 1);
    cy.get('[data-cy=transaction_place]').eq(0).contains('Chinees Restaurant');
    cy.get('[data-cy=transaction_date]').eq(0).should('contain', '01/10/2025');
  });
});

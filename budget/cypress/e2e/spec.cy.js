describe('General', () => {
  it('checkt als true nog steeds gelijk is aan true', () => {
    expect(true).to.equal(true);
  });
  it('draait de applicatie en er is een h1', () => {
    cy.visit('http://localhost:5173');
    cy.get('h1').should('exist');
  });
});

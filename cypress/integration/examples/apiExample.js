/// <reference types="Cypress" />


describe('API test', () => {
  it('My First API Test case', () => {

    cy.visit('https://example.cypress.io/commands/network-requests');

    cy.server();
    cy.route({
      method: 'PUT',
      url: 'comments/*',
      status: 404,
      response: {
        error: "Hey. Comment do not exist"
      },
      delay: 1000
    }).as('UpdateComment');



  });
});
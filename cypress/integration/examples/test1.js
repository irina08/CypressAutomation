/// <reference types="Cypress" />


describe('My First Test Suite', () => {
  it('My FirstTest case', () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.product').should('have.length',4);

  })
})
/// <reference types="Cypress" />


describe('RadioButtons Test Suite', () => {
  it('My FirstTest case', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('[value="radio2"]').check().should('be.checked');
  })

})
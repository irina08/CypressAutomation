/// <reference types="Cypress" />

describe('Dropdown Test Suite', () => {
  it('My SecondTest case', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //static dropdown
    cy.get('select').select('option2').should('have.value', 'option2');


  });

});
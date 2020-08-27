/// <reference types="Cypress" />


describe('CheckBox Test Suite', () => {
  it('My FirstTest case', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');

  //uncheck checkbox
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');



  })

})
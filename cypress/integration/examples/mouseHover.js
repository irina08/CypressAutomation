/// <reference types="Cypress" />

describe('Mouse Hover Test Suite', () => {
  it('My First Test case', () => {
    cy.visit("http://rahulshettyacademy.com/AutomationPractice/");

    //we need to use only parent element for invoke()
    // for handling invisible element on the page

    //first case
    /*
    cy.get('.mouse-hover-content').invoke('show');
    cy.contains('Top').click();
    cy.url().should('include', 'top');
    */



  });

});
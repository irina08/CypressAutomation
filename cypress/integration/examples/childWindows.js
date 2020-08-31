/// <reference types="Cypress" />

describe('Child Windows Test Suite', () => {
  it('My First Test case', () => {
    cy.visit("http://rahulshettyacademy.com/AutomationPractice/");

    //prop - non cypress command like text(method we need to resolve promise)
    cy.get('#opentab').then(function(el) {
      const url = el.prop('href');

    });

  });

});
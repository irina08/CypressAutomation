/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

describe('Frames Test Suite', () => {
  it('Demo example', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded('#courses-iframe');

    //switch to iframe
    cy.iframe().find('a[href*="mentorship"]').eq(0).click();
    cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2);


  });

});
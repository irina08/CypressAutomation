/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe('Block Test Suite', () => {

  before(() => {
    cy.fixture('exampleTest.json').as('data');

  });

  it('Demo example', function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    //cy.get('input[name="name"]:nth-child(2)').type('Bob');


    //cy.get('select').select('Female');

  });

});
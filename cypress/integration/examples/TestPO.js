/// <reference types="Cypress" />

import HomePage from '../../support/pageObjects/HomePage';
import ProductPage from '../../support/pageObjects/ProductPage';


describe('Page Object Test Suite', () => {

  before(() => {
    cy.fixture('exampleTest.json').as('data');

  });



});
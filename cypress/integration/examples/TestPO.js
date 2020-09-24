/// <reference types="Cypress" />

import HomePage from '../../support/pageObjects/HomePage';
import ProductPage from '../../support/pageObjects/ProductPage';


describe('Page Object Test Suite', () => {

  before(() => {
    cy.fixture('exampleTest.json').as('data');

  });

  it('PO example', function () {
    //Cypress.config('defaultCommandTimeout', 15000);
    const homePage = new HomePage();
    const productPage = new ProductPage();

    //cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.visit(Cypress.env('url') + '/angularpractice/');

    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should('have.value', this.data.name);
    homePage.getEditBox().should('have.attr', 'minlength', '2');
    homePage.getEntrepreneaur().should('be.disabled');
    homePage.getShopTab().click();

    this.data.productName.forEach(function(element) {
      cy.selectProduct(element);
    });

    productPage.checkoutButton().click();


  });

});
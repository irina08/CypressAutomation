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

    let sum = 0;
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
      const amountText = $el.text();
      let res = amountText.split(" ");
      res = res[1].trim();
      sum = sum + Number(res);
    }).then(() => {
      cy.log(sum);
    });

    cy.get('h3 strong').then((element) => {
      const amount = element.text();
      let result = amount.split(" ");
      let total = result[1].trim();
      expect(Number(total)).to.equal(sum);
    });

    cy.contains('Checkout').click();
    cy.get('#country').type('India');
    cy.get('.suggestions > ul > li > a').click();



  });

});
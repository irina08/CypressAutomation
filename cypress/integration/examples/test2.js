/// <reference types="Cypress" />


describe('Proceed to checkout Test Suite', () => {
  it('My FirstTest case', () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);

    cy.get('.products').as('productLocator');

    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
      const textVeg = $el.find('h4.product-name').text();
      if(textVeg.includes('Cashews')) {
        const bt = $el.find('button');
        cy.wrap(bt).click();
      }
    })

    cy.get('.cart-icon > img').click();

    cy.contains('PROCEED TO CHECKOUT').click();
    //cy.get('.cart-preview > .action-block > button').click();

    //cy.wait(2000);
    cy.contains('Place Order').click();
  })
  
})
/// <reference types="Cypress" />


describe('My First Test Suite', () => {
  it('My FirstTest case', () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);

    cy.get('.product').should('have.length', 5);
    cy.get('.product:visible').should('have.length',4);

    //second way through chaining
    cy.get('.products').find('.product').should('have.length',4);

    //element with second index ad to cart
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();

    //for loop - add to cart Cashews (not depend on place of Cashews)
    cy.get('.products').find('.product').each(($el, index, $list) => {
      const textVeg = $el.find('h4.product-name').text();
      if(textVeg.includes('Cashews')) {
        const bt = $el.find('button');
        cy.wrap(bt).click();
      }
    })

  })

})
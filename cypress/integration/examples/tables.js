/// <reference types="Cypress" />

describe('Tables Test Suite', () => {
  it('My First Test case', () => {
    cy.visit("http://rahulshettyacademy.com/AutomationPractice/");

    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
      const text = $el.text();
      if(text.includes('Python')) {

        //how to get next colon text in table, for example text in second row,
        // we need to find price in third row
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) {
          const priceText = price.text();
          expect(priceText).to.equal('25');
        });
      };

    });

  });

});
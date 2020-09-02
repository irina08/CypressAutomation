/// <reference types="Cypress" />

describe('Dropdown Test Suite', () => {
  it('My SecondTest case', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //static dropdown
    cy.get('select').select('option2').should('have.value', 'option2');

    //dynamic dropdown
    cy.get('#autocomplete').type('ind');
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
      if($el.text() === 'India') {
        const el = $el;
        cy.wrap(el).click();
      }
    });

    cy.get('#autocomplete').should('have.value', 'India');

  });

});
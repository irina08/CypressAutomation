/// <reference types="Cypress" />

describe('Popups Test Suite', () => {
  it('My First Test case', () => {
    //cy.visit("http://rahulshettyacademy.com/AutomationPractice/");
    cy.visit("http://qaclickacademy.com/practice.php");

    cy.get('#alertbtn').click();
    cy.get('[value="Confirm"]').click();

    //window: alert
    cy.on('window:alert',(str) => {
      expect(str).to.equal('Hello , share this practice page and share your knowledge');
    });

    cy.on('window:confirm',(str) => {
      expect(str).to.equal('Hello , Are you sure you want to confirm?');
    });

  //removeAttr in order to open page in the same window
    cy.get('#opentab').invoke('removeAttr', 'target').click();

    cy.url().should('include', 'rahulshettyacademy');



  });

});
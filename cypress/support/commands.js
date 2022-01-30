// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('validateModalWindow', () => {
  cy.fixture('validationErrors').then((data) => {
    cy.get('#title-error').should('be.visible').contains(data.titleError);
    cy.get('#release-date-error').should('be.visible').contains(data.releaseDateError);
    cy.get('#poster-path-error').should('be.visible').contains(data.posterPathError);
    cy.get('#rating-error').should('be.visible').contains(data.ratingError);
    cy.get('#genre-error').should('be.visible').contains(data.genreError);
    cy.get('#runtime-error').should('be.visible').contains(data.runtimeError);
    cy.get('#overview-error').should('be.visible').contains(data.overviewError);
  });
});

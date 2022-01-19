describe('Movie page tests', () => {
  it('Search movie by movie title', () => {
    cy.fixture('movie').then((data) => {
      cy.visit('/');
      cy.get('#input-search').type(data.searchMovieTitle);
      cy.get('#btn-search').click();
      cy.get('#count-label').contains(data.countLabelMessage);
      cy.get('#movies-container').should('be.visible');
      cy.get('#card').should('have.length', 1);
    });
  });

  it('Add new movie', () => {
    cy.fixture('movie').then((data) => {
      cy.visit('/').wait(data.timeout);
      cy.get('#btn-add-movie').click();

      // Verify validation for add modal window
      cy.get('#btn-submit').click();
      cy.validateModalWindow();

      // Input required fields
      cy.get('#title').type(data.inputTitle);
      cy.get('#releaseDate').type(data.inputReleaseDate);
      cy.get('#posterPath').type(data.inputPosterPath);
      cy.get('#rating').type(data.inputRating);
      cy.get('#genre').select(data.inputGenre);
      cy.get('#runtime').type(data.inputRuntime);
      cy.get('#overview').type(data.inputOverview);

      cy.get('#btn-submit').click();
      cy.get('#modal-success').should('be.visible');
    });
  });

  it('Edit movie title', () => {
    cy.fixture('movie').then((data) => {
      cy.visit('/').wait(data.timeout);
      cy.get('#btn-edit').first().click();

      // Change movie title and genre
      cy.get('#title').type(data.inputTitle);
      cy.get('#genre').select(data.inputGenre);

      cy.get('#btn-submit').click();
      cy.get('#modal-success').should('be.visible');
    });
  });

  it('Delete existing movie', () => {
    cy.visit('/').wait(1000);
    cy.get('#btn-delete').first().click();
    cy.get('#btn-submit').click();
    cy.get('#modal-success').should('be.visible');
  });
});

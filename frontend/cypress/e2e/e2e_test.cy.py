describe('Sentiment Analysis E2E Test', () => {
    it('Should submit a pos text and receive a pos sentiment', () => {
      
      cy.visit('http://localhost:3000'); 

      cy.get('textarea').type('I love this product!'); 
      cy.get('#analyze-button').click();

      cy.get('body').then((body) => {
        cy.log(body.text()); 
      });
  
      cy.contains('Sentiment: Positive', { timeout: 10000 }).should('exist');
    });
  });
  

describe('Sentiment Analysis E2E Test', () => {
    it('Should submit a pos text and receive a pos sentiment', () => {
        cy.visit('http://localhost:3000').then(() => {
            cy.log('Frontend loaded successfully.');
        });      
        
        cy.get('textarea').type('I love this product!'); 
        cy.get('#analyze-button').click();
  
      cy.contains('Sentiment: Positive').should('be.visible');
    });
  });

describe('Sentiment Analysis E2E Test', () => {
    it('Should submit a pos text and receive a pos sentiment', () => {
      cy.visit('http://localhost:3000'); // Accéder au frontend
      cy.get('textarea').type('I love this product!'); // Remplir le formulaire
      cy.get('#analyze-button').click();
      // Attendre la réponse et afficher le contenu
      cy.get('body').then((body) => {
        cy.log(body.text()); // Affiche tout le texte présent dans la page
      });
  
      // Vérifier que le texte attendu est présent
      cy.contains('Sentiment: Positive', { timeout: 10000 }).should('exist');
    });

    it('Should display an error when the input field is empty', () => {
        cy.visit('http://localhost:3000');
        cy.get('textarea').clear(); // Assurez-vous que le champ est vide
        cy.contains('Analyze').click(); // Tentez de soumettre sans texte
        cy.contains('Error: Please enter text').should('exist'); // Vérifiez que l'erreur s'affiche
      });

      it('Should return a negative sentiment for a negative input', () => {
        cy.visit('http://localhost:3000');
        cy.get('textarea').type('This is a low text.');
        cy.contains('Analyze').click();
        cy.contains('Sentiment: Negative').should('exist'); // Vérifiez que le sentiment est neutre
      });
  });
  
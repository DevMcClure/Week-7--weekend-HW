describe("Calculator", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    })
  
    it('should have working number buttons', () => {
      cy.get('#number2').click();
      cy.get('.display').should('contain', '2')
      // cy.get('clear').click();
    });

    it('should  update the display with the result of the operation when arithmetical operations are used', () => {
      cy.get('#number2').click();
      cy.get('#operator_add').click();
      cy.get('#number2').click();
      cy.get('#operator-equals').click()
      cy.get('#display').should('contain','4')

      
    });

    it('should show that multiple operations can be chained together', () => {

      cy.get('#number2').click();
      cy.get('#operator_add').click();
      cy.get('#number2').click();
      cy.get('#operator-equals').click()
      cy.get('#operator-multiply').click();
      cy.get('#number2').click();
      cy.get('#operator-equals').click()
      cy.get('#display').should ('contain', '8')

    })

    it(' should check that the output is as expected for a range of numbers', () => {

      cy.get('#number5').click();
      cy.get('operator-divide').click();
      cy.get('#number7').click();
      cy.get('#operator-equals').click()
      cy.get('#display').should ('contain', '0.7142857142857143')

    })

    
  })
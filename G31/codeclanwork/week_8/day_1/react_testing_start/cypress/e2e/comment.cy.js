describe('Comment', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Loads the App', () => {
        const counterH1 = cy.get('h1');
        counterH1.should('contain', '0')

    });

    it('shoud have populated comments', () => {
        const commentList = cy.get('#comment-list > li')
        commentList.should('have.length', 2);
    })

    it('should be able to add comment', () => {
        cy.get('#name-input').type('Jack Jarvis');
        cy.get('#comment-input').type('sconny no dae that');
        cy.get('form').submit();
        const commentList = cy.get('#comment-list > li');
        commentList.should('have.length',3)
    })
})
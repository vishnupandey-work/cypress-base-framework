describe('suite2', () => {

    it('test2.1', () => {
        cy.visit('/')
        cy.get('#username').clear().type('dummyUser')
        cy.get('#password').clear().type('dummyPassword')
        cy.get('#log-in').click()
    })

    it('test2.2',()=>{
        cy.visit('/app.html')
        cy.get('.top-menu-controls > .element-search > input').clear().type('customerName')
    })
})
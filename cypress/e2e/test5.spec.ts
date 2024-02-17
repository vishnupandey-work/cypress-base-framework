describe('suite5', () => {

    it('test5.1', () => {
        cy.visit('/')
        cy.get('#username').clear().type('dummyUser')
        cy.get('#password').clear().type('dummyPassword')
        cy.get('#log-in').click()
    })

    it('test5.2',()=>{
        cy.visit('/app.html')
        cy.get('.top-menu-controls > .element-search > input').clear().type('customerName')
    })
})
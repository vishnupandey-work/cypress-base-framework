describe('suite4', () => {

    it('test4.1', () => {
        cy.visit('/')
        cy.get('#username').clear().type('dummyUser')
        cy.get('#password').clear().type('dummyPassword')
        cy.get('#log-in').click()
    })

    it('test4.2',()=>{
        cy.visit('/app.html')
        cy.get('.top-menu-controls > .element-search > input').clear().type('customerName')
    })
})
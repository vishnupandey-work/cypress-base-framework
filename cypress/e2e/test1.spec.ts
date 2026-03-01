describe('suite1', () => {

    it('test1.1', () => {
        cy.visit('/')
        cy.get('#username').clear().type('dummyUser')
        cy.get('#password').clear().type('dummyPassword')
        cy.get('#log-in').click()
    })

    it('test1.2',()=>{
        cy.visit('/app.html')
        cy.get('.top-menu-controls > .element-search > input').clear().type('customerName')
    })

    it('test1.2',()=>{
        cy.visit('http://www.amazon.in')
        //cy.get('.top-menu-controls > .element-search > input').clear().type('customerName')
    })
})
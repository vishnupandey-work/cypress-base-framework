describe('myTest', () => {

    it('firstTest', () => {
        cy.visit('http://www.amazon.in')
    })

    it('2nd test',()=>{
        cy.visit('http://www.google.com')
    })
})
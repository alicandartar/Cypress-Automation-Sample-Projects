describe('UI Elements', () => {
    it('Verify Inputbox & Radio Button', () => {
        cy.visit("http://demo.guru99.com/test/newtours/index.php")
        cy.url().should('include', 'newtours')

        cy.get("input[name='userName']").should('be.visible').should('be.enabled').type("mercury")
        cy.get("input[name='password']").should('be.visible').should('be.enabled').type("mercury")
        cy.get("input[name='submit']").should('be.visible').click()

        //TITLE VERIFICATION

        cy.title().should('eq', 'Login: Mercury Tours')
        cy.get("body > div:nth-child(5) > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > a").click() // Shopping cart link
        //Radio Buttons

        cy.get('input[value=roundtrip]').should('be.visible').should('be.checked')
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click()

        cy.get('[name=findFlights]').should('be.visible').click()

        cy.title().should('eq', 'Find a Flight: Mercury Tours:')

    })
})
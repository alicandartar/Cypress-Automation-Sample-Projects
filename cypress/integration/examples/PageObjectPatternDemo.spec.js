import LoginPage from '../PageObjects/LoginPage'
describe('Test POM Demo', () => {
    it('Valid Login Test', () => {
        const lp = new LoginPage()
        lp.visit()
        lp.fillEmail('admin@yourstore.com')
        lp.fillPassword('admin')
        lp.submit()
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
    })
})
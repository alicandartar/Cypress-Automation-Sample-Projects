describe('MyTestSuite', () => {

    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('example')
          .then((user) => {
            // "this" is still the test context object
            this.user = user
        })
    })
    it('Login Test with Fixtures', function () {
        cy.visit('https://admin-demo.nopcommerce.com/login')

        cy.login(this.user.email, this.user.password)
    })

    it('Add Customer', function () {
        cy.visit('https://admin-demo.nopcommerce.com/login')

        cy.login(this.user.email, this.user.password)

        cy.log('***************** ADD CUSTOMER ***************')
    })

    it('Edit Customer', function () {
        cy.visit('https://admin-demo.nopcommerce.com/login')

        cy.login(this.user.email, this.user.password)

        cy.log('***************** EDIT CUSTOMER ***************')
    })
})


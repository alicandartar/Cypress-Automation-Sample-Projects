describe('Hooks', () => {
    before(() => {
      // runs once before all tests in the block

      cy.log('****************** This is Setup Block ********************')  
    })
  
    beforeEach(() => {
      // runs before each test in the block
      cy.log('****************** This is Login Block ********************')  
    })
  
    afterEach(() => {
      // runs after each test in the block
      cy.log('****************** This is Logout Block ********************')  
    })
  
    after(() => {
      // runs once after all tests in the block
      cy.log('****************** This is Tear Down Block ********************')  
    })

    it('searching', () => {
      cy.log('****************** This is Searching Test ********************')  
    })
    it(' advanced searching', () => {
        cy.log('****************** This is Searching Test ********************')  
      })
    it('listing products', () => {
        cy.log('****************** This is Searching Test ********************')  
      })
  })
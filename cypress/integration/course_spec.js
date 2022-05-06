describe('eTreeks Tests', function(){
    it('Visit the homepage', function(){
    //Arrange - setup initial app statecode .
    
        //visit homepage
        cy.visit('/')
        //Act - take an action
        //query to select first element in 'Most Popular Courses'
        // cy.scrollTo(0, 500)
        cy.get('.cbox-1').eq(0).click()
        // cy.get('.breadcrumb').get('li').eq(0).click()
        // cy.get('.wsmenu-list > li > a').click()

        cy.get('nav').get('ul').get('li').eq(0).get('a').click()
        // cy.get('nav').find('li').eq(2).click() 
        // cy.contains('Pages').click()
        // cy.get('.cbox-1').contains('images/courses/course-1-img.jpg').click()
        // cy.get('.icon-accessories').click()
        // cy.get('.product').click()
        // cy.get('.menu-function-item').click()
    })
})
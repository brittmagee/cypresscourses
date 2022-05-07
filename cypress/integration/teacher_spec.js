/// <reference types="Cypress" />

describe('Become a Teacher test', () => {
    it('Start at Homepage', () => {
        cy.visit('/')
    })


    /* ==== Test Created with Cypress Studio ==== */
    /*I used Cypress Studio to identify the class path to find the "Find Out More Button" for the Become
    a Teacher div. I then added .scrollToo() .pause() and .should() to build out more steps in the test  */
    it('Become a Teacher', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:3000/demo-1/');
        cy.scrollTo(0, 7000); //Wanted to scroll through the homepage like a user would
        cy.pause();
        cy.get(':nth-child(1) > .banner-5-txt > .b5-txt > .btn').click({force: true});
        cy.url().should('include', '/become-a-teacher')
    });
})
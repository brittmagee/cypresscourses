/// <reference types="Cypress" />
// syntax in VS Code was defaulting to other autofills

describe('Navigate to courses', () => {
    it('Start at Homepage', () => {
        cy.visit('/')
    })


    /* ==== Test Created with Cypress Studio ==== */
    //Cypress Studio is amazing!! 
    /*A consistent issue that I have found is when an <a> tag is covered by another element, 
    I have to include {force: true} for the click command to work.
    Note: I included cy.pause(); after each step within the test because the DOM snapshot 
    seemed to take a long time to load when stepping through the test 
     */
    it('Navigate to top rated course', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('/');
        cy.get(':nth-child(1) > .cbox-1 > a > .cbox-4-txt > .course-tags').click({force: true});
        cy.pause();
        cy.get('#headingTwo > .h5-xs > a').click({force: true});
        cy.pause();
        cy.get('#headingThree > .h5-xs > a').click({force: true});
        cy.pause();
        cy.get('#headingFour > .h5-xs > a').click({force: true});
        cy.pause();
        cy.get('.foo-links > :nth-child(3) > a').click({force: true}).url().should('include', '/reviews');
        /* ==== End Cypress Studio ==== */
    });
})
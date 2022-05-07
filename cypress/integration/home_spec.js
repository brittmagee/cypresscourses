/// <reference types="Cypress" />
// syntax in VS Code was defaulting to other autofills

describe('eTreeks Homepage Tests', () => {
    beforeEach('Visit the homepage', () => {
        cy.visit('/')
    })

    it('Testing Cypress.io', () => {
        cy.get('nav').find('a[href="about"]').then($el=>{
            cy.wrap($el).invoke('show')
            cy.wrap($el).contains('About Us Page').click({force: true})
        })
        /* Wanted to navigate through to the About page but was having trouble because of the hover styling that drops down
        Navigation Menu. Tried the following tests:
            cy.get('.cbox-1').eq(0).click()
            cy.get('.breadcrumb').get('li').eq(0).click()
            cy.get('nav').find('a[href="#"]').eq(0).find('About Us Page').click()
        These tests failed, but I found a work around with the .wrap() and .invoke() from a StackOverflow search
        found at https://stackoverflow.com/questions/48852219/handling-hover-over-menus-using-cypress
        */
       cy.pause()
    })
    /* ==== Test Created with Cypress Studio ==== */
    it('nav_spec.js', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.left-link-list > :nth-child(3) > a').click({force: true});
        /* ==== End Cypress Studio ==== */
    });
})
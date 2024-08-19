describe('Site Travelminit.ro', () => {

    it('Test accesare travelminit.ro', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('getInstalledRelatedApps')) {
                return false;
            }
        });


        cy.visit('https://travelminit.ro');
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get('.header-search-location-section');
        cy.get('footer').scrollIntoView().should('be.visible');
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > [data-test="footer-links"]').click();
        cy.get(':nth-child(4) > :nth-child(1) > .list-page-filter-category > .collapse > .list-unstyled > :nth-child(1) > .filter-element > .checkbox').click();
        cy.get(':nth-child(5) > :nth-child(1) > .list-page-filter-category > .collapse > .list-unstyled > :nth-child(2) > .filter-element > .checkbox').click();
        cy.get(':nth-child(9) > .accommodation-item > .accommodation-item__body > .col-sm-8 > .mb-0 > [data-test="hotel-name"]').scrollIntoView();
        cy.get(':nth-child(9) > .accommodation-item > .accommodation-item__body > .col-sm-4 > .mt-auto > .d-flex > .mb-5 > .label-loyalty > .label-loyalty__offer').click();
        cy.get('#guestLogin > .mt-15 > a').click();
        cy.get('.registration-form > :nth-child(1) > .form-control').type('TEST');
        cy.get(':nth-child(2) > .form-control').type('AUTOMATION');
        cy.get(':nth-child(3) > .iconic-input > .form-control').type('test@gmail.com');
        cy.get(':nth-child(4) > .iconic-input > .form-control').type('123');
        cy.wait(1000);
        cy.get('.login-modal > :nth-child(1) > .modal-dialog > .modal-content > .modal-body > button.close > span').click();



   })
})
describe('Site LinkedIn.com', () => {
    it('TEST', () => {
        // Previne eșuarea testului în cazul erorii `getInstalledRelatedApps`
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('getInstalledRelatedApps')) {
                return false; // Previne eșuarea testului Cypress
            }
        });

        cy.visit('https://linkedin.com');
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('');
        cy.get('#password').type('');
        cy.get('.btn__primary--large').click();
        cy.get('#ember17').click();
    });
});

describe('Site andrarose.ro', () =>{


    it('Testare_site', () =>{
        Cypress.on('uncaught:exception', (err, runnable) => {

            return false;
        
        });

          


        cy.visit('https://andrarose.ro');
        cy.get('#-g-homepage-productsDiscounts > .carousel-slide > .holder > .carousel > .owl-wrapper-outer > .owl-wrapper > :nth-child(2) > .product-box-h > .product-box > .box-holder > .image-holder > .image > .img-responsive').scrollIntoView().click();
        cy.get('#__gomagCookiePolicy').click();
        cy.get('.add-section > .btn').click();
        cy.get('[style="display: flex;justify-content: space-between;align-items: center;margin: 12px 0 3px;gap: 6px;"] > .btn-cmd').click();
        cy.get('#logo > .img-responsive').click();
        cy.get('#_autocompleteSearchMainHeader').type('Rochie tip maiou').type('{enter}');
        cy.get('.-g-product-box-14137 > .box-holder > .image-holder > .image > .img-responsive').click();
        cy.get('#qtyplus').click(2);
        cy.get('.add-section > .btn').click();
        cy.get('[style="display: flex;justify-content: space-between;align-items: center;margin: 12px 0 3px;gap: 6px;"] > .fl').click();
        cy.go(-3);
        cy.get('.cart-drop').click();
        cy.get('#__checkoutItemRemove18753_0_0_672fb8a7cb339985527534a9ae351924 > span').click();
        cy.wait(3000);
        cy.get('.cart-title-holder > .btn').click();
        cy.get('#checkoutform > :nth-child(4) > .input-s').type('User@gmail.com');
        cy.get('#checkoutform > :nth-child(5) > .input-s').type('User');
        cy.get('#checkoutform > :nth-child(6) > .input-s').type('UserName');
        cy.get('#checkoutform > :nth-child(7) > .input-s').type('0785744401');
        cy.get(':nth-child(3) > ._shippingMethod').click();
        cy.scrollTo('top');


        

    })
})    


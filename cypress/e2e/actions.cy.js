import mainPageShop from "../support/pages/MainPageShop";
import productPage from "../support/pages/ProductPage";
import cartPageShop from "../support/pages/CartPageShop";



describe('Different verifications on page', () => {
  it('Check elements in Computer group', () => {
    mainPageShop.visit();

    cy.log('Check computer group');
    mainPageShop.clickOnCompElement();

    mainPageShop.getElementInGroup().should('contain',"Desktops");
    mainPageShop.getElementInGroup().should('contain',"Notebooks");
    mainPageShop.getElementInGroup().should('contain',"Accessories");

    cy.log('Apply paging');
    mainPageShop.getAccessElement().click();
    mainPageShop.getPages().select('4');
    mainPageShop.getProdList().its('length').should('eq', 4);

    cy.log('Apply sorting');
    mainPageShop.getSorting().select('Name: A to Z');
    mainPageShop.getfirstElementInGrid().should('contain',"TCP Coaching day");

    cy.log('Add to Wishlist');
    mainPageShop.getSecElementInGrid().click();
    productPage.getWishlistButton().click();
    mainPageShop.getWishQty().should('contain', (1));

    cy.log('Add to Cart');
    productPage.getAddToCartButton().click();
    mainPageShop.getCartQty().should('contain', (1));

    cy.log('Remove from Cart');
    mainPageShop.openCart().click();
    cartPageShop.removeFromCart();
    cartPageShop.getEmptyCartMessage().should('be.visible');

  })





})

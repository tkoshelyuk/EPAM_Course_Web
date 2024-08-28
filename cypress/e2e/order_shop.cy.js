import user from '../fixtures/new_user.json'
import loginPageShop from "../support/pages/LoginPageShop";
import mainPageShop from "../support/pages/MainPageShop";
import productPage from "../support/pages/ProductPage";
import cartPageShop from "../support/pages/CartPageShop";
import billingAddressPageShop from "../support/pages/BillingAddressPageShop";




describe('Place Order', () => {
  it('Place Order', () => {
    cy.log('Login')
    loginPageShop.visit();
    loginPageShop.fillLoginFields(user.email, user.password);

    cy.log('Add product to cart');
    mainPageShop.clickOnCompElement();
    mainPageShop.getAccessElement().click();
    mainPageShop.getSecElementInGrid().click();
    productPage.getAddToCartButton().click();

    cy.log('Open cart and go to pay');
    mainPageShop.openCart().click();
    cartPageShop.getCountry().select('United States');
    cartPageShop.getAgreeCheckbox().check();
    cartPageShop.getCheckoutButton().click();

    /*billingAddressPageShop.getCountry().select('United States');
    billingAddressPageShop.getCityElement().type("York");
    billingAddressPageShop.getAddress1Element().type("address");
    billingAddressPageShop.getZipElement().type("M6S 2J3");
    billingAddressPageShop.getPhoneElement().type("888888888");
    cy.wait(2000);

    */
    cy.log('Proceed to payment');
    billingAddressPageShop.getContinueButton().click();
    billingAddressPageShop.getContinueAddButton().click({force: true});
    billingAddressPageShop.getContShipButton().click();
    billingAddressPageShop.getContShipMethButton().click();
    billingAddressPageShop.getContPayMethButton().click();
    billingAddressPageShop.getContPayInfoButton().click();
    billingAddressPageShop.getConfirmButton().click();
    billingAddressPageShop.getThankYouElement().should('be.visible');

  })


})

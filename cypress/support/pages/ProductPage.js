import BasePage from "./BasePage";
import user from "../../fixtures/new_user.json";

class ProductPage extends BasePage {

    getWishlistButton() {
        return cy.get('#add-to-wishlist-button-66');
    }

    getAddToCartButton() {
        return cy.get('#add-to-cart-button-66');
    }



}

export default new ProductPage()
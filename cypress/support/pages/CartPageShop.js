import BasePage from "./BasePage";

class CartPageShop extends BasePage {

    getRemoveCheckbox(){
        return cy.get('[name="removefromcart"]');
    }

    getUpdateButton(){
        return cy.get('[name="updatecart"]');
    }

    removeFromCart(){
        this.getRemoveCheckbox().check();
        this.getUpdateButton().click();
    }

    getEmptyCartMessage(){
        return cy.get('div:contains("Your Shopping Cart is empty!")');
    }

    getCountry(){
        return cy.get('#CountryId');
    }

    getAgreeCheckbox(){
        return cy.get('#termsofservice');
    }

    getCheckoutButton(){
        return cy.get('#checkout');
    }






}

export default new CartPageShop()
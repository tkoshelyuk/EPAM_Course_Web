import BasePage from "./BasePage";

class BillingAddressPageShop extends BasePage {



    getContinueButton(){
        return cy.get('[title="Continue"]').eq(0);
    }

    getContinueAddButton(){
        return cy.get('[title="Continue"]').eq(1);
    }

    getContShipButton(){
        return cy.get('[class$="new-address-next-step-button"]').eq(1);
    }

    getContShipMethButton(){
        return cy.get('[class$="shipping-method-next-step-button"]');
    }

    getContPayMethButton(){
        return cy.get('[class$="payment-method-next-step-button"]');
    }

    getContPayInfoButton(){
        return cy.get('[class$="payment-info-next-step-button"]');
    }

    getConfirmButton(){
        return cy.get('[class$="confirm-order-next-step-button"]');
    }

    getThankYouElement(){
        return cy.get('h1:contains("Thank you")');
    }





}

export default new BillingAddressPageShop()
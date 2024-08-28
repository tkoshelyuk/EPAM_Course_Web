import BasePage from "./BasePage";

class LoginPageShop extends BasePage {
    visit() {
        cy.log('Open authorization form');
        cy.visit('https://demowebshop.tricentis.com/login');
    }


    getEmailField() {
        return cy.get('#Email');
    }


    getPasswordField() {
        return cy.get('#Password');
    }

    getSubmitButton() {
        return cy.get('[value="Log in"]');
    }


    fillLoginFields(username = '', password = '') {
        cy.log('Fill in authorization fields');
        username ? this.getEmailField().type(username) : cy.log('Skip username field');
        password ? this.getPasswordField().type(password) : cy.log('Skip password field');
        this.getSubmitButton().click();
    }




}

export default new LoginPageShop()
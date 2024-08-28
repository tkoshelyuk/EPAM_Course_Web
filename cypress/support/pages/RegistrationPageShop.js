import BasePage from "./BasePage";
import user from "../../fixtures/new_user.json";

class RegistrationPageShop extends BasePage {
    visit() {
        cy.log('Open registration form');
        cy.visit('https://demowebshop.tricentis.com/register');
    }

    setFirstNameField() {
        return cy.get('#FirstName').type(user.firstname);
    }
    setLastNameField() {
        return cy.get('#LastName').type(user.lastname);
    }


    setEmailField(mail) {
        return cy.get('#Email').type(mail);
    }
    setPasswordField() {
        return cy.get('#Password').type(user.password);
    }
    setRepeatPasswordField() {
        return cy.get('#ConfirmPassword').type(user.repeatPassword);
    }


    submitRegistrationForm(){
        cy.get('#register-button').click();
    }

    getLoginButton(){
        return cy.get('h1:contains("Register")');
    }

   createNewUser(mail){
        this.visit();
        this.setFirstNameField();
        this.setLastNameField();
        this.setEmailField(mail);
        this.setPasswordField();
        this.setRepeatPasswordField();
        this.submitRegistrationForm();
    }

}

export default new RegistrationPageShop()
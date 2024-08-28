import user from '../fixtures/new_user.json'
import {faker} from '@faker-js/faker'
import registrationPageShop from "../support/pages/RegistrationPageShop";
import loginPageShop from "../support/pages/LoginPageShop";
import mainPageShop from "../support/pages/MainPageShop";



user.email = faker.internet.email({ firstName: 'Jeanne', lastName: 'Doe', provider: 'some.fakeMail.qa', allowSpecialCharacters: false });

describe('User registration', () => {
  it('Registration', () => {
    registrationPageShop.visit();

    cy.log('Create new user');
    registrationPageShop.createNewUser(user.email);
    cy.log('Verify after registration user sees login form')
    registrationPageShop
        .getLoginButton()
        .should('be.visible');
  })


  it('Authorization', () => {
    loginPageShop.visit();

    cy.log('Login with created user')
    loginPageShop.fillLoginFields(user.email, user.password);

    cy.log('Email should display on page');
    mainPageShop.getMail().should('contain', `${user.email}`);
  })


})

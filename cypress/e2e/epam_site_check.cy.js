import user from '../fixtures/new_user.json'
import {faker} from '@faker-js/faker'

import loginPage from "../support/pages/LoginPage";
import registrationPage from "../support/pages/RegistrationPage";
import commonMethods from "../support/pages/CommonMethods";
import mainPage from "../support/pages/MainPage";

import EpamMainPage from "../support/pages/EpamMainPage";



user.email = faker.internet.email({ firstName: 'Jeanne', lastName: 'Doe', provider: 'some.fakeMail.qa', allowSpecialCharacters: false });

describe('EPAM site checks', () => {
  it('Check elements on site', () => {
    EpamMainPage.visit();

    cy.log('Check logo');
    EpamMainPage.getLogoElement().should('have.css', 'visibility', 'hidden');


    cy.log('Check switcher');
    EpamMainPage.getSwitchElement().eq(1).click({force: true});
    EpamMainPage.getLightTheme().should('be.visible');

    cy.log('Select language');
    EpamMainPage.setLang();
    //cy.url().should('eq', 'https://careers.epam.ua/');
    //EpamMainPage.getImageElement().should('be.visible');

   /* cy.log('Check policies');
    EpamMainPage.policyPresent("INVESTORS").should('be.visible');
    EpamMainPage.policyPresent("OPEN SOURCE").should('be.visible');
    EpamMainPage.policyPresent("APPLICANT PRIVACY NOTICE").should('be.visible');
    EpamMainPage.policyPresent("PRIVACY POLICY").should('be.visible');
    EpamMainPage.policyPresent("COOKIE POLICY").should('be.visible');
    EpamMainPage.policyPresent("WEB ACCESSIBILITY").should('be.visible');


    EpamMainPage.regionsPresent("AMERICAS").should('exist');
    EpamMainPage.regionsPresent("EMEA").should('exist');
    EpamMainPage.regionsPresent("APAC").click();
    cy.get('[data-country-title="Australia"]').eq(0).should('be.visible');

    cy.log('Open Search');
    EpamMainPage.getSearchElement().click();
    EpamMainPage.doSearch("AI");
    EpamMainPage.getResult().should('be.visible');


*/

  })





})

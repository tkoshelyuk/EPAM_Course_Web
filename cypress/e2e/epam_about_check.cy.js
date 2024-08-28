import user from '../fixtures/new_user.json'
import {faker} from '@faker-js/faker'
import EpamMainPage from "../support/pages/EpamMainPage";
import EpamAboutPage from "../support/pages/EpamAboutPage";



user.email = faker.internet.email({ firstName: 'Jeanne', lastName: 'Doe', provider: 'some.fakeMail.qa', allowSpecialCharacters: false });

describe('EPAM about page checks', () => {
  it('Check mandatory elements on site', () => {
    EpamAboutPage.visit();
    EpamAboutPage.getContactUsElement().click();

    //check mandatory fields
    EpamAboutPage.getSubmitBtn().click();

    EpamAboutPage.getName("first_name").click();
    EpamAboutPage.getErrorElement("first_name").should('contain', 'This is a required field');

    EpamAboutPage.getName("last_name").click();
    EpamAboutPage.getErrorElement("last_name").should('contain', 'This is a required field');

    EpamAboutPage.getName("email").click();
    EpamAboutPage.getErrorElement("email").should('contain', 'This is a required field');

    EpamAboutPage.getName("phone").click();
    EpamAboutPage.getErrorElement("phone").should('contain', 'This is a required field');


    //fill mandatory fields and see captcha at the end
    EpamAboutPage.getName("first_name").type("First");
    EpamAboutPage.getName("last_name").type("Last");
    EpamAboutPage.getName("email").type(user.email);
    EpamAboutPage.getName("phone").type("0503492120");
    EpamAboutPage.getLocationEntryElement().select("Albania",{force: true});
    EpamAboutPage.getHearEpamEntryElement().select("Event",{force: true});
    EpamAboutPage.getCheckElement().check({force: true});
    EpamAboutPage.getSubmitBtn().click();
    cy.get('[title="recaptcha challenge expires in two minutes"]').should('be.visible');
  })


  it('Check logo', () => {
    EpamAboutPage.visit();
    EpamMainPage.getLogoElement().click({force: true});
    cy.url().should('eq', 'https://www.epam.com/');
  })

  it('Download report', () => {
    EpamAboutPage.visit();
    EpamAboutPage.getDownloadButton()
        .should('have.attr', 'href')
        .and('include', 'EPAM_Corporate_Overview_Q4_EOY.pdf');
    EpamAboutPage.getDownloadButton()
        .should('have.attr', 'download')
    EpamAboutPage.getDownloadButton().click();

  })


})

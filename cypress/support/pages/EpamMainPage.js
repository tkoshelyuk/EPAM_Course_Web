import BasePage from "./BasePage";

class EpamMainPage extends BasePage {



    visit() {
        cy.log('Open main page');
        cy.visit('https://www.epam.com/');
    }

    getLogoElement(){
        return cy.get('[src="/content/dam/epam/2023/epam.svg"][alt="EPAM"]').first();
    }

    getSwitchElement(){
        return cy.get('.theme-switcher .switch');
    }

    getLightTheme(){
        return cy.get('[class$="light-mode"]');
    }

    setLang() {
        cy.get('.location-selector__button-language:contains("Global")').eq(1).click({force: true});
        cy.get('[lang="uk"]').eq(1).click({force: true});
    }




}

export default new EpamMainPage()
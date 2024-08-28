import BasePage from "./BasePage";

class MainPage extends BasePage {
    getMail(){
        return cy.get(`[class="account"]`);
    }


    visit() {
        cy.log('Open main page');
        cy.visit('https://demowebshop.tricentis.com/');
    }

    getCompElement(){
        return cy.get('[href="/computers"]').first();
    }

    clickOnCompElement(){
        return this.getCompElement().click();
    }

    getElementInGroup(){
        return cy.get('.sub-category-grid');
    }

    getAccessElement(){
        return cy.get('[title="Show products in category Accessories"]').first();
    }

    getPages(){
        return cy.get('#products-pagesize');
    }

    getSorting(){
        return cy.get('#products-orderby');
    }

    getProdList(){
        return cy.get('.product-grid .item-box');
    }

    getfirstElementInGrid() {
        return cy.get('.product-grid .product-title a').first();
    }
    getSecElementInGrid() {
        return cy.get('a:contains("TCP Instructor Led Training")').eq(0);
    }

    getWishQty() {
        return cy.get('span:contains("(1)")');
    }

    getCartQty() {
        return cy.get('.ico-cart span:contains("(1)")');
    }

    openCart() {
        return cy.get('.ico-cart span:contains("Shopping cart")');
    }



}

export default new MainPage()
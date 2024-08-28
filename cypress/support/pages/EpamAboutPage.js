import BasePage from "./BasePage";

class EpamAboutPage extends BasePage {


    visit() {
        cy.log('Open about page');
        cy.visit('https://www.epam.com/about');
    }

    getContactUsElement(){
        return cy.get('span[class="museo-sans-bold"]:contains("Contact Us")');
    }

    getSubmitBtn(){
        return cy.get('.button-ui');
    }

    getLocationElement(){
        return cy.get('#select2-_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_country-container');
    }

    getLocationEntryElement(){
        return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_country');
    }

    getHearEpamElement(){
        return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment_how_hear_about-label');
    }

    getHearEpamEntryElement(){
        return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment_how_hear_about');
    }

    getCheckElement(){
        return cy.get('[id^="new_form_gdprConsent"]').eq(0);
    }

    getName(text){
        return cy.get(`#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_${text}`);
    }

    getErrorElement(text){
        return cy.get(`[id="_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_${text}-error"] span[class="validation-text"]`);
    }

    getDownloadButton(){
        return cy.get('a[href="https://www.epam.com/content/dam/epam/free_library/EPAM_Corporate_Overview_Q4_EOY.pdf"]');
    }




}

export default new EpamAboutPage()
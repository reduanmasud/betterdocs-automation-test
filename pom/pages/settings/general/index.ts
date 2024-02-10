import { Page } from "@playwright/test";
import { visitGeneralSettingsPage } from "./visit-general-settings-page";

type GeneralSettingsConstructorProps = {
    page : Page;
}


export  class GeneralSettings {
    page: Page;

    constructor ( { page } : GeneralSettingsConstructorProps ) {
        this.page = page;
    }


    option_multiple_kb = () => this.page.locator("div.wprf-name-multiple_kb");
    option_builtin_doc_page = () => this.page.locator("div.wprf-name-builtin_doc_page");
    option_breadcrumb_doc_title = () => this.page.locator("div.wprf-name-breadcrumb_doc_title");
    option_docs_slug = () => this.page.locator("div.wprf-name-docs_slug");
    option_category_slug = () => this.page.locator("div.wprf-name-category_slug");
    option_permalink_structure = () => this.page.locator("div.wprf-name-permalink_structure");
    option_faq_scheme = () => this.page.locator("div.wprf-name-enable_faq_schema");
    option_analytics_from = () => this.page.locator("div.wprf-name-analytics_from");
    option_exclude_bot_analytics = () => this.page.locator("div.wprf-name-exclude_bot_analytics");


    /** @borrow visitGeneralSettingsPage at this.visitGeneralSettingsPage */
    visitGeneralSettingsPage: typeof visitGeneralSettingsPage = visitGeneralSettingsPage.bind(this);

    

}
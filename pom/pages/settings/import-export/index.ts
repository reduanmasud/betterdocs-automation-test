import { Page } from "@playwright/test";
// import { GeneralSettings } from "./general";
// import { visitGeneralSettingsPage } from "./general/visit-general-settings-page";

type ImportExportSettingsConstructorProps = {
    page: Page;
}

export class ImportExportSettings {
    page: Page;

    constructor( { page } : ImportExportSettingsConstructorProps) {
        this.page = page;
    }


    //General
    title = () => this.page.locator(".wprf-section-title");


    //For Import > Import Docs
    // option_

    /** @borrow GeneralSettingsPage at this.generalSettingsPage */
    // generalSettingsPage: typeof GeneralSettings = GeneralSettings.bind(this);


    /** @borros visitGeneralSettingsPage at this.visitGenerealSettingsPage     */
    // visitGeneralSettingsPage: typeof visitGeneralSettingsPage = visitGeneralSettingsPage.bind(this)
}
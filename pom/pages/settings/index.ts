import { Page } from "@playwright/test";
import { GeneralSettings } from "./general";
import { visitGeneralSettingsPage } from "./general/visit-general-settings-page";

type BetterDocsSettingsConstructorProps = {
    page: Page;
}

export class BetterDocsSettings {
    page: Page;

    constructor( { page } : BetterDocsSettingsConstructorProps) {
        this.page = page;
    }




    /** @borrow GeneralSettingsPage at this.generalSettingsPage */
    // generalSettingsPage: typeof GeneralSettings = GeneralSettings.bind(this);


    /** @borros visitGeneralSettingsPage at this.visitGenerealSettingsPage     */
    visitGeneralSettingsPage: typeof visitGeneralSettingsPage = visitGeneralSettingsPage.bind(this)
}
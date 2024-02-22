import { Page } from "@playwright/test";
import { visitLicenseSettingsPage } from "./visit-license-settings-page";

type LicenseSettingsConstructorProps = {
    page: Page;
}


export class LicenseSettings {
    page: Page;

    constructor( {page}: LicenseSettingsConstructorProps )
    {
        this.page = page;
    }


    /** @borrow visitLicenseSettingsPage at this.visitLicenseSettingsPage */
    visitLicenseSettingsPage: typeof visitLicenseSettingsPage = visitLicenseSettingsPage.bind(this);
}


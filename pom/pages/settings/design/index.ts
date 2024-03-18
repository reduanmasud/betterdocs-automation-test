import { Page } from "@playwright/test";
import { visitDesignSettingsPage } from "./visit-design-settings-page";

type DesignSettingsConstructorProps = {
    page: Page;
}


export class DesignSettings {
    page: Page;

    constructor( { page } : DesignSettingsConstructorProps ) {
        this.page = page;
    }


    test = () => this.page.locator("//p[contains(text(),'Design your templates & pages with live customizer')]");

    /**@borrow visitDesignSettingsPage at this.visitDesignSettingsPage */
    visitDesignSettingsPage: typeof visitDesignSettingsPage = visitDesignSettingsPage.bind(this);
}
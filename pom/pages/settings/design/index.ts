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


    

    /**@borrow visitDesignSettingsPage at this.visitDesignSettingsPage */
    visitDesignSettingsPage: typeof visitDesignSettingsPage = visitDesignSettingsPage.bind(this);
}
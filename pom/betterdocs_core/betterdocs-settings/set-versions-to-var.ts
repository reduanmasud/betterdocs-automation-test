/**
 * Internal Dependencies
 */

import { BetterDocsSettings } from './';
import { chromium, expect, type FullConfig } from "@playwright/test";
/**
 * Visit Layout Pages
 * * * * * * * 
 * @param this 
 * @param options Name of menu and submenu of Settings > Layout Page.
 */
export async function setVersions(this: BetterDocsSettings) {

    if (!this.browser) {
        throw new Error("Browser is not initialized");
    }


    const page = await this.browser.newPage()
    await page.goto('/wp-admin/admin.php?page=betterdocs-analytics');
    await page.waitForLoadState('networkidle');

    // Get free version
    const freeVersionElement = await page.$("//span[text()='Version: ']/strong");
    this.freeVersion = freeVersionElement ? await freeVersionElement.innerText() : "";
    console.log(this.freeVersion);

    // Get pro version
    const proVersionElement = await page.$("//span[text()='Pro Version: ']/strong");
    this.proVersion = proVersionElement ? await proVersionElement.innerText() : "";
    console.log(this.proVersion);
    page.close();
    this.page = await this.browser.newPage();
}
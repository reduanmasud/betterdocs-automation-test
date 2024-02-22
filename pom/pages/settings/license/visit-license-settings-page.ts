/**
 *  Internal Dependencies
 */
import type { LicenseSettings } from './';


/**
 * Visit License Page
 * 
 * @param this
 * @param option SOME OPTIONS SHOULD GO HERE
 */


export async function visitLicenseSettingsPage(this: LicenseSettings) {
    await this.page.goto('wp-admin/admin.php?page=betterdocs-settings');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.locator("//li[@data-key='tab-license']").waitFor();
    await this.page.locator("//li[@data-key='tab-license']").click();
}



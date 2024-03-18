/**
 *  Internal Dependencies
 */
import type { ImportExportSettings } from './';


/**
 * Visit License Page
 * 
 * @param this
 * @param option SOME OPTIONS SHOULD GO HERE
 */


export async function visitLicenseSettingsPage(this: ImportExportSettings) {
    await this.page.goto('wp-admin/admin.php?page=betterdocs-settings');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.locator("//li[@data-key='tab-import-export']").waitFor();
    await this.page.locator("//li[@data-key='tab-import-export']").click();
}



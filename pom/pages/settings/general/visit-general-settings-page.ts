/**
 * External Dependencies
 */

import { join } from "path";


/**
 * Internal Dependencies
 */
import { getPageError } from "../get-page-error";
import type { GeneralSettings } from './';

export async function visitGeneralSettingsPage(
    this: GeneralSettings
) {
    await this.page.goto('wp-admin/admin.php?page=betterdocs-settings');

    
}
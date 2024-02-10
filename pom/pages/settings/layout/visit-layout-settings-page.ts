/**
 * Internal Dependencies
 */

import type { LayoutSettings } from './';
import type { Layout_menu, Layout_submenu } from './types';

/**
 * Visit Layout Pages
 * 
 * @param this 
 * @param options Name of menu and submenu of Settings > Layout Page.
 */
export async function visitLayoutSettingsPage(this: LayoutSettings,
    options?: {
    menu?: Layout_menu,
    sub_menu?: Layout_submenu
    }
) {

    if(options?.menu == "Documentation Page" || options?.menu == undefined)
    {
        if(options?.sub_menu == "General" || options?.sub_menu == undefined)
        {
            await this.page.goto('wp-admin/admin.php?page=betterdocs-settings');
            await this.page.waitForLoadState('domcontentloaded');
            await this.page.locator("//li[@data-key='tab-layout']").waitFor();
            await this.page.locator("//li[@data-key='tab-layout']").click();
            await this.page.locator("//li[@data-key='layout_documentation_page']").click();
            await this.page.locator("//li[@data-key='layout_documentation_page_general']").click();
        } 
        else if(options?.sub_menu == "Search")
        {
            await this.page.goto('wp-admin/admin.php?page=betterdocs-settings');
            await this.page.waitForLoadState('domcontentloaded');
            await this.page.locator("//li[@data-key='tab-layout']").waitFor();
            await this.page.locator("//li[@data-key='tab-layout']").click();
            await this.page.locator("//li[@data-key='layout_documentation_page']").click();
            await this.page.locator("//li[@data-key='layout_documentation_page_search']").click();
        }
        else if(options?.sub_menu == "Order By")
        {
            await this.page.goto('wp-admin/admin.php?page=betterdocs-settings');
            await this.page.waitForLoadState('domcontentloaded');
            await this.page.locator("//li[@data-key='tab-layout']").waitFor();
            await this.page.locator("//li[@data-key='tab-layout']").click();
            await this.page.locator("//li[@data-key='layout_documentation_page']").click();
            await this.page.locator("//li[@data-key='layout_documentation_page_order_by']").click();
        }
        else
        {
            throw new Error(`There is no submemu named <b>${options?.sub_menu}</b> under the ${options?.menu}`);
        }

    }
    else if(options?.menu == "Single Doc")
    {
        if(options?.sub_menu == "General" || options?.sub_menu == undefined)
        {
            await this.page.goto('wp-admin/admin.php?page=betterdocs-settings');
            await this.page.waitForLoadState('domcontentloaded');
            await this.page.locator("//li[@data-key='tab-layout']").waitFor();
            await this.page.locator("//li[@data-key='tab-layout']").click();
            await this.page.locator("//li[@data-key='layout_single_doc']").click();
            await this.page.locator("//li[@data-key='layout_single_doc_general']").click();
        } 
        else if(options?.sub_menu == "TOC")
        {
            await this.page.goto('/wp-admin/admin.php?page=betterdocs-settings');
            await this.page.waitForLoadState('domcontentloaded');
            await this.page.locator("//li[@data-key='tab-layout']").waitFor();
            await this.page.locator("//li[@data-key='tab-layout']").click();
            await this.page.locator("//li[@data-key='layout_single_doc']").click();
            await this.page.locator("//li[@data-key='layout_single_doc_TOC']").click();
        }
        else if(options?.sub_menu == "Breadcrumb")
        {
            await this.page.goto('wp-admin/admin.php?page=betterdocs-settings');
            await this.page.waitForLoadState('domcontentloaded');
            await this.page.locator("//li[@data-key='tab-layout']").waitFor();
            await this.page.locator("//li[@data-key='tab-layout']").click();
            await this.page.locator("//li[@data-key='layout_single_doc']").click();
            await this.page.locator("//li[@data-key='layout_single_doc_breadcrumb']").click();
        }
        else if(options?.sub_menu == "Email Feedback")
        {
            await this.page.goto('wp-admin/admin.php?page=betterdocs-settings');
            await this.page.waitForLoadState('domcontentloaded');
            await this.page.locator("//li[@data-key='tab-layout']").waitFor();
            await this.page.locator("//li[@data-key='tab-layout']").click();
            await this.page.locator("//li[@data-key='layout_single_doc']").click();
            await this.page.locator("//li[@data-key='layout_single_doc_email_feedback']").click();
        }
        else if(options?.sub_menu == "Attachments")
        {
            await this.page.goto('wp-admin/admin.php?page=betterdocs-settings');
            await this.page.waitForLoadState('domcontentloaded');
            await this.page.locator("//li[@data-key='tab-layout']").waitFor();
            await this.page.locator("//li[@data-key='tab-layout']").click();
            await this.page.locator("//li[@data-key='layout_single_doc']").click();
            await this.page.locator("//li[@data-key='layout_single_doc_attachments']").click();
        }
        else if(options?.sub_menu == "Related Docs")
        {
            await this.page.goto('wp-admin/admin.php?page=betterdocs-settings');
            await this.page.waitForLoadState('domcontentloaded');
            await this.page.locator("//li[@data-key='tab-layout']").waitFor();
            await this.page.locator("//li[@data-key='tab-layout']").click();
            await this.page.locator("//li[@data-key='layout_single_doc']").click();
            await this.page.locator("//li[@data-key='layout_single_doc_related_docs']").click();
        }
        else
        {
            throw new Error(`There is no submemu named <b>${options?.sub_menu}</b> under the ${options?.menu}`);
        }
    }
    else if (options?.menu == "Archive Page")
    {
        await this.page.goto('wp-admin/admin.php?page=betterdocs-settings');
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.locator("//li[@data-key='tab-layout']").waitFor();
        await this.page.locator("//li[@data-key='tab-layout']").click();
        await this.page.locator("//li[@data-key='layout_archive_page']").click();
    }
    else 
    {
        throw new Error(`There is not manue named ${options?.menu}`);
    }

}
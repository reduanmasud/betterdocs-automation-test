import type { DesignSettings  } from ".";


export async function visitDesignSettingsPage()
{
    await this.page.goto('wp-admin/admin.php?page=betterdocs-settings');
    await this.page.locator("//li[@data-key='tab-design']").waitFor();
    await this.page.locator("//li[@data-key='tab-design']").click();
}
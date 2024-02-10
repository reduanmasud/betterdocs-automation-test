import { chromium, type FullConfig } from "@playwright/test";
import base_config from "./configs/base_config";

async function globalSetup(config: FullConfig) {
    const {baseURL, storageState} = config.projects[0].use;
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(`${baseURL}/wp-admin`!);
    await page.locator(`#user_login`).fill(base_config.login.username);
    await page.locator(`#user_pass`).fill(base_config.login.password);
    await page.getByRole('checkbox',{name: `Remember Me`}).check();
    await page.getByRole('button', {name: `Log In`}).click();
    await page.context().storageState({path: storageState as string});
}

export default globalSetup;
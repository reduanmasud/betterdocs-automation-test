import { chromium, expect, type FullConfig } from "@playwright/test";
import base_config from "./configs/base_config";

async function globalSetup(config: FullConfig) {
    const {baseURL, storageState} = config.projects[0].use;
    const browser = await chromium.launch();
    const page = await browser.newPage();
    console.log("Accessing to login page...");
    await page.goto(`${baseURL}/wp-admin`!);
    console.log(`Entering username: ${base_config.login.username}`);
    await page.locator(`#user_login`).fill(base_config.login.username);
    console.log(`Entering Password:  ${base_config.login.password}`);
    await page.locator(`#user_pass`).fill(base_config.login.password);
    console.log("Checking Remember Me")
    await page.getByRole('checkbox',{name: `Remember Me`}).check();
    console.log("Click Login ...")
    await page.getByRole('button', {name: `Log In`}).click();
    console.log(storageState);
    let title = await page.title();
    console.log(`Page Title is : ${title}`)

    const TITLE = /Dashboard/
    let _try = 0;
    do{
        console.log(`Entering username: ${base_config.login.username}`);
        if(title.search(TITLE) != -1) break;
        await page.locator(`#user_login`).fill(base_config.login.username);
        console.log(`Entering Password:  ${base_config.login.password}`);
        await page.locator(`#user_pass`).fill(base_config.login.password);
        console.log("Checking Remember Me")
        await page.getByRole('checkbox',{name: `Remember Me`}).check();
        console.log("Click Login ...")
        await page.getByRole('button', {name: `Log In`}).click();
        console.log(storageState);
        title = await page.title();
        console.log(`Page Title is : ${title}`);
        _try++;
    }while(title.search(TITLE) == -1 && _try <= 3)
    await page.context().storageState({path: storageState as string});
}

export default globalSetup;
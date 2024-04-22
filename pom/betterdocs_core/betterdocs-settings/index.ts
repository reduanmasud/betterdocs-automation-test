import { Page, Browser, chromium } from "@playwright/test";

export class BetterDocsSettings {
    freeVersion: string;
    proVersion: string;
    page: Page;
    browser: Browser;

    constructor() {
        this.initialize();
    }

    async initialize() {
        this.browser = await chromium.launch();
        this.page = await this.browser.newPage();
        await this.setVersions();
    }

    async setVersions() {
        if (!this.browser) {
            throw new Error("Browser is not initialized");
        }

        const page = this.page;

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

        await page.close();
        this.page = await this.browser.newPage();
    }

    getFreeVersion() {
        return this.freeVersion;
    }

    getProVersion() {
        return this.proVersion;
    }
}

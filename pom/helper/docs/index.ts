import { Page } from "@playwright/test";

type DocsPage = {
    page: Page;
}

export class Docs {
    
    title: string;
    categories: Array<string>;
    mkb?: Array<string>;
    content: string;
    page: Page;

    constructor({page}:DocsPage) {
        this.page = page;
    }


    addTitle(title:string) {
        this.title = title;
    }

    addCategories(categories: [])
    {
        this.categories = categories;
    }

    addMKB(mkb: [])
    {
        this.mkb = mkb;
    }

    addContent(content: string) {
        this.content = content;
    }

    save()
    {
        // will perform some action
    }
}
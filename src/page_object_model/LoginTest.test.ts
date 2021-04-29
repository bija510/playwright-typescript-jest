import { Browser, BrowserContext, Page, chromium } from "playwright";
import FacebookUtilities from "./loginPage";

describe("Frames handling concept", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext()
        page = await context.newPage();
        await page.goto("https://www.facebook.com/")
    })

    test("Interact with frames", async () => {
        // LoginPage.ts
        const facebookUtilities = new FacebookUtilities(page, context);
        await facebookUtilities.login('apple', "abdd")

    })

    afterAll(async () => {
        await page.close()
        await context.close()
        await browser.close()
    })
})
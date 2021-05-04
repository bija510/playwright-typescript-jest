import { Browser, BrowserContext, Page, chromium } from "playwright";
import OrangeHRM from "../pages/loginPage";
import * as testData from "../../data/TestData.json"

describe("Frames handling concept", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    const data = <any>testData

    beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext()
        page = await context.newPage();
        await page.goto(data.url)
    })

    test("Interact with frames", async () => {
        // LoginPage.ts
        let orgHRM = new OrangeHRM(page, context);
        await orgHRM.login(data.userName, data.password)

    })

    afterAll(async () => {
        await page.close()
        await context.close()
        await browser.close()
    })
})
import { chromium } from "playwright";

describe('lunch browser', () => {

    test('open brower', async () => {

        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://qaclickacademy.github.io/protocommerce/")

        //await browser.close();
    })

})
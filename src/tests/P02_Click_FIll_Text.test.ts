import { chromium, firefox } from "playwright";

describe('basic actions', () => {

    test('click fill and innerText', async () => {

        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://learn.letskodeit.com/p/practice")
        await page.fill("//input[@id='name']", 'for test')
        await page.click("//input[@id='benzcheck']")
        console.log(await page.innerText("//h1[normalize-space()='Practice Page']"))

        //await browser.close();
    })


})
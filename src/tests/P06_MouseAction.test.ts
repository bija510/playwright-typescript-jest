import { chromium, ChromiumBrowser, ChromiumBrowserContext, Page } from "playwright";

describe('Mouse Actions', () => {

    let browser: ChromiumBrowser;
    let context: ChromiumBrowserContext;
    let page: Page;

    beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        })
        context = await browser.newContext();
        page = await context.newPage();
    })

    test('mouse action', async () => {

        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://learn.letskodeit.com/p/practice")

        //Just a concept css don't work
        // Double click
        await page.dblclick('input#bmwcheck');

        // Right click
        await page.click('#item', { button: 'right' });

        // Shift + click
        await page.click('#item', { modifiers: ['Shift'] });

        // Hover over element
        await page.hover('#item');

        // Click the top left corner
        await page.click('#item', { position: { x: 0, y: 0 } });

    })

    afterAll(async () => {
        await new Promise(r => setTimeout(r, 3000));
        await page.close()
        await context.close()
        await browser.close()

    })


})
import { chromium, firefox } from "playwright";

describe('Mouse Actions', () => {

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

        //await browser.close();
        //await context.close();
    })


})
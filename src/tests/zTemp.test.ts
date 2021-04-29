import { Browser, BrowserContext, chromium, Page } from "playwright"

describe('ForPractice', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        })
        context = await browser.newContext()
        page = await context.newPage()
        await page.goto('https://letcode.in/frame')

    })
    test("demoTemp", async () => {
        const frame = await page.frame({ name: 'firstFr' })
        if (frame != null) {
            await frame.fill("input[placeholder='Enter name']", 'david')

            //inner frames
            const frames = frame.childFrames()
            console.log('Numb of frames ' + frames.length)
            if (frames != null) {
                await frames[1].fill("input[name='email']", "abcd@gmail.com")
            } else { console.log('===frame not found===') }

        } else { throw new Error('No such frame'); }
    })
    afterAll(async () => {
        await new Promise(r => setTimeout(r, 3000));
        await page.close()
        await context.close()
        await browser.close()
    })

})
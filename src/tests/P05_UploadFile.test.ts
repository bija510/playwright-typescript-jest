import { chromium } from "playwright"

describe('Upload file demo', () => {

    /*=============to run ==> jest P05_UploadFile.test.ts ==================*/

    xtest('upload file', async () => {
        const filePath1 = process.cwd() + "\\upload_file\\PdfFile.pdf" // path type 1 OK
        const filePath2 = process.cwd() + "/upload_file/TextFile.txt" // path type 2 OK
        const filePath3 = "./upload_file/PngFile.png" // path type 3 OK

        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto("https://www.sendgb.com/")

        // 1. For single file upload
        // await page.setInputFiles("input[name='qqfile']", filePath1) 

        // 2. For multiple file upload
        await page.setInputFiles("input[name='qqfile']", [filePath2, filePath3])
    })
    test('upload file', async () => {
        const filePath1 = process.cwd() + "\\upload_file\\PdfFile.pdf" // path type 1 OK
        const filePath2 = process.cwd() + "/upload_file/TextFile.txt" // path type 2 OK
        const filePath3 = "./upload_file/PngFile.png" // path type 3 OK

        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto("https://the-internet.herokuapp.com/upload")
        page.on("filechooser", async (filechooser) => {
            // 1. single file
            await filechooser.setFiles(filePath1)
            // 2. multiple file
            // await filechooser.setFiles([filePath1, filePath2])
        })
        await page.click(".example + div#drag-drop-upload", { force: true })
    })



})
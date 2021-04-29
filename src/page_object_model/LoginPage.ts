import { Page, BrowserContext } from 'playwright';

export default class FacebookUtilities {
    page: Page;
    context: BrowserContext;
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }

    TxtBxLogin = `xpath=//input[@id='email']`;
    TxtBxPassword = `xpath=//input[@id='pass']`;
    BtnLogin = `xpath=//button[@id='loginbutton']`;
    BtnProfileCancel = `xpath=//button[@id='u_0_0']`;
    BtnProfileContinue = `xpath=//button[@name='__CONFIRM__']`;
    BtnGroupsNotNow = `xpath=//button[@name='__SKIP__']`;
    BtnGroupsOk = `xpath=//button[@name='__CONFIRM__']`;
    LinkChooseWhatToAllow = `xpath=//a[@id='u_0_19']`;

    //Login
    login = async (email: string, password: string) => {
        await this.page.fill(this.TxtBxLogin, email);
        await this.page.fill(this.TxtBxPassword, password);
        await this.page.click(this.BtnLogin);
        await this.page.waitForNavigation({ waitUntil: `domcontentloaded` });
    };

    //Profile Page
    profilePopupClickCancel = async () => {
        await this.page.waitForSelector(this.BtnProfileCancel);
        await this.page.click(this.BtnProfileCancel);
        await this.page.waitForNavigation({ waitUntil: `domcontentloaded` });
    };

    profilePopupClickContinue = async () => {
        await this.page.waitForSelector(this.BtnProfileContinue);
        await this.page.click(this.BtnProfileContinue);
        await this.page.waitForNavigation({ waitUntil: `domcontentloaded` });
    };

    //Groups Page
    groupsPageClickOnNotNow = async () => {
        await this.page.waitForSelector(this.BtnGroupsNotNow);
        await this.page.click(this.BtnGroupsNotNow);
        await this.page.waitForNavigation({ waitUntil: `domcontentloaded` });
    };

    groupsPageClickOnOk = async () => {
        await this.page.waitForSelector(this.BtnGroupsOk);
        await this.page.click(this.BtnGroupsOk);
        await this.page.waitForNavigation({ waitUntil: `domcontentloaded` });
    };
}
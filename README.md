# Playwright-typescript-jest

# Introduction
1. For typescript tutorial click this link [typescript tutorial](https://www.tutorialspoint.com/typescript/index.htm)
2. For Playwright Docs Click this link [playwright](https://playwright.dev/docs/intro/)
3. For Jest framework (same like TestNG) click this link [jest](https://jestjs.io/docs/getting-started)
4. For Jest Assertion click this link [jest-assertion](https://jestjs.io/docs/expect)
5. For Jest-cli means how to run form command-line. follow this link [jest-cli](https://jestjs.io/docs/cli)
## What is Playwright?
The playwright is a Node.js library to automate Chromium, Firefox, and WebKit with a single API. Playwright is built to enable cross-browser web testing.

Playwright by Microsoft did start as a fork of Puppeteer
Puppeteer is a node library to automate the chromium browsers with the JavaScript API

## 1. Capabilities:
* It spans multiple pages, domains, and iframes
* Intercept network activity for stubbing and mocking network requests
* Emulate mobile devices, geolocation, permissions
* Native input events for mouse and keyboard
* Upload & download support

Playwright enables fast, reliable, and capable automation across all modern browsers

## 2. Support for all browsers
* Test on Chromium, Firefox, and WebKit
* Test for mobile (device emulation)
* Headless and headful

## 3. Fast and reliable execution
* Auto-wait APIs (clicks, types, etc)
* Timeout-free automation
* Lean parallelization with browser contexts
* Wide variety of selectors (locators) & shadow-dom support
* Can handle single page application

## 4. Pre-requirements:
 - Node JS
 - VS Code Editor

## How to create package.json
> Control + J --> npm init -y

## How to add dependencies inside package.json file
* Paste this dependencies inside package.json
```
 "devDependencies": 
  {
    "@types/jest": "^26.0.20",
    "jest": "^26.6.3",   
    "jest-playwright-preset": "^1.4.5",  
    "playwright": "^1.8.0",   
    "typescript": "^4.1.3" ,
    "ts-jest": "^26.5.0"
  }
```
* To install dependencies
> npm + i (only available in this package not global) & all file will store in **_nodel modules_**

##  @types/jest": "^26.0.20"
* @types will give all the documentation when we mouse hover

## jest (same like TestNG)

## "ts-jest
> will compile from typescript to javascript and run from there

## How to run ts file
* create the tsconfig.json file
* paste this inside 
```
{
    "compilerOptions": {
        "target": "es6",
        "strict": true,
        "module": "commonjs",
        "sourceMap": true
    }
}
```
then, paste this inside ** _package.json file_**
```
"jest": {
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ]
  }
  "scripts": {
    "test": "jest"
  }
```
  With this set up now we can able to run the script

  ## How to  run the specefic test case for that we need to install
  * npm i -g jest-cli
  * To run specefic test case:- jest P02_Click_Fill_Text.test.ts 
  * No need to mention the package name or folder name
 ## How to add vs-code-project to github
 ```
  1. Open your new project folder with vscode.
  2. click on the source conrol menu on the sidebar (or press Ctrl+Shift+G)
  3. Click on publish to github.
  4. From there just login and follow the instructions and you're good to go.
  extremely easy it will ask to login that's all
 ```
 ## How to run cli-command to open website to record script
 Just run this command = npx playwright codegen wikipedia.org 

 ## How to upload file
 1. if HTML tag _"input"_ is present and we have _"type = file"_ then we can use _page.setInputFiles_
 2. if Not input tage then in selenium we use 3rd party tool like robot class or sikuli or autoit
 but in this we use filechooser.setFiles(filePath1) using listener & also it handle a window popup.

 ## How to read JSON data file.
 1. create testData.json file
 2. create pwright.config.ts file & paste this
 ```
  declare module "*.json" {
    const value: any;
    export default value
  }
 ```
 3. Then in the LoginTest.test.ts file import this.
  ```
  import * as testData from "../../data/TestData.json"
  ```
  4. Then declare this const variable & use Example:-  data.firstName, data.lastName..
  ```
  let data = <any>testData
  ```

  ## How to run Test Suite/ multiple .ts file.
  ```
  jest LoginTest.test.ts P10_Alert.test.ts P05_UploadFile.test.ts
  ```

  ## How to get html report.
  * add this inside the devDependencies & jest.
  ```
   "devDependencies": {
        "jest-html-reporter": "^3.3.0"
    },
    "jest": {
        "reporters": ["default", "./node_modules/jest-html-reporter"]
        }
  ```
  * Then to install:- npm i
  * The test-report.html will be created in root directory & show in console as well.
  * To open Right-click on report & Open with live server.

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
```js
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

  ## How to Run test script file (.ts or .js) from the command line.
  ```
  # How to run single LoginTest.test.ts file
    jest LoginTest.test.ts

  # How to run Test Suite/ multiple .ts file.
    jest LoginTest.test.ts P10_Alert.test.ts P05_UploadFile.test.ts
 
  # How to run tests related to changed files based on hg/git (uncommitted files):
    jest -o

  # How to run all tests in parellel.
    jest

  # How to run all test sequentially.
    jest --maxWorkers 1
    jest -w 1 also works, as an alias.

  # How to run tests that match this spec name (match against the name in describe or test, basically).
    jest -t Handeling various Alert

  # How to run test with test coverage
    - jest LoginTest.test.ts --collectCoverage

  # How to skip the describe block or test block
    - describe.skip(name, fn) or under the alias: xdescribe(name, fn)
    - test.skip(name, fn) or xtest(name, fn)

  # when you are planning on writing tests. These tests will be highlighted in the summary output at the end so you know how many tests you still need todo.
    - test.todo 

  # How to run test concurrently means at the same time or parallel.
    - test.concurrent [for 4 test & all will run at same time]
  
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
  * Just run the test in terminal:-
    - jest LoginTest.test.ts P12_Jest_Assertion.test.ts
  * And the test-report.html file will be created in root directory & show in console as well.
  * To open report in browser. Right-click on report & Open with live server.

  ## How to get advanced Allure-jest html report 
  1. Documentation:
   * Github :- https://github.com/zaqqaz/jest-allure &
   * NPM :- https://www.npmjs.com/package/jest-allure
  2. Paste this inside the package.json inside devDependencies 
  ```
    "devDependencies": {
            "jest-allure": "^0.1.3"
        },
  ```
      
  3. Create a jest.config.js file in root directory & paste this.
  ```
      module.exports = {
      "roots": [
          "<rootDir>/src"
      ],
      "testMatch": [
          "**/__tests__/**/*.+(ts|tsx|js)",
          "**/?(*.)+(spec|test).+(ts|tsx|js)"
      ],
      "transform": {
          "^.+\\.(ts|tsx)$": "ts-jest"
      },
      "reporters": ["default", "jest-allure"],
      "setupFilesAfterEnv": ["jest-allure/dist/setup"],
      }
  ```
  4. Run this command to install :- npm i
  5. Just run the script :- jest LoginTest.test.ts P10_Alert.test.ts P05_UploadFile.test.ts
  6. Allure-result folder will generated with .xml file.
  7. Run this command in c:\user\userName> npm i -g allure-commandline
  8. Come back to the Vs-code terminal & run :- npm i -g jest-allure-reporter
  9. Run command :- allure serve
  10. It will open the browser with allure dashboard service with report.
  11. But to generate the allure HTML Report run this in terminal :- allure generate
  12. It will generate the allure html report inside allure-report folder.


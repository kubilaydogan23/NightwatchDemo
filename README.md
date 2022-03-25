# Creating a Nightwatch.js Framework

Nightwatch is an end-to-end testing framework based on Node.js that uses the W3C Webdriver API to simulate user actions in a web application.

## **Installing and Configuring Nightwatch**

### ***Steps to Follow***

1.	Install [VS Code](https://code.visualstudio.com/download) (optional)
2.	Install [Node.js](https://nodejs.org/en/download/)
3.	Create a project folder
4.	Open the folder in VS Code
5.	Open the Terminal in VS Code and enter: 
    ```
    npm init -y
    ```

    💡 This command will create/initialize our project with a default **`package.json`** file


6.	Install Nightwatch and ChromeDriver  
    ```
    npm install nightwatch chromedriver
    ```
7.	Create a file and name it as **`nightwatch.conf.js`**
8.  Enter the following code to nightwatch.conf.js

    ```java
    module.exports = {
        src_folders: ["tests"],
        page_objects_path: ['pages'],
        globals_path: "globals/globals.js",   

        webdriver: {
            start_process: true,
            server_path: 'node_modules/.bin/chromedriver',
            port: 9515
        },

        test_settings: {
            default: {
                desiredCapabilities: {
                    browserName : 'chrome'
                }
            },
        }
    };
    ```

    💡 `start_process: true` will allow Nightwatch to start the ChromeDriver instance automatically when we run a test.

    > Instead of following Step 7-8, you can run **"npx nightwatch"** to get an auto-generated configuration file. 

9.  Create 3 folders: `tests`, `pages` and `globals` 

10. Create `.gitignore` file and enter:

    ```
    # Dependency directories
    node_modules/

    # idea
    .idea/

    # Test Output
    tests_output/
    reports/
    screenshots/
    logs/
    chromedriver.log
    ```

<br/>

## **Page Objects**
The following is an example page object:
```
module.exports = {
    url: function () {
        return `${this.api.launch_url}/default.aspx`
    },
    elements: {
        findBy: "#GridView1_firstSelect_0",
        inputTextBox: "#GridView1_TextEntryFilterControlInputBox_0",
        searchButton: "#GridView1_filterButton",
        pageHeader:"#ctl00_lblPageHeader",
    },
    sections: {
        ticd: {
            selector: "#containerRight",
            elements: {
                hireRehireEmployeeLink: "#wizard_329",
                addUSCAInternationalEmployeeLink: "#wizard_3011"
            }
        }
    }
}

```
> Check `sample.js` under pages folder

<br/>

## **Testing**
To run a single test: 
* `npx nightwatch folder-name/file-name.js`
* `npx nightwatch --tag tag-name`
* `npm test --tag tag-name`

or
* `nightwatch --tag tag-name`
* `nightwatch folder-name/file-name.js`

    > 💡 This command works if you install nightwatch globally (preferred):<br/>
    >    `npm install nightwatch -g`

<br/><br/>

# **Notes**

# *package.json*

### **scripts**
* Scripts can be executed by running `npm run`
```json
Example:
"scripts": {
    "test": "nightwatch",
    "single": "nightwatch --tag ecosia",
  },
```
* `npm run test` will execute all tests under test folder<br/>
`npm run single` will execute execute the test(s) you define<br/>


<br/>
### **packages/dependencies**
* Run `npm outdated` command to see if any installed packages are outdated or not. 
  > If you don't see any output in console, it means the packages are not outdated
* When you make changes in this file, you must run npm install command

<br/>
### **keywords**
The keywords field is where you can describe your project using related keywords.<br/>
An example: `"keywords": ["nightwatch", "test", "smoke"],`
<br/>
<br/>

# *nightwatch.conf.js*
### **Launch URL**
* You can add `launch_url` to your config file:
    ```
    "test_settings" : {
        "default" : {
            launch_url: "https://sample.com",
    ```

    This will allow you to navigate to the url directly in your tests:
   
    ```
    module.exports = {
        'Valid login' : function(browser) {
            browser.url(browser.launch_url)
            browser.url(browser.launch_url + '/contact');
            ...
    ```

    But you can also specify `url` in page classes
    ```
    module.exports = {
    url: 'https://www.ukg.com/',
    
    elements: {
        ...
    }
    };
    ```
    Sample of usage:
    ```
    let homePage = browser.page.homePage();
    homePage.navigate()
    ```

    Another option is to use this code in page classes:

    ```
    url: function () {
        return `${this.api.launch_url}/default.aspx`
    },
    ```

    This will allow you to write `homePage.navigate()` instead of `browser.url(browser.launch_url)`

<br/>

### **Environment Variables**
Environment variables allowing your tests to behave differently based on the environment you want them to run in.
```json
test_settings: {
    default: {
      launch_url: "https://www.saucedemo.com/",
      "globals" : {
        "username" : "standard_user",
        "password" : "secret_sauce"
      },
    ...
```
<br/>

### **Deleting Logs & Reports**
> `npm install rimraf`
```
"scripts": {
    "test": "nightwatch",
    "clean": "rimraf dist logs tests_output"
  }
```
> `npm run clean` to delete **logs** and **tests_output** folders

<br/>






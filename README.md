# Creating a Nightwatch.js Framework

Nightwatch is an end-to-end testing framework based on Node.js that uses the W3C Webdriver API to simulate user actions in a web application.

## **Installing and Configuring Nightwatch**

### ***Steps to Follow***

1.	Install [VS Code](https://code.visualstudio.com/download) (optional)
2.	Install [Node.js](https://nodejs.org/en/download/)
3.	Create a project folder
4.	Open the folder in VS Code
5.	Open the Terminal in VS Code and enter: 
    > npm init -y

    💡 This command will create/initialize our project with a default **`package.json`** file


6.	Install Nightwatch and ChromeDriver  
    > npm install nightwatch chromedriver

7.  Install Nightwatch globally
    > npm install -g nightwatch

8.  Create a file and name it as **`nightwatch.conf.js`**
9.  Enter the following code to nightwatch.conf.js

    ```t
    module.exports = {
        src_folders: ["tests"],
        page_objects_path: ['pages'],
        globals_path: "globals/globals.js",   

        webdriver: {
            start_process: true,
            server_path: 'node_modules/.bin/chromedriver',
            port: 9515,
            ssl: false,
            default_path_prefix: '',
            proxy: undefined,
            cli_args: {}
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

    > Instead of following Step 7-8, you can run **"npx nightwatch"** to get an auto-generated configuration file. 

10.  Create `tests` and `pages` folders and a `globals/globals.js` file

11. Create `.gitignore` file and enter:

    ```t
    # Dependency directories
    node_modules/

    # idea
    .idea/

    # Test Output
    tests_output/
    allure-report/
    allure-results/
    screenshots/
    logs/
    *.log

    package-lock.json
    ```

<br/>

## **Page Objects**
The following is an example of a simple page object:
```t
module.exports = {

    url: function () {
        return `${this.api.launch_url}/default.aspx`
    },
    
    elements: {
        logo: 'section .logo__icon',
        searchResults: '.mainline',
        searchBar: {
            selector: 'input[type=search]'
        },        
        submitButton: {
            selector: "//button[@type='submit']",
            locateStrategy: 'xpath'
        },
    }
}

```
> Check `sample.js` under pages folder

<br/>

## **Test Execution**
To run a single test: 
* `nightwatch --tag tag-name`
* `nightwatch folder-name/file-name.js`
* `npm test --tag tag-name`

or (if Nightwatch is not installed globally)
* `npx nightwatch folder-name/file-name.js`
* `npx nightwatch --tag tag-name`

To run only the group:
* `nightwatch --group smoke`

</br></br>

# **Notes**

# *package.json*

### **Scripts**
* The `npm run` command lets you define custom scripts in your package.json
```js
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
```js
test_settings: {
    default: {
      launch_url: "https://www.saucedemo.com/",
      "globals" : {
        "username" : "standard_user",
        "password" : "secret_sauce"
      },
    ...
```
Sample of usage:
> login(`browser.globals.`username, `browser.globals.`password)

<br/>

### **Using Test Environments**
You can define multiple environments under test settings. 
A "`default`" environment is required. All the other environments are inheriting the base settings defined under the default environment and they can overwrite settings as needed.
```
  "test_settings" : {
    "default" : {
        "launch_url" : "http://localhost",
        "globals" : {
            "variable1" : "some value",
            "variable2" : "some other value"
        }
    },

    "integration" : {
      "launch_url" : "http://staging.host",
    }
  }
```
**To run tests in a different environment:**
> nightwatch `--env` integration

<br/><br/>

# Optional / Additional Features

### 🧿 **`Allure Report`** 🧿

➡️  npm install nightwatch-allure

➡️ npm install -g allure-commandline

➡️  Add following code to globals file in nightwatch
```js
const allureReporter = require('nightwatch-allure');
module.exports = {
  reporter: (results,done)=>{
    const reporter = new allureReporter.NightwatchAllureReporter({});
    reporter.write(results,done);
  }
};
```
➡️  Create a new script in package.json file
```
"scripts": {
    ...
    "generateReport": "allure generate ./allure-results --clean && allure open",
    ...
  },
```
➡️  After test execution, enter `npm run generateReport`

</br>

### 🧿 **`Nightwatch HTML Reporter`** 🧿

➡️  npm install nightwatch-html-reporter

➡️  npm install -g nightwatch-html-reporter

➡️  Create a new file: `html-reporter.js` and add the following code
```
var HtmlReporter = require('nightwatch-html-reporter');

var reporter = new HtmlReporter({
    openBrowser: true,
    reportsDirectory: __dirname + '/html-reports',
    // available themes: default / cover / compact / default-gray / compact-gray
    themeName: 'cover',
});

module.exports = {
    write: function (results, options, done) {
        reporter.fn(results, done);
    }
};
```
➡️  Create a new folder: `html-reports`

➡️  Use `--reporter` option while running tests:  
> nightwatch --tag tagName `--reporter html-reporter.js`

➡️  Enter `Ctrl+C` in console after the HTML report is generated.

<br/>

### 🧿 **`Deleting Logs & Reports`** 🧿

➡️  npm  install rimraf

➡️  Create a new script in package.json file
```
"scripts": {
    ...
    "clean": "rimraf dist logs tests_output"
  }
```
> `npm run clean` to delete **logs** and **tests_output** folders

<br/>

### 🧿 **`dotenv`** 🧿

Dotenv is a module that loads environment variables from a .env file.

➡️  npm  install dotenv

➡️  Create a .env file in the root of your project
```
(sample)
BASE_URL            = https://www.saucedemo.com/
USERNAME            = standard_user
PASSWORD            = secret_sauce
```

Sample of usage:
> login(`process.env.`USERNAME, `process.env.`PASSWORD)
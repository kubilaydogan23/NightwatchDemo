# Creating a Nightwatch.js Framework

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

## **Testing**
To run a single test: 
* `npx nightwatch folder-name/file-name.js`
* `npx nightwatch --tag tag-name`
* `npm test --tag tag-name`

or
* `nightwatch --tag tag-name`
* `nightwatch folder-name/file-name.js`

    > 💡 This command works if you install nightwatch globally: <br/>
    >    `npm install nightwatch -g`


## **Notes**

### *Deleting Logs & Reports* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
> `npm install rimraf`
```
"scripts": {
    "test": "nightwatch",
    "clean": "rimraf dist logs tests_output"
  }
```
> `npm run clean` to delete **logs** and **tests_output** folders

<br/>

### *package.json* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Run `npm outdated` command to see if any installed packages are outdated or not. 
  > If you don't see any output in console, it means the packages are not outdated
* When you make changes in this file, you must run npm install command


### *nightwatch.conf.js* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* You can add `launch_url` to config file:
    ```
    "test_settings" : {
        "default" : {
            launch_url: "https://sample.com",
    ```

    this will allow you to use in your tests:
    ```
    module.exports = {
        'Valid login' : function(browser) {
            //Visit url from launch_url on nightwatch.conf.js
            browser.url(browser.launch_url)
            browser.url(browser.launch_url + '/contact');
            ...
    ```


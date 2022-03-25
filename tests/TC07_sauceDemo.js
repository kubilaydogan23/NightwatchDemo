module.exports = {
    "@tags": ["sauceDemo"],

    'Using custom commands': function (browser) {
     
        browser
            .url("https://www.saucedemo.com/")
            .login("standard_user", "secret_sauce" )
            .assert.visible('#shopping_cart_container')
            .pause(5000);
        browser.end();
    },

    'Using custom commands 2': function (browser) {
     
        browser
            .url("https://www.saucedemo.com/")
            .loginAs("Standard user")
            .assert.visible('#shopping_cart_container')
            .pause(5000);
        browser.end();
    },

    'Using custom commands & environment variables': function (browser) {
       var sauceDemoPage = browser.page.sauceDemo();

        sauceDemoPage
            .navigate()
            .login(browser.globals.username, browser.globals.password)
            // .login(process.env.USERNAME, process.env.PASSWORD)
            .assert.visible('#shopping_cart_container')
            .pause(5000);

        browser.end();
    },
    
}
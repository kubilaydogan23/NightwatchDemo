module.exports = {
    "@tags": ["google"],

    'Test 1': function (browser) {
        var google = browser.page.google();

        google.navigate()
            .assert.title('Google')
            .assert.visible('@searchBar')
            .setValue('@searchBar', ['nightwatch', browser.Keys.ENTER]);

        browser.end();
    },

    'Test 2': function (browser) {
        var google = browser.page.google();
    
        google.navigate()
            .assert.title('Google')
            .assert.visible('@searchBar')
            .setValue('@searchBar', 'nightwatch')
            .click('@searchBar')
            .click('@submitButton')
    
    
        browser.end();
    },
    
}




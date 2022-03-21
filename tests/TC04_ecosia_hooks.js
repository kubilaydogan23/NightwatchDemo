module.exports = {
    "@tags": ["ecosia4"],

    before: () => {
        console.log("Setting up...2 (will be executed after global hooks)");
    },
    
    after: () => {
        console.log("Closing down...2")
    },


    beforeEach: () => {
        browser.navigateTo('https://www.ecosia.org/')
    },

    afterEach: function (browser) {
        browser.end();
    },

    'Demo test for search functionality': function (browser) {
        var ecosia = browser.page.ecosia();

        ecosia
            .waitForElementVisible('@logo')
            .assert.titleContains('Ecosia')
            .assert.visible('@searchBar')
            .setValue('@searchBar', 'nightwatch')
            .assert.visible('@submitButton')
            .click('@submitButton')
            .waitForElementVisible('@searchResults', 15000)
            .assert.textContains('@searchResults', 'Nightwatch.js');

    }

}

//   nightwatch --tag ecosia2

module.exports = {

    "@tags": ["ecosia3"],

    'Demo test for search functionality': function (browser) {
        var ecosia = browser.page.ecosia();

        ecosia.navigate()
            .waitForElementVisible('@logo')
            .assert.visible('@searchBar')
            .setValue('@searchBar', 'nightwatch')
            .assert.visible('@submitButton')
            .click('@submitButton')
            .waitForElementVisible('@searchResults', 15000)
            .assert.textContains('@searchResults', 'Nightwatch.js');

        browser.end();

    }

}
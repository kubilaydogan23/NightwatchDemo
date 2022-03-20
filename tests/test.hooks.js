// nightwatch --tag hooks

module.exports = {
    "@tags": ["hooks"],

    before: () => {
        console.log("Starting test suite")
    },
    
    after: () => {
        console.log("Closing test suite")
    },

    // this will be run before each test within our suite
    beforeEach: () => {
        console.log("Test started")
        browser.url('https://www.ukg.com')
    },

    afterEach: function (browser) {
        console.log("Test completed")
    },

    "Should verify page title" : function (browser) {
        browser.expect.title().to.contain('HR and workforce management');
        browser.expect.title().to.match(/HR and workforce management solutions | UKG/);             
        browser.assert.title("HR and workforce management solutions | UKG");
    },

    "Should verify page url" : function (browser) {
        browser.expect.url().which.contains('ukg');
        browser.expect.url().to.contain('https://');
        browser.expect.url().not.to.endWith('.com');
    },

    "Should verify search functionality" : function (browser) {
        browser
        .setValue("#edit-keys", ['nightwatch', browser.Keys.ENTER])
        .expect.element('h1').text.to.equal('Search Results');
    }

}
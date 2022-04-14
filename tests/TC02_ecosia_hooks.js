// nightwatch --tag hooks

module.exports = {
    "@tags": ["ecosia"],

    beforeEach: () => {
        browser.url(browser.launch_url)
    },

    afterEach: function (browser) {
        browser.end();
    },

    "Should verify page title" : function (browser) {
        browser.expect.title().to.contain('Ecosia');
        browser.expect.title().to.match(/Ecosia - the search engine that plants trees/);             
        browser.assert.titleEquals("Ecosia - the search engine that plants trees");
    },

    "Should verify page url" : function (browser) {
        browser.expect.url().which.contains('https://');
        browser.expect.url().to.contain('ecosia');
        browser.expect.url().not.to.endWith('.org');
    },

}
// To run only the group:
// nightwatch --group bdd


describe('Test suite using describe interface', function () {
    this.tags = ["ecosia5"];

    // before(browser => browser.navigateTo('https://www.ecosia.org/'));
    // after(browser => browser.end());

    beforeEach( browser => {
        browser.navigateTo('https://www.ecosia.org/');
    }),

    afterEach( browser => {
        browser.end();
    }),
        

    test('ecosia.org', function (browser) {
        browser
            .waitForElementVisible('section .logo__icon')
            .assert.titleContains('Ecosia')
            .assert.titleEquals('Ecosia - the search engine that plants trees')
            .assert.visible('input[type=search]')
            .setValue('input[type=search]', 'nightwatch')
            .assert.visible('button[type=submit]')
            .click('button[type=submit]')
            .waitForElementVisible('.mainline', 15000)
            .assert.textContains('.mainline', 'Nightwatch.js');
        
        browser.saveScreenshot('./screenshots/ecosia.png');
    })

});
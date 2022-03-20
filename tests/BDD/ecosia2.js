// To run only the group:
// nightwatch --group bdd


describe('Test suite using describe interface', function () {
    this.tags = ["bdd"];

    // before(browser => browser.navigateTo('https://www.ecosia.org/'));
    // after(browser => browser.end());

    beforeEach( browser => {
        console.log("Test started")
        browser.navigateTo('https://www.ecosia.org/')
    }),

    afterEach( browser => {
        browser.end(),
        console.log("Test completed")
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
module.exports = {

    "@tags": ["ecosiaz"],

    'Demo test for search functionality': function (browser) {

        browser.url('https://www.ecosia.org/')
            .waitForElementVisible('section .logo__icon')
            .assert.titleContains('Ecosia')
            .assert.titleEquals('Ecosia - the search engine that plants trees')
            .assert.visible('input[type=search]')
            .setValue('input[type=search]', 'nightwatch')
            .assert.visible('button[type=submit]')
            .click('button[type=submit]')
            .waitForElementVisible('.mainline', 15000)
            .assert.textContains('.mainline', 'Nightwatch');

        browser.end();

    }

}


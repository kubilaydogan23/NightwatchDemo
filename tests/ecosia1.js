module.exports = {

    "@tags": ["ecosia"],

    beforeEach: () => {
        console.log("Test started")
        browser.navigateTo('https://www.ecosia.org/')
    },

    afterEach: function () {
        browser.end();
        console.log("Test completed")
    },

    'Demo test for search functionality': function (browser) {
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
    
    }

}

  // To run test: 
  //    npx nightwatch test/ecosia01.js
  //    npx nightwatch --tag ecosia
  //    npm test --tag ecosia

  //   nightwatch --tag ecosia


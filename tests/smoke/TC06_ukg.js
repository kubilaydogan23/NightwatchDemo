module.exports = {
    "@tags": ["ukg", "smoke"],

    'Testing UKG.com': function (browser) {

        browser
            .url('https://www.ukg.com/')
            .waitForElementVisible('img[alt="Welcome to UKG"]', 'UKG logo is visible')
            .waitForElementVisible('#edit-keys', 5000)
            .assert.titleContains('UKG')
            .assert.titleEquals('HR and workforce management solutions | UKG')
            .assert.elementPresent("img[alt='Welcome to UKG']")
            .assert.elementPresent("img[alt='Welcome to UKG']", 'Logo is displaying')
            .expect.element('.menu-level-1:first-child').text.to.equal('Contact')       
            // only 1 expect can be used in one chain
            // .expect.element('.menu-level-1:first-child').to.be.present;


        browser.getAttribute(".search-container input", "placeholder", function (result) {
            this.assert.equal(result.value, "Enter your search terms");
        });

        browser.end();
    },

    'Testing by using page objects': function (browser) {

        let homePage = browser.page.ukg_homePage();
        let contactPage = browser.page.ukg_contactPage();
        
        homePage
            .navigate()
            .assert.visible("@logo")
            .click('@contactButton');
        contactPage
            .waitForElementVisible("@pageHeader", 5000)
            .expect.element("@pageHeader")
            .text.to.equal("Contact UKG");

        browser.end();
    }
    
}

module.exports = {
    "@tags": ["ukgmenu"],

    'Navigation': function (browser) {
        var menu = '.uk-navbar-right .uk-navbar-nav li';

        browser.url('https://www.ukg.com/')
        browser.expect.elements(menu).count.to.equal(4);
        browser.expect.element(menu + ':nth-of-type(1)').text.to.contain('Contact');
        browser.expect.element(menu + ':nth-of-type(1) a').to.have.attribute('href').which.contains('/contact');      
        browser.expect.element(menu + ':nth-of-type(2)').text.to.contain('Support');
        browser.expect.element(menu + ':nth-of-type(2) a').to.have.attribute('href').which.contains('/support');

        browser.end();
    },

    'Can navigate to Contact Page': function (browser) {

        let contactPage = browser.page.ukg_contactPage();
        
        contactPage.navigate()
            .waitForElementVisible("@pageHeader", 5000)
            .expect.element("@pageHeader")
            .text.to.equal("Contact UKG");
        browser.end();
    },

    'Demo Test': function (browser) {
        var searchField = '#edit-keys';
        
        browser
            .url('https://www.ukg.com/')
            .getTitle((title) => console.log("Title: " + title))        // Title: HR and workforce management solutions | UKG
            .getText('.menu-level-1:first-child', (resultText) => {
                console.log(resultText.value);                          // Contact
            })
            .setValue(searchField, 'Testing')
            
            .getValue(searchField, (resultValue) => {
                console.log(resultValue.value);                         // Testing
            })
            .isVisible(searchField, (result) => {
                console.log("Is Search field visible? " + result.value);         // true
            })
    },


   
}
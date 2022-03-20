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
    }

   
}
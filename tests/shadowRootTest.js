describe('Shadow Root example test', function() {
    this.tags = ["shadow"];

    it('retrieve the shadowRoot', async function(browser) {
        await browser
            .navigateTo('https://mdn.github.io/web-components-examples/popup-info-box-web-component;')
            .waitForElementVisible('form');

        const shadowRoot = await browser.getShadowRoot('popup-info');

        const infoElement = await shadowRoot.find('.info');
        await expect(infoElement.property('innerHTML')).to.include('card validation code');

        const iconElement = await shadowRoot.find('.icon');
        const firstElement = await browser.getFirstElementChild(iconElement);

        await expect.element(firstElement).to.be.an('img');
    });
});


/*
<popup-info ....
    #shadow-root (open)
        <span class='info'> "Your card validation code (CVC) is an extra feature"   </span>
        <span class='icon'>
            <img src='img/alt.png'>
 */
const landingPageCommands = {
  submit() {
    this.waitForElementVisible('@submitButton', 1000)
      .click('@submitButton');
    this.pause(1000);
    return this; // Return page object for chaining
  }
};

module.exports = {
  url: 'https://www.ukg.com/',
  commands: [
    landingPageCommands
  ],

  elements: {
    logo: {
      selector: "img[alt='Welcome to UKG']"
    },

    contactButton: {
      selector: "div[class='uk-navbar uk-visible@m'] a",
      index: 0
    },

  }
};
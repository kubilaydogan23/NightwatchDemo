
module.exports = {
    // commands: [ecosiaCommands],
    url: 'https://www.ecosia.org',
    elements: {

        logo: 'section .logo__icon',
        searchResults: '.mainline',

        searchBar: {
            selector: 'input[type=search]'
        },
        
        submitButton: {
            selector: "//button[@type='submit']",
            locateStrategy: 'xpath'
        },

    }
}

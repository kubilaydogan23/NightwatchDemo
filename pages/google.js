module.exports = {
    // commands: [googleCommands],
    url: 'https://google.com',
    elements: {
        searchBar: {
            selector: 'input[type=text]'
        },
        
        submitButton: {
            selector: 'input[name=btnK]',
            index: 1
        },

        // submit: {
        //     selector: '//[@name="q"]',
        //     locateStrategy: 'xpath'
        // },
    }
}
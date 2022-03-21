
module.exports = {
    // commands: [ecosiaCommands],
    url: function () {
        return `${this.api.launch_url}/default.aspx`
    },
    
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

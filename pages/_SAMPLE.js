var commands = {
    sample: function (param) {
        // ...
    },
};

module.exports = {
    url: function () {
        return `${this.api.launch_url}/default.aspx`
    },
    commands: [commands],

    elements: {
        pageHeader: "#PageHeader",

        searchBar: {
            selector: 'input[type=text]'
        },

        xButton: {
            selector: 'div.bottomlink > input.btnPrimary',
            index: 0
        },
        yButton: {
            selector: 'div.bottomlink > input.btnPrimary',
            index: 1
        },

        // The default locateStrategy is css but you can also specify xpath.
        // Locate strategies is handled internally so you don't need to call useXpath and useCss in your tests
        submit: {
            selector: '//[@name="q"]',
            locateStrategy: 'xpath'
        },

        sections: {
            main: {
                // commands: [sharedCommands],
                selector: '.welcome-text',
                elements: {
                    title: '....',
                    subtitle: '...',
                    description: '...'
                }
            },
            ticd: {
                selector: '#containerRight',
                elements: {
                    elementA: {
                        selector: "#thingsICanDoContent li",
                        index: 0
                    },
                    elementB: {
                        selector: "#thingsICanDoContent li",
                        index: 1
                    },
                    elementC: {
                        selector: "#thingsICanDoContent li",
                        index: 2
                    },
                }
            }
        }

    },
}
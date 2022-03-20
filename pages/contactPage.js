module.exports = {

    url: function () {
        return `${this.api.launch_url}/default.aspx`
    },

    elements: {
        pageHeader: {
            selector: "#main-content h1"
        }

    }
};
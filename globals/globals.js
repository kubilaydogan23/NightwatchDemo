
module.exports = {
    before: function (browser, done) {
        console.log('Setting up...')
        const env = require('dotenv').config();         // for env variables
        done();
    },

    after: function (done) {
        console.log('Closing down...')
        done();
    },


    beforeEach: (client, done) => {
        // ...
        done()
    },

    afterEach: (browser, done) => {
        // ...
        done();
    }
    
}
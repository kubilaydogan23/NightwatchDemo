module.exports = {
    before: function (browser, done) {
        console.log('Test suite execution started')
        done();
    },

    after: function (done) {
        // ...
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
exports.command = function (username, password) {
    var browser = this;
    browser
    .setValue("#user-name", username)
    .setValue("#password", password)
    .click("#login-button");

    return this;
};


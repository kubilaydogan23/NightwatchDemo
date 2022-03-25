exports.command = function (userType) {

    var browser = this;

    if (userType.toLowerCase() === 'standard user') {
        username = "standard_user"
        password = "secret_sauce";

    } else if (userType.toLowerCase() === 'locked out user') {
        username = "locked_out_user"
        password = "secret_sauce";
    }

    browser
        .setValue("#user-name", username)
        .setValue("#password", password)
        .click("#login-button");

    return this;
}

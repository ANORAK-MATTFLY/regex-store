"use strict";
exports.__esModule = true;
exports.RegexStore = void 0;
var credentials_1 = require("./logic/credentials");
var url_1 = require("./logic/url");
exports.RegexStore = Object.freeze({
    credentials: new credentials_1.CredentialsValidation(),
    Urls: new url_1.Url()
});

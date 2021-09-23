"use strict";
exports.__esModule = true;
exports.RegexUtils = void 0;
var credentials_1 = require("./logic/credentials");
var RegexUtils = /** @class */ (function () {
    function RegexUtils() {
    }
    RegexUtils.credentials = new credentials_1.CredentialsValidation();
    return RegexUtils;
}());
exports.RegexUtils = RegexUtils;
console.log(RegexUtils.credentials.Is_Email("ben@gmail.com"));

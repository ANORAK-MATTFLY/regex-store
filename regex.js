"use strict";
exports.__esModule = true;
exports.RegexStore = void 0;
var credentials_1 = require("./logic/credentials");
var RegexStore = /** @class */ (function () {
    function RegexStore() {
    }
    RegexStore.credentials = new credentials_1.CredentialsValidation();
    return RegexStore;
}());
exports.RegexStore = RegexStore;

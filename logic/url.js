"use strict";
exports.__esModule = true;
exports.Url = void 0;
var Url = /** @class */ (function () {
    function Url() {
    }
    /**
     * Returns a boolean value that indicates whether or not the string is a url.
     * @param {String} string - String on which to perform the validation.
     */
    Url.prototype.Is_Url = function (url) {
        var pattern = new RegExp(/(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
        var Name_Matches_Pattern = pattern.test(url);
        return Name_Matches_Pattern;
    };
    return Url;
}());
exports.Url = Url;

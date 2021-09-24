"use strict";
exports.__esModule = true;
exports.CredentialsValidation = void 0;
var CredentialsValidation = /** @class */ (function () {
    function CredentialsValidation() {
    }
    CredentialsValidation.prototype.Is_Name = function (name) {
        var pattern = new RegExp("^[a-zA-Z ]{2,30}$");
        var Name_Matches_Pattern = pattern.test(name);
        return Name_Matches_Pattern;
    };
    CredentialsValidation.prototype.Is_Email = function (email) {
        var pattern = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
        var Email_Matches_Pattern = pattern.test(email);
        return Email_Matches_Pattern;
    };
    CredentialsValidation.prototype.Is_Password_with_Minimum_Eight_Characters_And_At_Least_One_Letter_And_One_Number = function (password) {
        var pattern = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$");
        var Password_Matches_Pattern = pattern.test(password);
        return Password_Matches_Pattern;
    };
    CredentialsValidation.prototype.Is_Password_with_At_Least_Eight_Characters_A_Letter_A_Number_And_A_Special_Character = function (password) {
        var pattern = new RegExp("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$");
        var Password_Matches_Pattern = pattern.test(password);
        return Password_Matches_Pattern;
    };
    CredentialsValidation.prototype.Is_Password_with_At_Least_Eight_Characters_An_Uppercase_Letter_A_Lowercase_Letter_One_Number = function (password) {
        var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$");
        var Password_Matches_Pattern = pattern.test(password);
        return Password_Matches_Pattern;
    };
    CredentialsValidation.prototype.Is_Password_with_At_Least_Eight_Characters_An_Uppercase_Letter_A_Lowercase_Letter_One_Number_A_Special_Character = function (password) {
        var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$");
        var Password_Matches_Pattern = pattern.test(password);
        return Password_Matches_Pattern;
    };
    return CredentialsValidation;
}());
exports.CredentialsValidation = CredentialsValidation;

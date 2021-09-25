"use strict";
exports.__esModule = true;
exports.CredentialsValidation = void 0;
var CredentialsValidation = /** @class */ (function () {
    function CredentialsValidation() {
    }
    /**
     * Returns a boolean value that indicates whether or not the string is a name.
     * @param {String} string - String on which to perform the validation.
     */
    CredentialsValidation.prototype.Is_Name = function (name) {
        var pattern = new RegExp(/^[a-zA-Z ]{2,30}$/);
        var Name_Matches_Pattern = pattern.test(name);
        return Name_Matches_Pattern;
    };
    /**
 * Returns a boolean value that indicates whether or not the string is an e-mail.
 * @param {String} string - String on which to perform the validation.
 */
    CredentialsValidation.prototype.Is_Email = function (email) {
        var pattern = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
        var Email_Matches_Pattern = pattern.test(email);
        return Email_Matches_Pattern;
    };
    /**
     * Returns a boolean value that indicates whether or not the string is a password
     * that includes minimum eight characters, and one number and one special character.
     * @param {String} string - String on which to perform the validation.
     */
    CredentialsValidation.prototype.Is_Password_with_At_Least_Eight_Characters_A_Number_A_Special_Character = function (password) {
        var pattern = new RegExp("^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
        var Password_Matches_Pattern = pattern.test(password);
        return Password_Matches_Pattern;
    };
    /**
     * Returns a boolean value that indicates whether or not the string is a password
     * that includes with minimum eight characters, at least one uppercase letter,
     * one lowercase letter and one number.
     * @param {String} string - String on which to perform the validation.
     */
    CredentialsValidation.prototype.Is_Password_with_At_Least_Eight_Characters_An_Uppercase_Letter_A_Lowercase_Letter_One_Number = function (password) {
        var pattern = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$");
        var Password_Matches_Pattern = pattern.test(password);
        return Password_Matches_Pattern;
    };
    /**
     * Returns a boolean value that indicates whether or not the string is a password
     * that includes with minimum eight characters, at least one uppercase letter,
     * one lowercase letter and one number and one special character.
     * @param {String} string - String on which to perform the validation.
     */
    CredentialsValidation.prototype.Is_Password_with_At_Least_Eight_Characters_An_Uppercase_Letter_A_Lowercase_Letter_One_Number_A_Special_Character = function (password) {
        var pattern = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
        var Password_Matches_Pattern = pattern.test(password);
        return Password_Matches_Pattern;
    };
    return CredentialsValidation;
}());
exports.CredentialsValidation = CredentialsValidation;

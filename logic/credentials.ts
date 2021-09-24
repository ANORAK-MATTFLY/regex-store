import { credentials } from "../interfaces/credentials_interface";

export class CredentialsValidation implements credentials {
    /**
     * Returns a boolean value that indicates whether or not the string is a name.
     * @param {String} string - String on which to perform the validation.
     */
    Is_Name(name: string): boolean {
        const pattern = new RegExp("^[a-zA-Z ]{2,30}$");
        const Name_Matches_Pattern = pattern.test(name);
        return Name_Matches_Pattern;
    }
        /**
     * Returns a boolean value that indicates whether or not the string is an e-mail.
     * @param {String} string - String on which to perform the validation.
     */
    Is_Email(email: string): boolean {
        const pattern = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
        const Email_Matches_Pattern = pattern.test(email);
        return Email_Matches_Pattern;
    }
    /**
     * Returns a boolean value that indicates whether or not the string is a password
     * that includes with minimum eight characters, at least one letter and one number.
     * @param {String} string - String on which to perform the validation.
     */
    Is_Password_with_Minimum_Eight_Characters_And_At_Least_One_Letter_And_One_Number(password: string): boolean {
        const pattern: RegExp = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$");
        const Password_Matches_Pattern: boolean = pattern.test(password);
        return Password_Matches_Pattern;
    }
    /**
     * Returns a boolean value that indicates whether or not the string is a password
     * that includes with minimum eight characters, at least one letter and one number one special character.
     * @param {String} string - String on which to perform the validation.
     */
    Is_Password_with_At_Least_Eight_Characters_A_Letter_A_Number_And_A_Special_Character(password: string): boolean{
        const pattern: RegExp = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
        const Password_Matches_Pattern: boolean = pattern.test(password);
        return Password_Matches_Pattern;
    }
    /**
     * Returns a boolean value that indicates whether or not the string is a password
     * that includes with minimum eight characters, at least one uppercase letter, one lowercase letter and one number.
     * @param {String} string - String on which to perform the validation.
     */
    Is_Password_with_At_Least_Eight_Characters_An_Uppercase_Letter_A_Lowercase_Letter_One_Number(password: string): boolean{
        const pattern: RegExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$");
        const Password_Matches_Pattern: boolean = pattern.test(password);
        return Password_Matches_Pattern;
    }
    /**
     * Returns a boolean value that indicates whether or not the string is a password
     * that includes with minimum eight characters, at least one uppercase letter,
     * one lowercase letter and one number and one special character.
     * @param {String} string - String on which to perform the validation.
     */
    Is_Password_with_At_Least_Eight_Characters_An_Uppercase_Letter_A_Lowercase_Letter_One_Number_A_Special_Character(password: string): boolean{
        const pattern: RegExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$");
        const Password_Matches_Pattern: boolean = pattern.test(password);
        return Password_Matches_Pattern;
    }
}
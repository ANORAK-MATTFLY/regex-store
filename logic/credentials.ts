import { credentials } from "../interfaces/credentials_interface";

export class CredentialsValidation implements credentials {
    /**
     * Returns a boolean value that indicates whether or not the string is a name.
     * @param {String} string - String on which to perform the validation.
     */
    Is_Name(name: string): boolean {
        const pattern = new RegExp(/^[a-zA-Z ]{2,30}$/);
        const Name_Matches_Pattern = pattern.test(name);
        return Name_Matches_Pattern;
    }
        /**
     * Returns a boolean value that indicates whether or not the string is an e-mail.
     * @param {String} string - String on which to perform the validation.
     */
    Is_Email(email: string): boolean {
        const pattern = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
        const Email_Matches_Pattern = pattern.test(email);
        return Email_Matches_Pattern;
    }
    /**
     * Returns a boolean value that indicates whether or not the string is a password
     * that includes minimum eight characters, and one number and one special character.
     * @param {String} string - String on which to perform the validation.
     */
    Is_Password_with_At_Least_Eight_Characters_A_Number_A_Special_Character(password: string): boolean {
        const pattern: RegExp = new RegExp("^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
        const Password_Matches_Pattern: boolean = pattern.test(password);
        return Password_Matches_Pattern;
    }
    /**
     * Returns a boolean value that indicates whether or not the string is a password
     * that includes with minimum eight characters, at least one uppercase letter,
     * one lowercase letter and one number.
     * @param {String} string - String on which to perform the validation.
     */
    Is_Password_with_At_Least_Eight_Characters_An_Uppercase_Letter_A_Lowercase_Letter_One_Number(password: string): boolean{
        const pattern: RegExp = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$");
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
        const pattern: RegExp = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
        const Password_Matches_Pattern: boolean = pattern.test(password);
        return Password_Matches_Pattern;
    }

    Is_Visa_Card_Number(number: number){
        const pattern: RegExp = new RegExp("/^(?:4[0-9]{12}(?:[0-9]{3})?)$/");
        const stringifiedNumber = number.toString();
        const Number_Matches_Pattern: boolean = pattern.test(stringifiedNumber);
        return Number_Matches_Pattern;
    }
    Is_Master_Card_Number(number: number){
        const pattern: RegExp = new RegExp("/^(?:5[1-5][0-9]{14})$/");
        const stringifiedNumber: string = number.toString();
        const Number_Matches_Pattern: boolean = pattern.test(stringifiedNumber);
        return Number_Matches_Pattern;
    }
}

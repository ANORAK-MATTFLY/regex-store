import { credentials } from "../interfaces/credentials_interface";

export class CredentialsValidation implements credentials {
    Is_Name(name: string): boolean {
        const pattern = new RegExp("^[a-zA-Z ]{2,30}$");
        const Name_Matches_Pattern = pattern.test(name);
        return Name_Matches_Pattern;
    }
    Is_Email(email: string): boolean {
        const pattern = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
        const Email_Matches_Pattern = pattern.test(email);
        return Email_Matches_Pattern;
    }

    Is_Password_with_Minimum_Eight_Characters_And_At_Least_One_Letter_And_One_Number(password: string): boolean {
        const pattern: RegExp = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$");
        const Password_Matches_Pattern: boolean = pattern.test(password);
        return Password_Matches_Pattern;
    }

    Is_Password_with_At_Least_Eight_Characters_A_Letter_A_Number_And_A_Special_Character(password: string): boolean{
        const pattern: RegExp = new RegExp("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$");
        const Password_Matches_Pattern: boolean = pattern.test(password);
        return Password_Matches_Pattern;
    }

    Is_Password_with_At_Least_Eight_Characters_An_Uppercase_Letter_A_Lowercase_Letter_One_Number(password: string): boolean{
        const pattern: RegExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$");
        const Password_Matches_Pattern: boolean = pattern.test(password);
        return Password_Matches_Pattern;
    }

    Is_Password_with_At_Least_Eight_Characters_An_Uppercase_Letter_A_Lowercase_Letter_One_Number_A_Special_Character(password: string): boolean{
        const pattern: RegExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$");
        const Password_Matches_Pattern: boolean = pattern.test(password);
        return Password_Matches_Pattern;
    }
}
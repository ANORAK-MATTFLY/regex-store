import { credentials } from "../interfaces/credentials";

export class CredentialsValidation implements credentials {
    Is_Email(email: string): boolean {
        const pattern = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
        const validationCheck = pattern.test(email);
        return validationCheck;
    }

    Is_Password_with_Eight_Characters_And_At_Least_One_Letter_And_One_Number(password: string): boolean {
        const pattern: RegExp = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$");
        const Password_Match_Pattern: boolean = pattern.test(password);
        return Password_Match_Pattern;
    }
}
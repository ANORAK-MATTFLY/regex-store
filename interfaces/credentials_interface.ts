export interface credentials {
    Is_Email(email: string): boolean;
    Is_Password_with_Minimum_Eight_Characters_And_At_Least_One_Letter_And_One_Number(password: string): boolean;
    Is_Password_with_At_Least_Eight_Characters_A_Letter_A_Number_And_A_Special_Character(password: string): boolean;
    Is_Password_with_At_Least_Eight_Characters_An_Uppercase_Letter_A_Lowercase_Letter_One_Number(password: string): boolean;
    Is_Password_with_At_Least_Eight_Characters_An_Uppercase_Letter_A_Lowercase_Letter_One_Number_A_Special_Character(password: string): boolean;
}
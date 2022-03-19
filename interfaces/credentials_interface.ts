export interface credentials {
    Is_Name(name: string): boolean;
    Is_Email(email: string): boolean;
    Is_Password_with_At_Least_Eight_Characters_A_Number_A_Special_Character(password: string): boolean;
    Is_Password_with_At_Least_Eight_Characters_An_Uppercase_Letter_A_Lowercase_Letter_One_Number(password: string): boolean;
    Is_Password_with_At_Least_Eight_Characters_An_Uppercase_Letter_A_Lowercase_Letter_One_Number_A_Special_Character(password: string): boolean;
    Is_Visa_Card_Number(number: number): boolean;
    Is_Master_Card_Number(number: number): boolean;
}

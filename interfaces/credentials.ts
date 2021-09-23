export interface credentials {
    Is_Email(email: string): boolean;
    Is_Password_with_Eight_Characters_And_At_Least_One_Letter_And_One_Number(password: string): boolean;
}
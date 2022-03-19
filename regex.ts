import { CredentialsValidation } from "./logic/credentials";
import { Url } from "./logic/url";

export const RegexStore = Object.freeze({
    credentials: new  CredentialsValidation(),
    Urls: new Url(),
});


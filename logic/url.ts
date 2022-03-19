import {Url_Interface} from '../interfaces/url_interface';

export class Url implements Url_Interface{
    /**
     * Returns a boolean value that indicates whether or not the string is a url.
     * @param {String} string - String on which to perform the validation.
     */
        Is_Url(url: string): boolean {
            const pattern = new RegExp(/(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ );
            const Name_Matches_Pattern = pattern.test(url);
            return Name_Matches_Pattern;
        }
}

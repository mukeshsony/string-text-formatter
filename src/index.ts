// ! index.js
// ! version : 1.0.0
// ! authors : Mukesh Soni

/**
 * Remove extra whitespace and special characters from string
 * Convert string according to selected method
 */

/**
 * Convert string into lower case format
 * @param str 
 */
export function lowerCase(str: string): string {
    let formattedString = '';
    if(typeof str !== 'undefined' && str !== null && str.trim() !== '') {
        formattedString = str.trim();
        formattedString = formattedString.replace(/[^a-zA-Z0-9 ]/g, "");
        formattedString = formattedString.replace(/  +/g, ' ');    
        formattedString = formattedString.toLowerCase();
    }
    return (formattedString);
}

/**
 * Convert string into upper case format
 * @param str 
 */
export function upperCase(str: string): string {
    let formattedString = '';
    if(typeof str !== 'undefined' && str !== null && str.trim() !== '') {
        formattedString = str.trim();
        formattedString = formattedString.replace(/[^a-zA-Z0-9 ]/g, "");
        formattedString = formattedString.replace(/  +/g, ' ');    
        formattedString = formattedString.toUpperCase();
    }
    return  (formattedString);
}

/**
 * format string and relace white space with seprator
 * @param str 
 * @param seprator 
 */
export function convertString(str: string, seprator: string): string {
    let formattedString = '';
    if(typeof str !== 'undefined' && str !== null && str.trim() !== '') {
        formattedString = str.trim();
        formattedString = formattedString.replace(/[^a-zA-Z0-9 ]/g, "");
        formattedString = formattedString.replace(/  +/g, ' ');  
        formattedString = formattedString.split(' ').join(seprator);  
    }
    return  (formattedString);
}

/**
 * format string into seo friendly url slug string
 * @param str 
 */
export function urlSlug(str: string): string {
    let formattedString = '';
    if(typeof str !== 'undefined' && str !== null && str.trim() !== '') {
        formattedString = str.trim();
        formattedString = formattedString.replace(/[^a-zA-Z0-9 ]/g, "");
        formattedString = formattedString.replace(/  +/g, ' ');    
        formattedString = formattedString.replace(/\s+/g, '-');
        formattedString = formattedString.toLowerCase();
    }
    return (formattedString);
}

/**
 * format string info unique seo friendly url slug string
 * update unix timestamp value at end of string
 * @param str 
 */
export function urlSlugUnqiue(str: string): string {
    let formattedString = '';
    if(typeof str !== 'undefined' && str !== null && str.trim() !== '') {
        const timestamp = Math.round((new Date()).getTime());
        formattedString = str.trim();
        formattedString = formattedString.replace(/[^a-zA-Z0-9 ]/g, "");
        formattedString = formattedString.replace(/  +/g, ' ');    
        formattedString = formattedString.replace(/\s+/g, '-');
        formattedString = formattedString.toLowerCase();
        formattedString = formattedString+'-'+timestamp;
    }
    return (formattedString);
}

/**
 * Generate random string
 * @param length
 * Default length for string is 8
 */
export function randomString(length: number = 8, allowSpecialCharacters: boolean = true): string{
    let charset;
    if (allowSpecialCharacters) {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./:;<=>?@[\]^_{|}~";
    } else {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }
    
    let randomStringValue = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
        randomStringValue+= charset.charAt(Math.floor(Math.random() * n));
    }
    return (randomStringValue);
}
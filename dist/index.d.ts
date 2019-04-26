/**
 * Remove extra whitespace and special characters from string
 * Convert string according to selected method
 */
/**
 * Convert string into lower case format
 * @param str
 */
export declare function lowerCase(str: string): string;
/**
 * Convert string into upper case format
 * @param str
 */
export declare function upperCase(str: string): string;
/**
 * format string and relace white space with seprator
 * @param str
 * @param seprator
 */
export declare function convertString(str: string, seprator: string): string;
/**
 * format string into seo friendly url slug string
 * @param str
 */
export declare function urlSlug(str: string): string;
/**
 * format string info unique seo friendly url slug string
 * update unix timestamp value at end of string
 * @param str
 */
export declare function urlSlugUnqiue(str: string): string;
/**
 * Generate random string
 * @param length
 * Default length for string is 8
 */
export declare function randomString(length?: number, allowSpecialCharacters?: boolean): string;

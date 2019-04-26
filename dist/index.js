"use strict";
// ! index.js
// ! version : 1.0.0
// ! authors : Mukesh Soni
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Remove extra whitespace and special characters from string
 * Convert string according to selected method
 */
/**
 * Convert string into lower case format
 * @param str
 */
function lowerCase(str) {
    let formattedString = '';
    if (typeof str !== 'undefined' && str !== null && str.trim() !== '') {
        formattedString = str.trim();
        formattedString = formattedString.replace(/[^a-zA-Z0-9 ]/g, "");
        formattedString = formattedString.replace(/  +/g, ' ');
        formattedString = formattedString.toLowerCase();
    }
    return (formattedString);
}
exports.lowerCase = lowerCase;
/**
 * Convert string into upper case format
 * @param str
 */
function upperCase(str) {
    let formattedString = '';
    if (typeof str !== 'undefined' && str !== null && str.trim() !== '') {
        formattedString = str.trim();
        formattedString = formattedString.replace(/[^a-zA-Z0-9 ]/g, "");
        formattedString = formattedString.replace(/  +/g, ' ');
        formattedString = formattedString.toUpperCase();
    }
    return (formattedString);
}
exports.upperCase = upperCase;
/**
 * format string and relace white space with seprator
 * @param str
 * @param seprator
 */
function convertString(str, seprator) {
    let formattedString = '';
    if (typeof str !== 'undefined' && str !== null && str.trim() !== '') {
        formattedString = str.trim();
        formattedString = formattedString.replace(/[^a-zA-Z0-9 ]/g, "");
        formattedString = formattedString.replace(/  +/g, ' ');
        formattedString = formattedString.split(' ').join(seprator);
    }
    return (formattedString);
}
exports.convertString = convertString;
/**
 * format string into seo friendly url slug string
 * @param str
 */
function urlSlug(str) {
    let formattedString = '';
    if (typeof str !== 'undefined' && str !== null && str.trim() !== '') {
        formattedString = str.trim();
        formattedString = formattedString.replace(/[^a-zA-Z0-9 ]/g, "");
        formattedString = formattedString.replace(/  +/g, ' ');
        formattedString = formattedString.replace(/\s+/g, '-');
        formattedString = formattedString.toLowerCase();
    }
    return (formattedString);
}
exports.urlSlug = urlSlug;
/**
 * format string info unique seo friendly url slug string
 * update unix timestamp value at end of string
 * @param str
 */
function urlSlugUnqiue(str) {
    let formattedString = '';
    if (typeof str !== 'undefined' && str !== null && str.trim() !== '') {
        const timestamp = Math.round((new Date()).getTime());
        formattedString = str.trim();
        formattedString = formattedString.replace(/[^a-zA-Z0-9 ]/g, "");
        formattedString = formattedString.replace(/  +/g, ' ');
        formattedString = formattedString.replace(/\s+/g, '-');
        formattedString = formattedString.toLowerCase();
        formattedString = formattedString + '-' + timestamp;
    }
    return (formattedString);
}
exports.urlSlugUnqiue = urlSlugUnqiue;
/**
 * Generate random string
 * @param length
 * Default length for string is 8
 */
function randomString(length = 8, allowSpecialCharacters = true) {
    let charset;
    if (allowSpecialCharacters) {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./:;<=>?@[\]^_{|}~";
    }
    else {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }
    let randomStringValue = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
        randomStringValue += charset.charAt(Math.floor(Math.random() * n));
    }
    return (randomStringValue);
}
exports.randomString = randomString;

# string-text-formatter	

> Format string text for seo friendly url slug,  seo friendly url slug with unique id, random string generator



## Install

```
$ npm install --save string-text-formatter	
```


## Usage
```js
import * as text from 'string-text-formatter';

// Remove all special characters and format string

const str = 'What is Lorem Ipsum?';

// Lower Case Method
const lowerCaseString = text.lowerCase(str);

console.log(lowerCaseString);
// what is lorem ipsum



// Upper case Method
const upperCaseString = text.upperCase(str);

console.log(upperCaseString);
// WHAT IS LOREM IPSUM



// Convert space using any character Method
const convertedString = text.convertString(str,'_');

console.log(convertedString);
// What_is_Lorem_Ipsum



// Seo friendly url slug method
const urlSlug = text.urlSlug(str);

console.log(convertedString);
// what-is-lorem-ipsum



// Seo friendly url slug with unique id method
const urlSlugUnqiue = text.urlSlugUnqiue(str);

console.log(urlSlugUnqiue);
// what-is-lorem-ipsum-1555935965905



// Generate random string method
// genetate alfhanumeric string

/**
 * @params
 * length: total string length (Default 8)
 * allowSpecialCharacters: true / false
*/

const string1 = text.randomString(12, false);

console.log(string1);
// xg7IqOAqo97v



const string2 = text.randomString(12, true);

console.log(string2);
// _HNu19-C^ohH

```


// Exercise: Level 1
// 1 Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'

// 2 Print the string on the browser console using console.log()
console.log(challenge); // 30 Days Of JavaScript

// 3 Print the length of the string on the browser console using console.log()
console.log(challenge.length); // 21

// 4 Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase()); // 30 DAYS OF JAVASCRIPT

// 5 Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase()); //30 days of javascript

// 6 Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0,3)); // 30
console.log(challenge.substring(0,3)); // 30

// 7 Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(3,)); //Days Of JavaScript

// 8 Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script')); // true

// 9 Split the string into an array using split() method
console.log(challenge.split()); // Changes to an array -> ["30 Days Of JavaScript"]

// 10 Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

// 11 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(','));

// 12 Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python')); // 30 Days Of Python

// 13 What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt('15')); // S

// 14 What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J')); // 51

// 15 Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a')); // 4

// 16 Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a')); // 14

// 17 Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because')); //31

// 18 Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because')); // 47

// 19 Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because')); //31

// 20 Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let str = ' 30 Days Of JavaScript ';
console.log(str.trim());

// 21 Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30')); /// true

// 22 Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('JavaScript')); // true

// 23 Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match(/a/g)); // [ 'a', 'a', 'a' ]

// 24 Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let firstStr = '30 Days of '
let secondStr = 'JavaScript'
console.log(firstStr.concat(secondStr)); // 30 Days of JavaScript

// 25 Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

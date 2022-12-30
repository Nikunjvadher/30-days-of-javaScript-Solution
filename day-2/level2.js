

// Exercise: Level 2
// 1 Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let quote = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(quote);

// 2 Using console.log() print out the following quote by Mother Teresa:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let MotherTeresaQuote = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(MotherTeresaQuote);

// 3 Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let number = '10'
console.log(typeof Number(number) === typeof 10); // true

// 4 Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(Number(parseFloat('9.8')) == 10);

// 5 Check if 'on' is found in both python and jargon
let python = "python"
let jargon = "jargon"
if(python.includes('on') && jargon.includes('on')){
    console.log('done'); // done
}

// 6 I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = 'I hope this course is not full of jargon.'
if(sentence.includes('jargon')){
    console.log('done'); // done
}

// 7 Generate a random number between 0 and 100 inclusively.
let randomNumber100 = Math.floor(Math.random() * 100) 
console.log(randomNumber100);

// 8 Generate a random number between 50 and 100 inclusively.
let randomNumber50 = Math.floor((Math.random() * (100 - 50 + 1) + 50)) 
// or
// let randomNumber = Math.floor(50 + (Math.random() * 50))
console.log(randomNumber50);


// 9 Generate a random number between 0 and 255 inclusively.
let randomNumber255 = Math.floor(Math.random() * 255)
console.log(randomNumber255);

// 10 Access the 'JavaScript' string characters using a random number.
let str = "JavaScript";
let index = Math.floor(Math.random() * str.length);
// let character = str.charAt(index); // or
let character = str[index]; // or
console.log(character);

// 11 Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log(" 1  1  1  1  1\n 2  1  2  4  8\n 3  1  3  9  27\n 4  1  4 16  64\n 5  1  5 25 125");

// 12 Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence2.substr(31,23));

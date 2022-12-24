// let string = '30 Days Of JavaScript'

// console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
// console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

// let firstName = 'Asabeneh'

// console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
// console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

// let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

// console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
// console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]


// let string = '   30 Days Of JavaScript   '

// console.log(string)
// console.log(string.trim(' '))

// let firstName = ' Asabeneh '

// console.log(firstName)
// console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string

// let string = '30 Days Of JavaScript'

// console.log(string.includes('Days'))     // true
// console.log(string.includes('days'))     // false - it is case sensitive!
// console.log(string.includes('Days'))   // true

// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
// console.log(string.match('love'))

// let string = 'hey '
// console.log(string.repeat(10)) 

// let num = '10'
// let num = '10.9'
// let numInt = +num
// console.log(numInt) // 10

// let num = 9.81
// let numInt = parseInt(num)
// console.log(numInt) // 9



// Exercise: Level 2
// 1 Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let quote = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(quote);

// 2 Using console.log() print out the following quote by Mother Teresa:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let MotherTeresaQuote = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(MotherTeresaQuote);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let number = '10'
console.log(typeof Number(number) === typeof 10); // true

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(Number(parseFloat('9.8')) == 10);

// Check if 'on' is found in both python and jargon

// I hope this course is not full of jargon. Check if jargon is in the sentence.

// Generate a random number between 0 and 100 inclusively.

// Generate a random number between 50 and 100 inclusively.

// Generate a random number between 0 and 255 inclusively.

// Access the 'JavaScript' string characters using a random number.

// Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

// Exercises: Level 3
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

//     const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
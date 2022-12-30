
// Exercises: Level 3
// 1 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let word = 'love'
let count = 0;
for (let i = 0; i < sentence1.length; i++) {
    if(sentence1.substring(i , i + word.length).toLowerCase() === word){
        count++;
    }    
}
console.log(count);


// 2 Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence2 = 'You cannot end a sentence with because because because is a conjunction'
let becauseCount = (sentence2.match(/because/g) || []).length
console.log(becauseCount);

// 3 Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const cleanText = sentence3.replace(/[!@#$%^&*();]/g, '');
console.log(cleanText);

// 4 Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let sentence4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let numbers = sentence4.match(/\d+/g).map(Number);
let annualIncome = numbers[0] * 12  + numbers[1] + numbers[2] * 12
console.log(annualIncome);

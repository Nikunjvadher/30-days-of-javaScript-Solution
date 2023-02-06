// 1 Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let income = text.match(/\d+/g)
let sum = 0;
for(let inc of income){
    sum += parseInt(inc)
}
console.log(sum);
console.log(income);

// 2 The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12

// 3 Write a pattern which identify if a string is a valid JavaScript variable
function is_valid_variable(string){
    // const regEx = /^[A-Za-z0-9]/g
    const regEx = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/
    console.log(string);
    // if(string == /^\d/){
    if(string == regEx){
        console.log('true')
    } else {
        console.log('String is not valid');
    }
}

// is_valid_variable('1Nikunj')

is_valid_variable('first_name') // True
is_valid_variable('first-name') //False
// is_valid_variable('1first_name') // False
// is_valid_variable('firstname') // True


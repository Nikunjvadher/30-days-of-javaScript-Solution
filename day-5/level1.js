// 1 -  Declare an empty array;
const arr1 = Array()
console.log(arr1);

// 2-  Declare an array with more than 5 number of elements
const arr2 = [1,2,3,4,5,6]
console.log(arr2);

//  3 - Find the length of your array
console.log(arr2.length);

// 4 - Get the first item, the middle item and the last item of the array
const arr = [1,2,3,4,5]
function middle (array) {
    return index % 2 !== 0 ? [array[(index-1) / 2]] : [array[(index/2)-1], array[index/2]]; 
}
let middle_index = Math.floor(arr.length / 2)
console.log(arr[0]); //1
console.log(arr[middle_index]); // 3
console.log(arr[arr.length-1]); 5

// 5 - Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedData = [
    true,
    100,
    'Nikunj',
    { name: "Nikunj" },
    {hobbies : ['Song' , 'book reading']}

]
console.log(mixedData);


// 6 - Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let Companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon']

// 7 - Print the array using console.log()
console.log(Companies);

// 8 - Print the number of companies in the array
console.log(Companies.length);

// 9 - Print the first company, middle and last company
let middle_company = Math.floor(Companies.length / 2)
console.log(Companies[0]); // Facebook
console.log(Companies[middle_company]); // Apple
console.log(Companies[Companies.length-1]); // Amazon

// 10 - Print out each company
console.log(Companies.join(', '));

// 11 - Change each company name to uppercase one by one and print them out
for (const company of Companies) {
    console.log(company.toUpperCase());
    
}

// 12 - Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${Companies.join(', ')} are big IT companies.`);

// 13 - Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let checkCompanies = Companies.includes('Facebook')
if(checkCompanies === true){
    console.log('Company Exist');
} else {
    console.log('Company not Exist');
}

// 14 - Filter out companies which have more than one 'o' without the filter method
// not working perfectly
// let filtered_companies = [];
// for (let i = 0; i < Companies.length; i++) {
//     if(Companies[i].match(/o/g).length > 1){
//         filtered_companies.push(Companies[1])
//     }    
// }
// console.log(filtered_companies);

// 15 - Sort the array using sort() method
console.log(Companies.sort());

// 16 - Reverse the array using reverse() method
console.log(Companies.reverse());

// 17 - Slice out the first 3 companies from the array
for (let i = 0; i < 3; i++) {
    console.log(Companies[i]);
}
console.log(Companies.slice(0 , 3));

// 18 - Slice out the last 3 companies from the array
console.log(Companies.slice(-3));

// 19 - Slice out the middle IT company or companies from the array
if(Companies[0] && Companies[Companies.length - 1]){
    // console.log(Companies);
    return ;
} else {
    console.log(Companies.join(' '));
}

// 20 -  Remove the first IT company from the array
console.log(Companies.shift())

// 21 - Remove the middle IT company or companies from the array
let middle = Companies[(Companies.length-1)/2]
console.log(Companies[(Companies.length-1)/2]);
let middle = Companies.splice((Companies.length-1)/2 , 1).pop()
console.log(middle)

// 22 - Remove the last IT company from the array
console.log(Companies.pop());
console.log(Companies.slice(-1));


// 23 - Remove all IT companies
Companies.splice(0 , Companies.length) // easy
while (Companies.length > 0) {
    Companies.pop()    
}
console.log(Companies);

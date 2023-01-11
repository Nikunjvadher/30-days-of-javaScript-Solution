
// ============================ level 3 ============================

// 1 Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGenerator(){
    let numberOfChars = 10
    let numberofIds = 2
    // let number = Number(prompt('Enter Number of Characters'))
    // let numberofIds = Number(prompt('Enter Number of Ids'))

    let num = "123456789";
    for (let i = 0; i < numberofIds; i++) {
        let userId =  Math.floor(Math.random() * num).toString(16).padStart(numberOfChars, 0)
        console.log(userId.toUpperCase());
    }
}
userIdGenerator()
// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '

// 2 Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator(){
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    const rgb = `rgb(${r},${g},${b})`
    console.log(rgb);
}
rgbColorGenerator() // rgb(125,244,255)

// 3 Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(){
    let arr = [];
    let hex = '#';
    let randomColor = Math.floor((Math.random() * 10) + 1)
    let hexNum = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, 0)
    hex+=hexNum;
    for(i = 0; i<randomColor; i++){
        arr.push(hex)
    }
    console.log(arr.join(" ").split(' '));
}
arrayOfHexaColors()

// 4 Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(){
    let arr = [];
    let randomColor = Math.floor((Math.random() * 10)+1)
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    const rgb = `rgb(${r},${g},${b})`
    for(let i = 1; i<=randomColor; i++){
        arr.push(rgb)
    }
    console.log(arr.join(' ').split(' '));
    return arr;
}
arrayOfRgbColors()

// 5 Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function hexToRgb(hex) {
    hex = hex.replace('#', '')
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    const rgb = `rgb(${r},${g},${b})`
    console.log(rgb);
}
hexToRgb('#ff92ff')
// console.log(parseInt('2738ff', 16));

// 6 Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertHexaToRgb(r,g,b){
    let hex = '#' +  [r,g,b].map(x => x.toString(16).padStart(2,'0')).join('')
    console.log(hex);
    return hex;
}
convertHexaToRgb(101,255,100)

// 7 Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(name, items) {
  let arr = [];
  if (name == "rgb") {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    const rgb = `rgb(${r},${g},${b})`;
    for (let i = 1; i <= items; i++) {
      arr.push(rgb);
    }
    console.log(arr.join(" ").split(" "));
    return arr;
  } else if (name == "hex") {
    let hex = "#";
    let hexNum = Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, 0);
    hex += hexNum;
    for (i = 0; i < items; i++) {
      arr.push(hex);
    }
    console.log(arr.join(" ").split(" "));
  } else {
    console.log('Enter "hex" or "rgb" only.');
  }
}
generateColors('hex', 3) // ['#a3e12f', '#03ed55', '#eb3d2b']
// generateColors('hex', 1) // '#b334ef'
// generateColors('rgb', 3) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// generateColors('rgb', 1) // 'rgb(33,79, 176)'

// 8 Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array){
    for (let i = array.length-1; i >= 0;  i--) {
        let j = Math.floor(Math.random() * (i+1))
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        console.log(array[i]);
    }
}
const arr = ['1','2','3','4','5','6','7','8','9','10']
// const arr = ['1','2','3','4']
shuffleArray(arr)

// 9 Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(n){
    let fact = 1;
    while(n>1){
        fact *= n;
        n--;
    }
    console.log(fact);
}
factorial(6);

// 10 Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(val) {
  let value = 
    val === undefined || val == null || val.length <= 0 ? true : false;
  console.log(value);
}
isEmpty();

// 11 Call your function sum, it takes any number of arguments and it returns the sum.
function sum(){
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}
sum(1,2,3,4,10)

// 12 Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(arr) {
    let sum=0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
const array = [1,2,3,4,5]
sumOfArrayItems(array)

// 13 Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      sum += arr[i];
    } else {
      console.log('Enter only Number');
    }
  }
  sum = sum / arr.length;
  console.log(sum);
}
const array1 = [1, 2, 3, 4, 5];
average(array1);

// 14 Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
function modifyArray(array){
  if(array.length > 5){
    for (let i = 0; i < array.length; i++) {
      if(i == 4){
        let mod = String(prompt('Enter Modify array element : '))
        arr[i] = mod
      }
      console.log(arr[i]);
    }
  } else {
    console.log('item Not Found');
  }
}
const array2 = [1, 2, 3, 4,5,6];
modifyArray(array2);

// 15 Write a function called isPrime, which checks if a number is prime number.
function isPrime(num){
  if(num % 2 == 1){
    console.log(num + ' is Prime');
  } else {
    console.log(num + ' is Composite');
  }
}
isPrime(11)

// 16 Write a functions which checks if all items are unique in the array.
function isUnique(arr){
  let check = arr.length === new Set(arr).size;
  console.log(check);
}
const array3 = [1, 2, 3, 4,5,6,6, 'hey'];
isUnique(array3)

// 17 Write a function which checks if all the items of the array are the same data type.
function isUnique(arr){
  let check = new Set(arr.map(x => typeof x)).size <= 1;
  console.log(check);
}
const array5 = [1, 2, 3, 4,5,6];
console.log(array5.indexOf(array5));
isUnique(array5)

// 18 JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(name) {
  try {
    Function("let " + name);
  } catch (error) {
    return false;
  }
  return true;
}
console.log(isValidVariable("heyy"));

// 19 Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function sevenRandomNumbers() {
  let arr = [];
  while (arr.length < 7) {
    let randomNum = Math.floor((Math.random() * 9) + 1)
    if(arr.indexOf(randomNum) === -1) arr.push(randomNum)
  }
  console.log(arr);
}
sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]

// 20 Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
function reverseCountries(arr) {
 let newArr = [...arr].map(a.pop , a);
    console.log(newArr);
}
function reverseCountries(arr) {
    let newCon = [...arr]
    let reverseArray = []
    console.log(newCon);

    for (let i=arr.length-1; i >= 0; i--) {
        reverseArray.push(arr[i])
    }
    console.log(reverseArray);
}

const webTechs = ["VANILA", "HTML", "CSS", "NODE", "MONGO"];
reverseCountries(webTechs)

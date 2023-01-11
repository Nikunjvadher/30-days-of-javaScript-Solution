// =========================== level 2 ===========================
// 1 Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c, x, y) {
  return a * x + b * y + c;
}
console.log(solveLinEquation(10, 20, 30, 40, 50));

// 2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadratic(a, b, c) {
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    return [-b / (2 * a)];
  } else {
    const sqrtDiscriminant = Math.sqrt(discriminant);
    return [
      (-b + sqrtDiscriminant) / (2 * a),
      (-b - sqrtDiscriminant) / (2 * a),
    ];
  }
}

console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}

// 3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray([array]) {
  for (const arr in array) {
    console.log(arr);
  }
}
printArray([1, 2, 3, 4]);

// 4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08
function showDateTime() {
  const date = new Date();
  // console.log(`${date.get()}`);
  console.log(
    `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
  );
}
showDateTime();

// 5 Declare a function name swapValues. This function swaps value of x to y.
function swapValues(a, b) {
  let temp = a;
  a = b;
  b = temp;
  console.log(a, b);
}
swapValues(3, 4); // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

// 6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(input) {
  let arr = new Array();
  for (let i = input.length - 1; i >= 0; i--) {
    arr.push(input[i]);
    console.log(input[i]);
  }
}
a = [1, 2, 3, 4, 5, 6, 7];
reverseArray(a);

// sortest method
// let reverseArray = (a) =>{
//     return [...a].map(a.pop,a)
// }
// console.log(reverse(a));
reverseArray([1, 2, 3, 4, 5]);
// //[5, 4, 3, 2, 1]
reverseArray(["A", "B", "C"]);
// //['C', 'B', 'A']

// 7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(a) {
  let upperCase = String(a).toUpperCase().split(",");
  console.log(upperCase);
}
capitalizeArray(["a", "b", "d"]);

// 8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item) {
  let items = String(item).split(",");
  console.log(items);
}
addItem(["mango", "banana", "apple"]);

// 9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index) {
  let item = ["1", "2", "3", "4", "5"];
  let newItem = item.filter((item) => item != index);
  console.log(newItem);
}
removeItem(3);

// 10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += i;
  }
  console.log(sum);
}
sumOfNumbers(10);

// 11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    if (i % 2 == 1) {
      sum += i;
      // console.log(i);
    }
  }
  console.log(sum);
}
sumOfOdds(10);

// 12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    if (i % 2 == 0) {
      sum += i;
      // console.log(i);
    }
  }
  console.log(sum);
}
sumOfEven(10);

// 13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(num) {
  let evenNumber = 0;
  let oddNumber = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 1) {
      // console.log(i);
      oddNumber++;
    } else {
      evenNumber++;
    }
  }
  console.log(`The number of Evens are ${evenNumber}`);
  console.log(`The number of odds are ${oddNumber}`);
}
evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

// 14 Write a function which takes any number of arguments and return the sum of the arguments
function sumOfArgs() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}
sumOfArgs(1, 2, 3); // -> 6
sumOfArgs(1, 2, 3, 4); // -> 10

// 15 Write a function which generates a randomUserIp.
let ip =
  Math.floor(Math.random() * 255) +
  1 +
  "." +
  (Math.floor(Math.random() * 255) + 1) +
  "." +
  (Math.floor(Math.random() * 255) + 1) +
  "." +
  (Math.floor(Math.random() * 255) + 1);
console.log(ip);

// 16 Write a function which generates a randomMacAddress
let macAdd = "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
  return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
});
console.log(macAdd);

// 17 Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator(){
    let hex = '#';
    let hexNum = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, 0)
    console.log(hex + hexNum);
}
randomHexaNumberGenerator()
// '#ee33df'

// 18 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator(){
    let num = "123456789";
    let userId =  Math.floor(Math.random() * num).toString(16).padStart(7, 0)
    console.log(userId.toUpperCase());
}
userIdGenerator()
// 41XTDbE



// ========================= Level 2 =======================================
//  using var insted of let because many times i used A, B and C.
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

// 1 Find a union b
var c = [...a , ...b]
console.log(c);  // [4, 5, 8, 9,3, 4, 5, 7]
let setC = new Set(c)
console.log(setC);  // { 4, 5, 8, 9, 3, 7 }

// 2 Find a intersection b
var A = new Set(a)
var B = new Set(b)
let filteredC= a.filter((num) => B.has(num))
var C = new Set(filteredC)
console.log(C); // { 4, 5 }

// 3 Find a with b
let A = new Set(a)
let B = new Set(b)
var c = a.filter((num) => B.has(num))
let C = new Set(c)
console.log(C);

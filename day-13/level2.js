// Exercises:Level 3
// 1. Check the speed difference among the following loops: while, for, for of, forEach
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

let i = 0;
console.time("while Loop");
while (i < countries.length) {
  console.log(countries[0], countries[1]);
  i++;
}
console.timeEnd("while Loop"); // 8.46ms

console.time("for Loop");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[0], countries[1]);
}
console.timeEnd("for Loop"); // 6-7s

console.time("for of");
for (const arr of countries) {
  const [name, city] = arr;
  console.log(name, city);
}
console.timeEnd("for of"); // 4-5

console.time("for of");
countries.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("for of"); // 4-5

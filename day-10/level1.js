// ========================= Level 1 =======================================


const countries = ["Finland", "Sweden", "Norway"];

// 1 create an empty set
let newSet = new Set();
console.log(newSet);

// 2 Create a set containing 0 to 10 using loop
for (let i = 0; i < 10; i++) {
    newSet.add(i);
}
console.log(newSet);

// 3 Remove an element from a set
newSet.delete(5)
console.log(newSet);

// 4  Clear a set
newSet.clear();
console.log(newSet);

// 5  Create a set of 5 string elements from array
let set = new Set()
for(const i of countries){
    set.add(i)
}
console.log(set);

// 6 Create a map of countries and number of characters of a country
const country = countries.map((country) => {
    console.log(country.length);
})

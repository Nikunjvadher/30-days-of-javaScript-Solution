const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const country = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

// 1 Explain the difference between forEach, map, filter, and reduce.
// => The main difference between forEach and filter is that forEach just loop over the array and executes the callback but filter executes the callback and check its return value. If the value is true element remains in the resulting array but if the return value is false the element will be removed for the resulting array.
// let sum = 0;
// numbers.forEach((x) => sum+=x )
// console.log(sum);
// let result = numbers.filter(e => e!== 2)
// console.log(result);
// let sum = numbers.reduce((sum , elem)=> sum + elem)
// console.log(sum);

// 2 Define a callback function before you use it in forEach, map, filter or reduce.
console.time();
let sum = 0;
const callback = function (element) {
  sum += element;
};
console.timeEnd();
numbers.forEach(callback);
numbers.map(callback);
numbers.filter(callback);
numbers.reduce((sum, callback) => (sum += callback));
console.log(sum);

// 3 Use forEach to console.log each country in the countries array.
countries.forEach((e) => console.log(e));

// 4 Use forEach to console.log each name in the names array.
names.forEach((e) => console.log(e));

// 5 Use forEach to console.log each number in the numbers array.
numbers.forEach((e) => console.log(e));

// 6 Use map to create a new array by changing each country to uppercase in the countries array.
let countryUpper = countries.map((e) => e.toUpperCase());
console.log(countryUpper);

// 7 Use map to create an array of countries length from countries array.
let arr = countries.map((x) => x.length);
console.log(arr);

// 8 Use map to create a new array by changing each number to square in the numbers array
const square = numbers.map((e) => e * e);
console.log(square);

// 9 Use map to change to each name to uppercase in the names array
const NewName = names.map((e) => e.toUpperCase());
console.log(NewName);

// 10 Use map to map the products array to its corresponding prices.
let prices = products.map((product) => {
  return `${product.product}:${product.price}`;
});
console.log(prices);

// 11 Use filter to filter out countries containing land.
const result = countries.filter((x) => {
  let lowerCase = x.toLowerCase();
  // console.log(lowerCase);
  return lowerCase.includes("land");
});
console.log(result);

// 12 Use filter to filter out countries having six character.
const filtersixLetterCountry = countries.filter((e) => e.length == 6);
console.log(filtersixLetterCountry);

// 13 Use filter to filter out countries containing six letters and more in the country array.
const filterSixOrMoreLettersCountry = countries.filter((e) => e.length >= 6);
console.log(filterSixOrMoreLettersCountry);

// 14 Use filter to filter out country start with 'E';
const filterCountryStartWithE = countries.filter((e) => e.startsWith("e"));
console.log(filterCountryStartWithE);

// 15 Use filter to filter out only prices with values.
const filterPrice = products.filter((e) => e.price !== " " && e.price !== "");
console.log(filterPrice);

// 16 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = () => {
  names.filter((e) => {
    if (typeof e === "string") {
      console.log(e);
    }
  });
};
getStringLists();

// 17 Use reduce to sum all the numbers in the numbers array.
console.time();
let sumOfAll = numbers.reduce((e, sum) => e + sum);
console.log(sumOfAll);
console.timeEnd();

// 18 Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
console.log(countries);
const sentence = countries.reduce((prev, curr, index) => {
  if (index === countries.length - 2) {
   return prev + curr + " and ";
  } else if (index === countries.length - 1) {
    return prev + curr + " are not European countries";
  } else {
    return prev + curr + ",";
  }
});
console.log(sentence);

// 19 Explain the difference between some and every
// let number = [1, 2, 3, 4, 5];
let someAreEven = numbers.some(num => num % 2 === 0); // true
let allAreEven = numbers.every(num => num % 2 === 0); // false
console.log(someAreEven , allAreEven);

// 20 Use some to check if some names' length greater than seven in names array
const some = names.some(name => name.length > 7)
console.log(some);

// 21 Use every to check if all the countries contain the word land
const every = countries.every(e => e.includes('land'))
console.log(every);

// 22 Explain the difference between find and findIndex.
// find: Return the first element which satisfies the condition
let firstEven = numbers.find(num => num % 2 === 0); // 2
console.log(firstEven); // 2

// findIndex: Return the position of the first element which satisfies the condition
let firstEvenIndex = numbers.findIndex(num => num % 2 === 0); // 1
console.log(firstEvenIndex); // 1


// 23 Use find to find the first country containing only six letters in the countries array
const find = countries.find(x => x.length === 6 )
console.log(find);

// 24 Use findIndex to find the position of the first country containing only six letters in the countries array
const findIndex = countries.findIndex(x => x.length === 6 )
console.log(findIndex);

// 25 Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const positionOfNorway = countries.findIndex((x) => {
    return x.includes('Norway')
})
console.log(positionOfNorway);

// 26 Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const positionOfRussia = countries.findIndex((x) => x.includes('Russia'))
console.log(positionOfRussia);

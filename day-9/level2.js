//  ======================= level 2 ===================

const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

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

// 1 Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const tPrice = products
  .map((product) => product.price)
  .filter((price) => price > 0)
  .reduce((acc, curr) => acc + curr);
console.log(tPrice);

// 2 Find the sum of price of products using only reduce reduce(callback))
const sum = products.reduce((acc, sum) => {
  const price = products.filter((x) => x.price);
  if (typeof price === Number) {
    return acc + sum;
  }
});
console.log(sum);

// 3 Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(countries) {
  let country = countries.filter((country) => {
    return (
      country.toLowerCase().includes("ia") ||
      country.toLowerCase().includes("island") ||
      country.toLowerCase().includes("land") ||
      country.toLowerCase().includes("stan")
    );
  });
  return country;
}
console.log(categorizeCountries(country));

// 4 Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function countrFirstLetters(countries) {
  let lettercount = {};
  countries.forEach((country) => {
    let firstLetter = country[0];
    if (lettercount[firstLetter]) {
      lettercount[firstLetter]++;
    } else {
      lettercount[firstLetter] = 1;
    }
  });

  let letterCountArray = Object.keys(lettercount).map((letter) => {
    return { letter: letter, count: lettercount[letter] };
  });
  return letterCountArray;
}
let letterCount = countrFirstLetters(country);
console.log(letterCount);

// 5 Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
const getFirstTenCountries = (country) => {
  const countries = country.slice(0, 10);
  console.log(countries);
  let firstTen = [];
  firstTen = countries.map((country) => {
    return country;
  });
  firstTen.length = 10;
  return firstTen;
};
console.log(getFirstTenCountries(country));

// 6 Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

function getLastTenCountries(country){
// const countries = country.slice(country.length - 10)
const countries = country.slice(-10)
console.log(countries);
}
getLastTenCountries(country)

// 7 Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc
function mostCommonFirstLetter(countries){
    let letterCount = {};
    countries.forEach((country) => {
        let firstLetter = country[0].toUpperCase();
        if(letterCount [firstLetter]){
            letterCount[firstLetter]++;
        } else {
            letterCount[firstLetter] = 1;
        }
    })
    let mostCommonLetter = "";
    let highestCount = 0;
    for(let letter in letterCount){
        if(letterCount[letter] > highestCount){
            mostCommonLetter = letter;
            highestCount = letterCount[letter]
        }
    }

    return mostCommonLetter
}
let mostCommonLetter = mostCommonFirstLetter(country)
console.log(mostCommonLetter); // S

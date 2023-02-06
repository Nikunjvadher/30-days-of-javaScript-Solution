// Exercises:Level 1
// 1. Display the countries array as a table
// -> completed in counties file
const countries_data = [
  {
    name: "zfghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 40218234,
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    region: "Asia",
    area: 652230,
  },
  {
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 40218234,
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    region: "Asia",
    area: 652230,
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    languages: ["Swedish"],
    population: 28875,
    flag: "https://flagcdn.com/ax.svg",
    region: "Europe",
    area: 1580,
  },
  {
    name: "Albania",
    capital: "Tirana",
    languages: ["Albanian"],
    population: 2837743,
    flag: "https://flagcdn.com/al.svg",
    region: "Europe",
    area: 28748,
  },
  {
    name: "Algeria",
    capital: "Algiers",
    languages: ["Arabic"],
    population: 43851043,
    flag: "https://flagcdn.com/dz.svg",
    region: "Africa",
    area: 2381741,
  },
];
console.table(countries_data);

// 2. Display the countries object as a table
// -> completed in counties_data file

// 3. Use console.group() to group logs
// => check in browser console first
console.log("heloo");
console.group();
console.log("i am alien");
console.groupEnd();

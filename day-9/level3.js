const countries_data = [
  {
    name: "zfghanistan",
    capital: "AKabul",
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
  {
    name: "American Samoa",
    capital: "Pago Pago",
    languages: ["English", "Samoan"],
    population: 55197,
    flag: "https://flagcdn.com/as.svg",
    region: "Oceania",
    area: 199,
  },
  {
    name: "Andorra",
    capital: "Andorra la Vella",
    languages: ["Catalan"],
    population: 77265,
    flag: "https://flagcdn.com/ad.svg",
    region: "Europe",
    area: 468,
  },
  {
    name: "Angola",
    capital: "Luanda",
    languages: ["Portuguese"],
    population: 32866268,
    flag: "https://flagcdn.com/ao.svg",
    region: "Africa",
    area: 1246700,
  },
  {
    name: "Anguilla",
    capital: "The Valley",
    languages: ["English"],
    population: 13452,
    flag: "https://flagcdn.com/ai.svg",
    region: "Americas",
    area: 91,
  },
  {
    name: "Antarctica",
    languages: ["English", "Russian"],
    population: 1000,
    flag: "https://flagcdn.com/aq.svg",
    region: "Polar",
    area: 14000000,
  },
];

// 1 Use the countries information, in the data folder. Sort countries by name, by capital, by population
const country = countries_data.map((country)=>{
  let name =  country.name;
  console.log(name);
})
const sortBycountryName = countries_data.sort((a,b)=> a.name.localeCompare(b.name))
console.log(sortBycountryName);
// const sortBycountryCapital = countries_data.sort((a, b) => a.capital > b.capital ? 1 : -1);
const sortBycountryCapital = countries_data.sort((a, b) => a.name.localeCompare(b.name) );
console.log(sortBycountryCapital);
const sortBycountryPopulation = countries_data.sort((a,b) => b.population - a.population)
console.log(sortBycountryPopulation);

// *** Find the 10 most spoken languages:
const counts = [];
const count = {};
const most10SpokenLanguage = countries_data.map((con) => {
  // console.log(con);
  const { languages } = con;
  const langSet = new Set(languages);
  for (const i of langSet) {
    const filterdLang = languages.filter((lang) => lang === i);
    counts.length = 10;
    counts.push({ languages: i, count: filterdLang.length });
  }
});
console.log(most10SpokenLanguage);

// *** Use countries_data.js file create a function which create the ten most populated countries

function tenMostPopularCountry(countries , index){
  // const country = [];
  for (let i = 0; i < index; i++) {
    for (let i = 0; i < countries.length; i++) {
      let country = countries.sort((a,b) => b.population - a.population  );
      console.log(country);
      return country;
    }
  }
}
tenMostPopularCountry(countries_data , 10);

// *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

// const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

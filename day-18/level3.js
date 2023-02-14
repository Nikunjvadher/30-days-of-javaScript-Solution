const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// 1 Read the cats api and find the average weight of cat in metric unit.
fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    let totalWeight = 0;
    let count = 0;
    data.forEach((cat) => {
      // totalWeight += cat.weight.metric
      totalWeight += Number(cat.weight.metric);
      console.log(cat.weight.metric);
      count++;
    });
    const avgWeight = totalWeight / count;
    console.log(avgWeight);
  })
  .catch((error) => console.error(error));

// 2 Read the countries api and find out the 10 largest countries
// ==> this not working perfectly
fetch(countriesAPI)
  .then((Response) => Response.json())
  .then((country) => {
    let countries = country.sort((a, b) => b.population - a.population);
    // console.log(countries);
    const largestCountry = countries.slice(0, 10);
    largestCountry.forEach((e) => {
      console.log(e.name, e.population);
    });
    // console.log(largestCountry);
  });

// 3 Read the countries api and count total number of languages in the world used as officials.
fetch(countriesAPI)
  .then((Response) => Response.json())
  .then((countries) => {
    let languageCount = 0;
    countries.forEach((country) => {
      languageCount += country.languages.length;
    });
    console.log(`Number of Language is : ${languageCount}`);
  });

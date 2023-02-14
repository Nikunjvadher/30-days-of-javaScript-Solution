const countriesAPI = "https://restcountries.com/v2/all";

// Exercises: Level 1
// 1 Read the countries API using fetch and print the name of country, capital, languages, population and area.
fetch(countriesAPI)
  .then((response) => response.json()) // accessing the API data as JSON
  .then((data) => {
    // getting the data
    data.forEach((country) => {
      // console.log(`Name: ${country.name} || Capital: ${country.capital}`);
      console.log(`Name: ${country.name}`);
      console.log(`Capital: ${country.capital}`);
      console.log(`Language: ${country.language}`);
      console.log(`Population: ${country.population}`);
      console.log(`Area: ${country.area}`);
    });
  })
  .catch((error) => console.error(error));

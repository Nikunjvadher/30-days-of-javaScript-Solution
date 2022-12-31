const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const mernStack = ["MongoDB", "Express", "React", "Node"];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// const countries = [
//   'Afghanistan',
//   'Albania',
//   'Algeria',
//   'Andorra',
//   'Angola',
//   'Antigua and Barbuda',
//   'Argentina',
//   'Armenia',
//   'Australia',
//   'Austria',
//   'Azerbaijan',
//   'Bahamas',
//   'Bahrain',
//   'Bangladesh',
//   'Barbados',
//   'Belarus',
//   'Belgium',
//   'Belize',
//   'Benin',
//   'Bhutan',
//   'Bolivia',
//   'Bosnia and Herzegovina',
//   'Botswana',
//   'Brazil',
//   'Brunei',
//   'Bulgaria',
//   'Burkina Faso',
//   'Burundi',
//   'Cambodia',
//   'Cameroon',
//   'Canada',
//   'Cape Verde',
//   'Central African Republic',
//   'Chad',
//   'Chile',
//   'China',
//   'Colombi',
//   'Comoros',
//   'Congo (Brazzaville)',
//   'Congo',
//   'Costa Rica',
//   "Cote d'Ivoire",
//   'Croatia',
//   'Cuba',
//   'Cyprus',
//   'Czech Republic',
//   'Denmark',
//   'Djibouti',
//   'Dominica',
//   'Dominican Republic',
//   'East Timor (Timor Timur)',
//   'Ecuador',
//   'Egypt',
//   'El Salvador',
//   'Equatorial Guinea',
//   'Eritrea',
//   'Estonia',
//   'Ethiopia',
//   'Fiji',
//   'Finland',
//   'France',
//   'Gabon',
//   'Gambia, The',
//   'Georgia',
//   'Germany',
//   'Ghana',
//   'Greece',
//   'Grenada',
//   'Guatemala',
//   'Guinea',
//   'Guinea-Bissau',
//   'Guyana',
//   'Haiti',
//   'Honduras',
//   'Hungary',
//   'Iceland',
//   'India',
//   'Indonesia',
//   'Iran',
//   'Iraq',
//   'Ireland',
//   'Israel',
//   'Italy',
//   'Jamaica',
//   'Japan',
//   'Jordan',
//   'Kazakhstan',
//   'Kenya',
//   'Kiribati',
//   'Korea, North',
//   'Korea, South',
//   'Kuwait',
//   'Kyrgyzstan',
//   'Laos',
//   'Latvia',
//   'Lebanon',
//   'Lesotho',
//   'Liberia',
//   'Libya',
//   'Liechtenstein',
//   'Lithuania',
//   'Luxembourg',
//   'Macedonia',
//   'Madagascar',
//   'Malawi',
//   'Malaysia',
//   'Maldives',
//   'Mali',
//   'Malta',
//   'Marshall Islands',
//   'Mauritania',
//   'Mauritius',
//   'Mexico',
//   'Micronesia',
//   'Moldova',
//   'Monaco',
//   'Mongolia',
//   'Morocco',
//   'Mozambique',
//   'Myanmar',
//   'Namibia',
//   'Nauru',
//   'Nepal',
//   'Netherlands',
//   'New Zealand',
//   'Nicaragua',
//   'Niger',
//   'Nigeria',
//   'Norway',
//   'Oman',
//   'Pakistan',
//   'Palau',
//   'Panama',
//   'Papua New Guinea',
//   'Paraguay',
//   'Peru',
//   'Philippines',
//   'Poland',
//   'Portugal',
//   'Qatar',
//   'Romania',
//   'Russia',
//   'Rwanda',
//   'Saint Kitts and Nevis',
//   'Saint Lucia',
//   'Saint Vincent',
//   'Samoa',
//   'San Marino',
//   'Sao Tome and Principe',
//   'Saudi Arabia',
//   'Senegal',
//   'Serbia and Montenegro',
//   'Seychelles',
//   'Sierra Leone',
//   'Singapore',
//   'Slovakia',
//   'Slovenia',
//   'Solomon Islands',
//   'Somalia',
//   'South Africa',
//   'Spain',
//   'Sri Lanka',
//   'Sudan',
//   'Suriname',
//   'Swaziland',
//   'Sweden',
//   'Switzerland',
//   'Syria',
//   'Taiwan',
//   'Tajikistan',
//   'Tanzania',
//   'Thailand',
//   'Togo',
//   'Tonga',
//   'Trinidad and Tobago',
//   'Tunisia',
//   'Turkey',
//   'Turkmenistan',
//   'Tuvalu',
//   'Uganda',
//   'Ukraine',
//   'United Arab Emirates',
//   'United Kingdom',
//   'United States',
//   'Uruguay',
//   'Uzbekistan',
//   'Vanuatu',
//   'Vatican City',
//   'Venezuela',
//   'Vietnam',
//   'Yemen',
//   'Zambia',
//   'Zimbabwe'
// ]

// Exercises: Level 2
// 1 Develop a small script which generate any number of characters random id:
function randomId(length) {
  var result = "";
  let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += char.charAt(Math.floor(Math.random() * char.length));
  }
  return result;
}
console.log(randomId(Math.floor(Math.random() * 50)));

// 2  Write a script which generates a random hexadecimal number.
const generate = (size) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
console.log("#" + generate(6));

// 3 Write a script which generates a random rgb color number.
const randomRgb = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};
const r = randomRgb(0, 255);
const g = randomRgb(0, 255);
const b = randomRgb(0, 255);
const rgb = `rgb(${r},${b},${g})`;
console.log(rgb);

// 4 Using the above countries array, create the following new array.
//  ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const UpperCaseArray = countries.map((e) => {
  return e.toUpperCase();
});
console.log(UpperCaseArray);

// 5 Using the above countries array, create an array for countries length'.
const elemLength = countries.map((e) => {
  return e.length;
});
console.log(elemLength);
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

// 6 Use the countries array to create the following array of arrays:
const newArr = countries.map((e) => {
  return (arr = [e, e.slice(0, 3), e.length]);
});
console.log(newArr);
// [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ];

// 7 In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let countriesWithLand = countries.filter((country) => {
  return country.includes("land");
});
if (countriesWithLand.length > 0) {
  console.log(countriesWithLand);
} else {
  console.log("All these countries are without land");
}
// [ 'Finland', 'Ireland' ]

// 8 In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let countriesWithai = countries.filter((country) => {
  return country.includes("ia"); // or
  // return country.endsWith("ia");
});
if (countriesWithai.length > 0) {
  console.log(countriesWithai);
} else {
  console.log("All these countries are without land");
}
// ['Albania', 'Bolivia','Ethiopia']

// 9 Using the above countries array, find the country containing the biggest number of characters.
function findLongestWord(str) {
  let longestWord = str.sort(function (a, b) {
    return b.length - a.length;
  });
  console.log(longestWord[0]);
  return longestWord[0].length;
}
findLongestWord(countries); // Ethiopia

// 10 Using the above countries array, find the country containing only 5 characters.
function conatin(str) {
  const newCountry = countries.map((e) => {
    if (e.length <= 5) {
      // return e.split(' ');
      console.log(e.split(" "));
    }
  });
  return newCountry.concat();
}
conatin(...countries);
// conatin(Array.from(countries))

// Find the longest word in the webTechs array
function findLongestWord(str) {
  let longestWord = str.sort((a, b) => {
    return b.length - a.length;
  });
  console.log(longestWord[0]);
}
findLongestWord(webTechs);

// 12 Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
const WebArr = webTechs.map((e) => {
  return [e, e.length];
});
console.log(WebArr);

// 13 An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let MERN = mernStack.map((e)=> {
  return e[0];
})
console.log(MERN.join(''));

// 14 Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for(arr of webTechs){
  console.log(arr);
}

// 15 This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits =  ['banana', 'orange', 'mango', 'lemon'];
function reverse(arr){
  let revevseArr = [];
  while(arr.length){
    revevseArr.push(arr.pop());
  }
  console.log(revevseArr);
}
reverse(fruits);

// 16 Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];
console.log(fullStack.flat(1).toString());

// ========================= Level 2 =======================================
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// 1 Find the person who has many skills in the users object.
let winner;
let max = 0;
for (const property in users) {
  // console.log(property);
  if (users[property].skills.length > max) {
    max = users[property].skills.length;
    winner = property;
  }
}
console.log(winner);

// 2 Count logged in users, count users having greater than equal to 50 points from the following object.
let loggedUser = 0;
for (const property in users) {
  if (users[property].isLoggedIn == true && users[property].points >= 50) {
    loggedUser++;
  }
}
console.log(loggedUser);

// 3 Find people who are MERN stack developer from the users object
const mernStackDevelopers = Object.entries(users).filter(([username, user]) => {
  const { skills } = user;
  return (
    skills.includes("MongoDB") &&
    skills.includes("React") &&
    skills.includes("Node") &&
    skills.includes("Express")
  );
}).map(([username , user]) => username);
// let MERN = ["MongoDB", "React", "Node", "Express"];
// for (const property in users) {
//   let mern = users[property].skills.every((i) => MERN.includes(i));
//   console.log(mern);
// }
// let containsAll = arr1.every(i => arr2.includes(i));
// let result = needle.every(i => haystack.includes(i));
// console.log(result); // Output = true

// 4 Set your name in the users object without modifying the original users object
for (const property in users) {
  users[property].name = "Nikunj";
  console.log(users[property]);
}

// 5 Get all keys or properties of users object
let keys = Object.keys(users);
console.log(keys);
for (const key in users) {
  let value = users[key];
  console.log(value);
}

// 6 Get all the values of users object
let objValue = Object.values(users);
console.log(objValue);

// 7 Use the countries object to print a country name, capital, populations and languages.
const countries = {
  name: "India",
  capital: "Delhi",
  population: "130cr",
  languages: ["Hindi", "English", "Gujrati"],
};

console.log(countries.name);
console.log(countries.capital);
console.log(countries.population);
console.log(countries.languages);

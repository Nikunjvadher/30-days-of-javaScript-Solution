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
const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];
  
  const mernStack = ["MongoDB", "Express", "React", "Node"];
  // 1 Iterate 0 to 10 using for loop, do the same using while and do while loop
  let i = 0;
  for(let i = 0; i<=10; i++){
      console.log(i);
  }
  while(i<=10){
      console.log(i);
      i++
  }
  do {
      console.log(i);
      i++
  } while (i<=10);
  
  // 2 Iterate 10 to 0 using for loop, do the same using while and do while loop
  for(let i = 10; i>=0; i--){
      console.log(i);
  }
  
  // 3 Iterate 0 to n using for loop
  let n = 5
  for(let i = 0; i<n; i++){
      console.log(i);
  }
  
  // 4 Write a loop that makes the following pattern using console.log()
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
  let string = "";
  for(let i=1; i<=6; i++){
      for(let j=0; j<i; j++){
          string += "#";
      }
      string += '\n';
  }
  console.log(string);
  
  // 5 Use loop to print the following pattern:
  for(let i=0; i<=10; i++){
      console.log(`${i} * ${i} = ${i * i}`);
  }
  
  // 6 Using loop print the following pattern
  console.log('i  i*i  i*i*i');
  for(let i = 0; i<=10; i++){
      console.log(`${i} ${i*i}  ${i * i * i}`);
  }
  
  // 7 Use for loop to iterate from 0 to 100 and print only even numbers
  for(let i=0; i<=100; i++){
      if(i%2 == 0){
          console.log(i);
      }
  }
  
  // 8 Use for loop to iterate from 0 to 100 and print only odd numbers
  for(let i=0; i<=100; i++){
      if(i%2 == 1){
          console.log(i);
      }
  }
  
  // 9 Use for loop to iterate from 0 to 100 and print only prime numbers
  function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i < num; i++) {
        if (num % i == 0)
          return false;
      }
      return true;
    }
    for (let i = 0; i < 100; i++) {
      if (isPrime(i)) console.log(i);
  }
  
  // 10 Use for loop to iterate from 0 to 100 and print the sum of all numbers.
  let sum = 0;
  for(let i=0; i<=100; i++){
      sum += i;
  }
  console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);
  
  // 11 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
  let sumOfEven = 0;
  let sumOfOdd = 0;
  let arr = [];
  for(let i = 0; i<=100; i++){
      if(i % 2==0){
          sumOfEven += i;
      }
      if(i % 2 == 1){
          sumOfOdd += i;
      }
  }
  console.log(`The sum of all evens from 0 to 100 is ${sumOfEven}. And the sum of all odds from 0 to 100 is ${sumOfOdd}.`)
  
  // 12 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
  console.log([sumOfEven , sumOfOdd]); // [2550, 2500]
  
  
  // 13 -  Develop a small script which generate array of 5 random numbers
  let array = Array.from({length: 5}, () => Math.floor(Math.random() * 10));
  
  console.log(array);
  
  // 14 Develop a small script which generate array of 5 random numbers and the numbers must be unique
  let randomNumber = Array.from(new Set(Array.from({length: 5}, () => Math.floor(Math.random() * 10))))
  console.log(randomNumber);
  
  
  // 15 Develop a small script which generate a six characters random id:
  function randomId(length){
      var result = '';
      let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for(let i=0; i<length; i++){
          result += char.charAt(Math.floor(Math.random() * char.length))
      }
      return result;
  }
  console.log(randomId(6));
  
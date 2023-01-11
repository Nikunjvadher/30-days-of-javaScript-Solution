// 1 Declare a function fullName and it print out your full name.
function fullName(){
    console.log('Vadher Nikunj J.');
}
fullName()

// 2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName , lastName){
    console.log(`${firstName} ${lastName}`);
}
fullName('Nikunj' , 'Vadher')

// 3 Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(one , two){
    const sum = one + two;
    console.log(sum);
}
addNumbers(1 , 2);

// 4 An area of a rectangle is calculated as follows : area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(l , w){
    const area = l * w;
    console.log(area);
}
areaOfRectangle(10 , 10)

// 5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(l , w){
    const parimeter = 2* (l + w);
    console.log(parimeter);
}
perimeterOfRectangle(10 , 10);

// 6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(l,w,h){
    const volume = l * w * h;
    console.log(volume);
}
volumeOfRectPrism(10 , 10 , 10)

// 7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r){
    const PI = 3.14;
    const area = PI * r * r;
    console.log(area);
}
areaOfCircle(10)

// 8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r){
    const PI = 3.14;
    const circumference = 2 * PI * r;
    console.log(circumference);
}
circumOfCircle(10)

// 9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(m , v){
    const density = m/v;
    console.log(density);
}
density(20 , 10)

// 10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function Speed(distance,time){
   return distance / time;
}
console.log(Speed(100,50))

// 11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(m , g){
    const weight = m * g;
    console.log(weight);
}
weight(10 , 10);

// 12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(c){
    const F = (c * 9/5) + 32;
    console.log(F);
}
convertCelsiusToFahrenheit(10)

// 13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function BMICalculator(weight , height){
    const bmi = weight / (height*height);
    if(bmi < 18.5){
        return "Underweight"
    } else if(bmi < 25){
        return "Normal Weight"
    } else if(bmi < 30){
        return "Overweight"
    } else {
        return "Obese"
    }
}
console.log(BMICalculator(62,5.4));


// 14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(){
    let month = prompt('Enter Month')
    month = month.toString().toLowerCase();
    if(month == "December" || month == 'January' || month == 'February' ){
        console.log('Winter');
    } else if(month == "March" || month == 'April' || month == 'May'){
        console.log('Spring');
    } else if(month == "June" || month == 'July' || month == 'August'){
        console.log('Summer');
    } else if(month == "September" || month == 'October' || month == 'November'){
        console.log('Antumn');
    } else {
        console.log('Enter a Valid month');
    }
}
checkSeason()

// 15 Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(a, b, c) {
  if (a >= b && a >= c) {
    console.log(a);
  } else if (b >= a && b >= c) {
    console.log( b);
  } else {
    console.log( c);
  }
}

findMax(100 , -10 , 5)
findMax(0, 10, 5)
findMax(0, -10, -2)
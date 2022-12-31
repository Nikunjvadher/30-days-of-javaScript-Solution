
// connect this script.js to html first

//1  Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt('Enter Base of a Triangle')
let height = prompt('Enter Base of a Triangle')
const areaOfTriangle = 0.5 * base * height;
console.log(`The area of the triangle is ${areaOfTriangle}`);

// 2 Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sidea = prompt('Enter side a of Triangle')
let sideb = prompt('Enter side b of Triangle')
let sidec = prompt('Enter side c of Triangle')
const perimeterOfTriangle = Number(sidea) + Number(sideb) + Number(sidec)
console.log(`The perimeter of the triangle is ${perimeterOfTriangle}`);

// 3 Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt('Enter Length of rectangle')
let width = prompt('Enter width of rectangle')
const areaOfRectangle = length * width;
const perimeterOfRectangle = 2 * (length * width);
console.log(areaOfRectangle , perimeterOfRectangle);

// 4 Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const PI = 3.14;
const radius = prompt('Enter Radiuse of Circle')
const areaOfCircle = PI * radius * radius;
const  circumferenceOfCircle = 2 * PI * radius;
console.log(areaOfCircle , circumferenceOfCircle);

// Todo
// 5 Calculate the slope, x-intercept and y-intercept of y = 2x -2
// 6 Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// 7 Compare the slope of above two questions.
// 8 Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// 9 - Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt('Enter hours ')
let rate = prompt('Enter rate ')
const payOfPerson = hours * rate;
console.log(payOfPerson);

// 10 - If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = prompt('Enter Your Name')
if(name.length < 7){
    console.log('Your Name is short');
} else {
    console.log('Your Name is long');
}

// 11 - Compare your first name length and your family name length and you should get this output.
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
if(firstName.length > lastName.length){
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
} else {
    console.log(`Your last name, ${lastName} is longer than your first name, ${firstName}`);
}

// 12 - Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 25
console.log(` I am ${myAge - yourAge} years older than you. `);

// 13 - Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
const age = prompt('Enter Your Age year')
const nowYear = new Date().getFullYear();
const userAge = nowYear - Number(age)
if(userAge > 18 ){
    console.log(`You are ${userAge}. You are old enough to drive`);
} else {
    console.log(`You are ${userAge}. You will be allowed to drive after ${18 - userAge} years.`);
}

// 14 - Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
const Year = prompt('Enter Number of Yours You Live')
const YouLived = Year * 60 * 60 * 24 * 365;
console.log(`You lived ${YouLived} seconds.`);

// 15 - Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
var now = new Date();
const FormateA = `${now.getFullYear()}-${now.getMonth()}-${now.getDay()} ${now.getHours()}:${now.getMinutes()}`;
const FormateB = `${now.getDay()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
const FormateC = `${now.getDay()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
console.log(FormateA);
console.log(FormateB);
console.log(FormateC);


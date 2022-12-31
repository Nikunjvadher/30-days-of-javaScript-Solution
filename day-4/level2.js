
// Levle - 2
// 1 Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let marks = prompt("Enter Your marks : ");
if (marks > 80 || marks < 100) {
  console.log("A");
} else if (marks > 70 || marks < 89) {
  console.log("B");
} else if (marks > 60 || marks < 69) {
  console.log("C");
} else if (marks > 50 || marks < 59) {
  console.log("D");
} else {
  console.log("E");
}

// 2 Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let month = prompt("Enter month : ")
month.toLowerCase();
if(month == "September" || month == "October" || month == "November"){
    console.log('Autumn');
} else if(month == "December" || month == "January" || month == "February"){
    console.log('Winter');
} else  if(month == "March" || month == "April" || month == "May"){
    console.log('Spring');
} else if(month == "June" || month == "July" || month == "August"){
    console.log('Summer');
} else {
    console.log('Enter right month');
}

// 3 Check if a day is weekend day or a working day. Your script will take day as an input.
// What is the day today? saturDaY
// Saturday is a weekend.
let day = prompt('What is the day today?');
day.toLowerCase()
capitalizeFirstLetter(day)
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// // console.log(capitalizeFirstLetter(day));
function getDay(day) {
    return capitalizeFirstLetter(day.toLowerCase())
}
if (
  getDay(day) == "Monday" ||
  getDay(day) == "Tuesday" ||
  getDay(day) == "Wednesday" ||
  getDay(day) == "Thursday" ||
  getDay(day) == "Friday"
) {
    console.log(`${getDay(day)} is a working day.`)
} else if(
    getDay(day) == "Saturday" ||
    getDay(day) == "Sunday"
) {
    console.log(`${capitalizeFirstLetter(day.toLowerCase())} is a weekend.`)
} else {
    console.log('This is not a weekday')
}

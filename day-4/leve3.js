
// Write a program which tells the number of days in a month.
// Enter a month: January
//   January has 31 days.

const year = prompt("Enter a Year");
const month = prompt("Enter Month");
month.toLowerCase();
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function getDay(month) {
  return capitalizeFirstLetter(month.toLowerCase());
}

if (
  getDay(month) == "January" ||
  getDay(month) == "March" ||
  getDay(month) == "May" ||
  getDay(month) == "July" ||
  getDay(month) == "August" ||
  getDay(month) == "October" ||
  getDay(month) == "December"
)
  console.log(` ${getDay(month)} Number of days is 31`);
else if (
  getDay(month) == "February" &&
  (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
) {
  console.log(` ${getDay(month)} Number of days is 29`);
} else if (month == "February") {
  console.log(` ${getDay(month)} Number of days is 28`);
} else if (
  getDay(month) == "April" ||
  getDay(month) == "June" ||
  getDay(month) == "September" ||
  getDay(month) == "November"
) {
  console.log(` ${getDay(month)} Number of days is 30`);
} else {
  console.log(`Enter a Valid Month`);
}

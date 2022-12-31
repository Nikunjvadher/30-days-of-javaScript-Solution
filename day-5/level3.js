

// level 3
// 1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// i. Sort the array and find the min and max age
const sort = ages.sort()
console.log(sort);
const max = Math.max(...ages)
const min = Math.min(...ages)
console.log(min , max);

// ii. Find the median age(one middle item or two middle items divided by two)
const median = arr => {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
console.log(median([5, 6, 10 , 8, 50, 1, -5]));
console.log(median([1, 2, 3, 4, 5]));
console.log(median([19, 22, 19, 24, 20, 25, 26, 24, 25, 24]));

// iii. Find the average age(all items divided by number of items)
const sum = ages.reduce((a , b) => a + b)
const avg = (sum / ages.length)
console.log(avg);


//  todo
// iv. Find the range of the ages(max minus min)
// v. Compare the value of (min - average) and (max - average), use abs() method 
//      1 .Slice the first ten countries from the countries array


// 2 Find the middle country(ies) in the countries array
let countries = ['Argentina', 'Australia', 'Brazil', 'Canada', 'China', 'France', 'Germany', 'India', 'Indonesia', 'Japan'];
let middle_index = Math.floor(countries.length / 2)
console.log(countries[middle_index]);

// 3 Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let half = Math.ceil(countries.length / 2);
let firstHalf = countries.slice(0, half);
let secondHalf = countries.slice(half);
console.log(firstHalf);
console.log(secondHalf);


  


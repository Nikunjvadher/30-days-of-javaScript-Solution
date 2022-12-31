// 1 Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// first get both files in html and than print in this 
console.log(country , webTechs);

// 2 First remove all the punctuations and change the string to array and count the number of words in the array
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const newString = text.replace(/[.]/g,"")
const words = newString.split(' ')
console.log(words);
console.log(words.length);

// 3 In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
if(!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat')
}
// add Sugar at the end of you shopping cart if it has not been already added
if(!shoppingCart.includes('Honey')){
    shoppingCart.push('Honey')
}
// remove 'Honey' if you are allergic to honey
shoppingCart.pop()
// modify Tea to 'Green Tea'
shoppingCart[3] = "Green Tea"
console.log(shoppingCart)

// 4 In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if(country.includes('Ethiopia')){
    console.log('ETHIOPIA');
} else {
    country.push('Ethiopia')
}
console.log(country);

// lv-2-5 In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Sass')
}
console.log(webTechs);

// lv-2-6 Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

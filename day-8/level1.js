// 1 Create an empty object called dog
const dog = {}

// 2 Print the the dog object on the console
console.log(typeof dog);
console.log(dog);

// 3 Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'X';
dog.legs = 4
dog.color = 'black'
dog.bark = function(){
   return 'woof woof';
}
console.log(dog);

// 4 Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.bark());

// 5 Set new properties the dog object: breed, getDogInfo
dog.breed = 'BullDog';
dog.getDogInfo = function(){
   return` ${this.name}  ${this.legs} ${this.color} ${this.breed} `
}

console.log(dog.getDogInfo());

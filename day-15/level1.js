// =================== level 1 ============================
// 1 Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  getDetails() {
    const details = `${this.name} is ${this.age} years old. ${this.name} has ${this.legs} legs and His color is ${this.color}.`;
    return details;
  }
}

let animal = new Animal("Lion", 30, "red", 4);
console.log(animal.getDetails());

// 2 Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
  saySomething() {
    console.log("I am a Dog class from animal class.");
  }
}

let dog = new Dog("Pitbull", 5, "Black", 4);
dog.saySomething();
console.log(dog.getDetails());

class Cat extends Animal {
  constructor(name, age, color, legs, gender) {
    super(name, age, color, legs);
    this.gender = gender;
  }
  saySomething() {
    console.log("I am a Cat class from animal class.");
  }
  getDetails() {
    const details = `${this.name} is ${this.age} years old. ${this.name} has ${this.legs} legs and His color is ${this.color} \nhe is ${this.gender}.`;
    return details;
  }
}
let cat = new Cat("meow", 1, "Black", 4, "Female");
cat.saySomething();
console.log(cat.getDetails());
// console.log(cat);

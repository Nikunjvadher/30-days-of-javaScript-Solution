// =================== level 2 ============================
/*
// Override the method you create in Animal class
it is added in level 1 cat class
*/
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
  saySomething(){
    console.log('i am an Animal Class')
  }
}

class Cat extends Animal {
    // overriding animal class
  saySomething() {
    console.log("I am a Cat class from animal class.");
  }
}
let cat = new Cat("meow", 1, "Black", 4, "Female");
cat.saySomething();

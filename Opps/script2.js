// object literal

let atish = {
  firstName: "Atish",
  lastName: "Chikhale",
  rollNo: 20,
  age: 23,
  display: function () {
    console.log(this.firstName + this.lastName);
  },
};

let krishna = {
  firstName: "krishna",
  lastName: "Chikhale",
  rollNo: 15,
  age: 18,
  display: function () {
    console.log(this.firstName + this.lastName);
  },
};

// 2. function constructor

function Person(fn, ln, age, rollno) {
  this.firstName = fn;
  this.lastName = ln;
  this.age = age;
  this.rollno = rollno;
  //   this.display = function () {
  //     console.log(this.firstName + this.lastName);
  //   };
}

let Atish1 = new Person("Atish", "chikhale", "23", "35");
console.log(Atish1);
// Atish1.display();
let Krishna1 = new Person("Krishna", "chikhale", "18", "40");
console.log(Krishna1);
// Krishna1.display();

// Protypal inheritance
// Every thing in js is object
// Every object has __proto__ === Parent.prototype

console.log(Atish1.__proto__ === Person.prototype);

Person.prototype.display = function () {
  console.log(this.firstName + this.lastName);
};

Atish1.display();
Krishna1.display();

// Program 2

function Person1(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;
  //   this.display = function () {
  //     console.log(this.firstName, this.lastName);
  //   };
}
let Krishna2 = new Person1("Krishna", "chikhale");
let Atish2 = new Person1("Atish", "chikhale");

console.log(Krishna2);
console.log(Atish2);

// Atish2.display();
// Krishna2.display();

// Every object has one prototype

// Object.__proto__ === parent.prototype
console.log(Atish2.__proto__ === Person1.prototype);

Person1.prototype.display = function () {
  console.log(this.firstName, this.lastName);
};

Atish2.display();
Krishna2.display();

Person1.prototype.country = "India";
console.log(Atish2.country);
console.log(Krishna2.country);

// ================================================

let name = ["Atish", "Ram", "Sham"];
console.log(name.__proto__ === Array.prototype);

Array.prototype.greet = function () {
  console.log("hello");
};

name.pop();
console.log(name);
name.greet();

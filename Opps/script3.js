// Object literal

// let Atish = {
//   firstName: "Atish",
//   lastName: "Chikhale",
//   rollNo: 23,
//   display: function () {
//     console.log(this.firstName + this.lastName);
//   },
// };

// Atish.display();

// let Atish1 = {
//   firstName: "Atish1",
//   lastName: "Chikhale1",
//   rollNo: 23,
//   display: function () {
//     console.log(this.firstName + this.lastName);
//   },
// };

// Atish1.display();

// function constructor
function Person(fn, ln, rollNo, age) {
  this.firstName = fn;
  this.lastName = ln;
  this.rollNo = rollNo;
  this.age = age;
  //   this.display = function () {
  //     console.log(this.firstName + this.lastName);
  //   };
}

let PersonA = new Person("Atish", "Chikhale", 70, 23);
console.log(PersonA);
// PersonA.display();

let PersonB = new Person("Atish2", "Chikhale2", 50, 23);
console.log(PersonB);
// PersonB.display();

// Every object has __proto__ === parent.prototype

console.log(PersonA.__proto__ === Person.prototype);

console.log(PersonB.__proto__ === Person.prototype);

Person.prototype.display = function () {
  console.log(this.firstName + this.lastName);
};

Person.prototype.country = "India";

console.log(PersonA);
console.log(PersonB);
PersonA.display();
PersonB.display();

console.log(PersonA instanceof Person);
console.log(PersonB instanceof Person);

console.log(PersonA.country);
console.log(PersonB.country);

console.log(PersonA.hasOwnProperty("firstName")); //true
console.log(PersonA.hasOwnProperty("country")); //false

let names = ["Atish", "Govinda", "Amar"];
console.log(names instanceof Array); //true
console.log(names.__proto__ === Array.prototype); //true
console.log(names);
console.log(names.pop());
console.log(names);

// ES6 Class

class Person1 {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  display() {
    console.log(this.firstName, this.lastName);
  }
}

let PersonC = new Person1("Atish", "Chikhale", 23);
let PersonD = new Person1("Atish3", "Chikhale3", 23);

console.log(PersonC);
console.log(PersonD);

PersonC.display();
PersonD.display();

Person1.prototype.country = "india";
console.log(PersonC.country);
console.log(PersonB.country);

// Object.create()

let obj = {
  init: function (fn, ln, rollNo) {
    this.firstName = fn;
    this.lastName = ln;
    this.rollNo = rollNo;
  },
  display: function () {
    console.log(this.firstName, this.lastName);
  },
};

let Atish4 = Object.create(obj);
console.log(Atish4);

Atish4.init("Atish", "Chikhale", 23);
console.log(Atish4);
Atish4.display();

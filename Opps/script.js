// Object literal

// let Person = {
//   firstName: "Atish",
//   lastName: "Chikhale",
//   age: 23,
//   skills: ["Java", "Paython", "Javascript"],
// };
// console.log(Person);

// let Person1 = {
//   firstName: "Shubham",
//   lastName: "Chikhale",
//   age: 25,
//   skills: ["Java", "Cypress", "Paython", "Javascript"],
// };
// console.log(Person1);

// function constructor
// function Person2(fn, ln, ag, sks) {
//   this.firstName = fn;
//   this.lasttName = ln;
//   this.age = ag;
//   this.skills = sks;
// }
// let Atish = new Person2("Atish", "Chikhale", 23, [
//   "java",
//   "javascript",
//   "cypress",
// ]);
// console.log(Atish);

// let Govinda = new Person2("Govinda", "Lashkare", 25, [
//   "html",
//   "css",
//   "javascript",
// ]);
// console.log(Govinda);

// ES6 Class
class Person3 {
  constructor(fn, ln, age, skills) {
    this.firstName = fn;
    this.lastName = ln;
    this.age = age;
    this.skills = skills;
  }
}
let Atish = new Person3("Atish", "Chikhale", 23, [
  "java",
  "javascript",
  "Html",
  "css",
]);
console.log(Atish);

class Vehical {
  constructor(color, type) {
    this.color = color;
    this.type = type;
  }
}
let audi = new Vehical("Blue", "Sedane");
console.log(audi);

// Object.create()

let Person4 = Object.create({});

console.log(Person4);
Person4.firstName = "Atish";
Person4.lastName = "Chikhale";
Person4.age = 23;
Person4.skills = ["c#", "python", "html", "css"];
console.log(Person4);



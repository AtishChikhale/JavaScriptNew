// Array
// String
// Object
// Map
// Set
// Number
// Undefined
// null
// NaN
// Class

// let fruits = ["apple", "mango", "bananna", "graps"];
// 1. way to rtrive elelment using index
// console.log(fruits[1]);

// 2. store in seprate variavle
// let a = fruits[0];
// let b = fruits[1];
// let c = fruits[2];
// let d = fruits[3];

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// 3. using Destructring
// 1. array

// let fruits = ["Apple", "Grapes", "Banana", "Orange"];
// let [p1, p2, p3, p4] = fruits;
// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);

// let rollNum = [56, 49, 84, 54];
// let [r1, r2, r3, r4] = rollNum;
// console.log(r1);
// console.log(r2);
// console.log(r3);
// console.log(r4);

// 2. nested array destructring
// let numbers = [
//   [24, 64, 53],
//   [14, 53, 20],
//   [13, 16, 75],
// ];

// console.log(numbers[1][1]);
// console.log(numbers[2][1]);
// console.log(numbers[0][0]);
// console.log(numbers[0][1]);

// let [[a1, a2, a3], [b1, b2, b3], [c1, c2, c3]] = numbers;
// console.log(a1);
// console.log(c1);
// console.log(b2);

//===================================================================================

// Object
let Person = {
  firstName: "Atish",
  lastName: "chikhale",
  rollNum: 548,
};

// let { firstName, lastName, rollNum } = Person;
// console.log(firstName);
// console.log(lastName);
// console.log(rollNum);

let { lastName } = Person;
console.log(lastName);

// Aliasing the key
let { firstName: fn, lastName: ln, rollNum: r } = Person;
console.log(fn);

// nested Object

let human = {
  fullName: "Atish chikhale",
  skill: "Java",
  family: {
    father: "Tanaji",
    mother: "Mahananda",
  },
};

let {
  fullName,
  skill,
  family: { father, mother },
} = human;
console.log(fullName);
console.log(mother);

let {
  family: { father: f },
} = human;
console.log(f);

// Object inside array
let student = [
  {
    firstName: "Atish",
    rollNum: 13,
  },
  {
    firstName: "Kumar",
    rollNum: 45,
  },
  {
    firstName: "Ram",
    rollNum: 33,
  },
  {
    firstName: "Kiran",
    rollNum: 85,
  },
];

let [
  { firstName: f1, rollNum: r1 },
  { firstName: f2, rollNum: r2 },
  { firstName: f3, rollNum: r3 },
  { firstName: f4, rollNum: r4 },
] = student;
console.log(r4);
console.log(f3);

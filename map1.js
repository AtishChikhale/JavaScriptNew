// let a = ""; // string
// let b = ["mayuri", 23, true, undefined]; //array

// let c = {
//   modelNum: 123,
//   display: function () {
//     console.log("hello");
//   },
// };
// // console.log(c.display);// [Function: display]
// // c.display() // calling function ==> hello

// // console.log(c.modelNum); // 123

// // function add() {
// //   console.log(10 + 10);
// // }
// // add();

// // ===================================================
// let student = {
//   undefined: "Atish",
//   4657865: 584,
//   isDoingJob: true,
//   NaN: ["java", "js", "cy"],
//   family: {
//     father: "Tanaji",
//     mother: "mahananda",
//   },
// };

// // Object
// // String ==> key
// // value ==> any datatype

// for (let key in student) {
//   console.log(typeof key);
// }

// let a1 = "Atish";
// console.log(typeof a1);

//========================================================
// Map()

// let a2 = {};

// class student1 {
//   name1 = "Atish";
// }

// let name1 = new student1();
// // name1 ==> datatype student

// ====================================================

// curd
// create => add
// retrive
// update
// delete

let myMap = new Map();
console.log(myMap);

// 1. set(key,property)
myMap.set(1233, "rollNumber");
myMap.set("firstName", "ATish");
myMap.set(true, "doingJob");
myMap.set(undefined, 2000);
console.log(myMap);

// 2. get(key)
let y = myMap.get("firstName");
console.log(y);

console.log(myMap.get(true));

// 3. has(key)
let y2 = myMap.has("firstName");
console.log(y2); // true

let y3 = myMap.has("salary");
console.log(y3); // false

// 4. delete() ==> return boolean value
// let u1 = myMap.delete(1233);
// console.log(u1);

// let u2 = myMap.delete("family");
// console.log(u2); //false

// 5. clear()

// myMap.clear();
// console.log(myMap);

// 6. forEach()
myMap.forEach(function (value, key) {
  console.log(value, typeof key);
});

// Property => size
console.log(myMap.size);

// for of => values
for (let value of myMap.values()) {
  console.log(value);
}

// for of => keys
for (let key of myMap.keys()) {
  console.log(key);
}

// for of =>  key and value
for (let [key, value] of myMap.entries()) {
  console.log(key, value);
}

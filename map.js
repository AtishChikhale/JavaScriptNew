let a = ""; //string
let b = []; //array
let c = {}; //object

let info = {
  firstName: "Atish",
  lastName: "Chikhale",
  skill: ["js", "cy", "php", "sql"],
  family: {
    fatherName: "Tanaji",
    MotherName: "Mahananda",
  },
};

console.log(info.family);

for (let key in info) {
  console.log(key);
}

//=================================================
let a1 = {}; //empty object
a1.fn = "Atish"; //add
console.log(a1);

//================================================

// datatypes
// string, number, array, object, boolean, undefined, class, null, nun, map
// Map() => datatype

let info1 = new Map();
console.log(info1);

// 1. add/create ==> Set()
info1.set("firstName", "Krishna");
console.log(info1);

info1.set(1, "rollNum");
info1.set(undefined, "lastName");
info1.set(true, "isDoingJob");
console.log(info1);

// // 2. retrive => get()
// let y = info1.get(true);
// console.log(y);

// console.log(info1.get(undefined));

// 3. has()
// let y1 = info1.has("firstName");
// console.log(y1);

// console.log(info1.has("lastName"));

// 4. delete
// let y2 = info1.delete("firstName");
// console.log(y2);

// let y3 = info1.delete(true);
// console.log(y3);
// console.log(info1);

// 5. forEach()
// info1.forEach(function (value, key) {
//   console.log(value, key);
// });

// Map => set, get, has, delete, forEach

// store multiple values
let mapA = new Map();

mapA.set(1, "Audi");
mapA.set(true, "isDoingJob");
mapA.set("name", "Atish");
console.log(mapA);

let mapB = new Map([
  [1, "tester"],
  ["firstName", "Atish"],
  [true, "canDrive"],
  [2000, "salary"],
]);
console.log(mapB);
// 6. size => property
console.log(mapA.size);
console.log(mapB.size);


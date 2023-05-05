let names = ["Atish", "krishna", "govinda", "Atish"];
console.log(names);

// duplicate data is also store in array because we have to use set()
// set() is can't store duplicate data

let setA = new Set();
console.log(setA);

// /Object => Propert and Methods
console.log(setA.size);

// 1. add
setA.add("Atish");
setA.add("Rahul");
setA.add("Kumar");
setA.add("chndra");
setA.add("Atish"); // automaticaly remove

console.log(setA);
// console.log(setA[0]); //undefined
// console.log(setA.size);

// 2. clear()
// setA.clear();
// console.log(setA);

// 3. has()
let setB = new Set(["apple", "bannana", "papaya"]);
console.log(setB);

let q11 = setB.has("apple");
console.log(q11);

let q2 = setB.has("Apple");
console.log(q2); //false

// 4. forEach
setB.forEach(function (el) {
  console.log(el);
});

// 5. keys()
console.log(setB.keys());

// 6. values()
console.log(setB.values());

// 7. entries
console.log(setB.entries());

// 8. delete
let q22 = setB.delete("apple");
console.log(q22); // true

// length ==> return array of the length
// push() ==> add the element end of the array and return the new length of array
// unshift() ==> add the element first of the array and return the new length of array
// pop() ==>  remove the end element  of the array and return the removed element
// shift() ==>  remove the first element of the array and return removed element
// indexOf() ==> return index of the element if the element is not present in array return -1
// includes() ==> return boolean value

// 1. length
let a1 = [12, 55, 48, 66, 38];
console.log(a1.length);

//2.  .push()
let a2 = [12, 58, 98, 23, 48, 97];
let aa2 = a2.push(100);
console.log(aa2);
console.log(a2);

// 3 .unshift()
let a3 = ["Atish", "Rahul", "kumar"];
let aa3 = a3.unshift("Amar");
console.log(aa3);
console.log(a3);

// 4 .pop()
let a4 = [15, 54, 86, 32, 47, 62];
let aa4 = a4.pop();
console.log(aa4);
console.log(a4);

//5 .shift()
let a5 = [45, 49, 87, 40, 16, 85, 48];
let aa5 = a5.shift();
console.log(aa5);
console.log(a5);

//6 .indexOf()
let a6 = [146, 87, 48, 65, 12, 16, 87, 98, 74];
let aa6 = a6.indexOf(48);
console.log(aa6);
console.log(a6);

let aaa6 = a6.indexOf(100);
console.log(aaa6); // -1

//7 .includes()
let a7 = ["Ram", "Sham", "kumar", "Govinda"];
let aa7 = a7.includes("kumar");
console.log(aa7);

let aaa7 = a7.includes("Atish");
console.log(aaa7);

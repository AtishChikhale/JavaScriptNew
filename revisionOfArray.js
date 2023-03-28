// 1 length
let arr = [47, 97, 43, 12, 07, 85];
let lenArr = arr.length;
console.log(lenArr);

// 2 indexOf
//if element is exsist print the index
let indexOfArr = arr.indexOf(43);
console.log(indexOfArr);

//if element is not exsist print the -1
let indArr = arr.indexOf(10);
console.log(indArr);

// 4 push
let arr1 = [16, 78, 45];
let p = arr1.push(100);
console.log(p);
console.log(arr1);

// 5 unshift
let u = arr1.unshift(200);
console.log(u);
console.log(arr1);

// 6 pop
let p1 = arr1.pop();
console.log(p1);
console.log(arr1);

// 7 shift
let s = arr1.shift();
console.log(s);
console.log(arr1);

// 8 includes

let arr2 = ["Atish", "Krishna", "Rahul"];
let inc = arr2.includes("Atish");
console.log(inc);

let inc2 = arr2.includes("Ram");
console.log(inc2);

// 9 join
let j = arr2.join("-");
console.log(j);

// 10 find
let arr3 = [567, 95, 46, 54];

let f = arr3.find((el, index, arr) => {
  return el > 50;
});
console.log(f);

// 11 at
let arr4 = [46, 78, 45, 64];

let a = arr4.at(3);
console.log(a);

// 12 concat

let arr5 = [1, 2, 3, 4, 5, 6];
let arr6 = [7, 8, 9, 10];

let con = arr5.concat(arr6);
console.log(con);

// 13 fill

let b = [13, 55, 48];

let c = b.fill("Atish", 0, 1);
console.log(c);

// 14 splice

let a1 = [54, 89, 78, 24, 68];
let a2 = a1.splice(1, 3, 100);
console.log(a2);
console.log(a1);

// 15 slice

let a3 = [21, 86, 53, 20, 16, 89];
let a4 = a3.slice(2, 4);
console.log(a4);

// 16 findIndex
let a5 = [56, 87, 68, 52, 15];
let aa1 = a5.findIndex((el, index, arr) => {
  return el > 60;
});
console.log(aa1);

// 17 filter

let a6 = [46, 38, 79, 86, 54, 32, 12];
let aa6 = a6.filter((el, index, arr) => {
  return el < 20;
});
console.log(aa6);

// 18 foreach
let a7 = ["Atish", "Krishna", "Rahul"];
let a77 = a7.forEach((el, index, arr) => {
  console.log("Welcome" + " " + el);
});

// 19 some

let a8 = [46, 87, 82, 10, 47];

let a88 = a8.some((el, index, arr) => {
  return el > 80;
});
console.log(a88);

// 20 reduce

let a9 = a8.reduce((acc, el, index, arr) => {
  return acc + el;
}, 0);
console.log(a9);

// 21 every

let a10 = [68, 79, 86, 45, 32, 14];
let a11 = a10.every((el, index, arr) => {
  return el > 10;
});
console.log(a11);

// 22 reverse
let aaa1 = ["Atish", "Krishna", "Rahul"];
let aaaa1 = aaa1.reverse();
console.log(aaaa1);

// 23 map
let m = [58, 59, 89];
let m1 = m.map((el, index, arr) => {
  return el + 10;
});
console.log(m1);

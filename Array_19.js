// join()
// reverse()
// filter()
// map()
// reduce()

//8. join()
let arr = ["A", "t", "i", "s", "h"];
let arr1 = arr.join("");
console.log(arr1);

//9. reverse
let rev = arr.reverse();
console.log(rev);

//10. filter
let arr2 = [45, 64, 89, 78, 65, 79, 74, 56, 47];
let above20 = [];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 20) {
    above20.push(arr2[i]);
  }
}
console.log(above20);

let above50 = arr2.filter(function (el, index, array) {
  return el > 50;
});
console.log(above50);

//11. map()
let arr3 = [15, 64, 11, 56, 46];
let add2 = [];
for (let i = 0; i < arr3.length; i++) {
  add2.push(arr3[i] + 2);
}
console.log(add2);

let sub = arr3.map(function (el, index, arr) {
  return el - 5;
});
console.log(sub);

// 12 .reduce
let arr4 = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < arr4.length; i++) {
  sum = sum + arr4[i];
}
console.log(sum);

let additionOfElement = arr4.reduce(function (acc, el, index, arr) {
  return acc + el;
});
console.log(additionOfElement);

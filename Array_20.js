// // 13. forEach()

// let names = ["ram", "sham", "dinga", "pinga"];
// // welcome ram
// // welcome sham

// // for (let i = 0; i < names.length; i++) {
// //   console.log("Welcome " + names[i]);
// // }

// names.forEach((el) => {
//   console.log("Welcome " + el);
// });

// //14 find()

// let rollNo = [2, 14, 56, 56, 56, 20, 35, 90, 86];
// let rollNo1 = rollNo.find(function (el, index, arr) {
//   return el > 20;
// });
// console.log(rollNo1);

// // 15. findIndex()
// let rollNo2 = [2, 14, 56, 20, 35, 90, 86];
// let rollNo3 = rollNo2.findIndex(function (el, index, arr) {
//   return el > 20;
// });
// console.log(rollNo3);

// // 16 some
// let number = [2, 14, 56, 20, 35, 90, 86];
// let num = number.some(function (el, index, arr) {
//   return el > 6;
// });
// console.log(num);

// //17 every

// let number1 = [2, 14, 56, 20, 35, 90, 86];
// let num1 = number1.every(function (el, index, arr) {
//   return el > 1;
// });
// console.log(num1);

// ///18 slice
// // left => right
// //           -8  -7  -6  -5  -4  -3  -2  -1
// let marks = [21, 15, 79, 87, 54, 46, 58, 46];
// //           0   1   2   3   4   5   6   7

//arrayname.slice(startposition,endposition)

// let m = marks.slice(-6, -2);
// console.log(m); //[79, 87, 54, 46, ]

// let m1 = marks.slice(1, 5);
// console.log(m1); //[15, 79, 87, 54]

// let m2 = marks.slice(4);
// console.log(m2); //[54, 46, 58, 46]

// let m3 = marks.slice(5, 2);
// console.log(m3); //[]

// let m4 = marks.slice(1, -3);
// console.log(m4); //[15, 79, 87, 54]

// let m5 = marks.slice(-2, -7);
// console.log(m5); //[]

// let m6 = marks.slice(-1);
// console.log(m6); //[46]

// let m7 = marks.slice(1, -1);
// console.log(m7); //[15, 79, 87, 54, 46, 58]

//19. splice()
//            -8  -7  -6  -5  -4  -3  -2  -1
let marks1 = [47, 87, 85, 32, 24, 68, 79, 87];
//            0   1   2   3   4   5   6   7

//arrayName.splice(startposition,no of element removed,replce1,replace2)

// let q = marks1.splice(2, 4);
// console.log(q); //[85, 32, 24, 68]
// console.log(marks1);

// let ma = marks1.splice(3, 3, 100);
// console.log(ma);
// console.log(marks1);
    
// let q1 = marks1.splice(3);
// console.log(q1); //[32, 24, 68, 79, 87]
// console.log(marks1)

// let q3 = marks1.splice(-6);
// console.log(q3); //[ 85, 32, 24, 68, 79, 87]
// console.log(marks1);

//20. fill()
//           -8  -7  -6  -5  -4  -3  -2  -1
//let marks = [34, 12, 22, 55, 89, 90, 56, 44];
//           0   1   2   3   4   5   6    7

//// arrayname.fill(element which need to fill, startpostion, endposition)

//let w1 = marks.fill("Atish", 3, 7);
//console.log(w1); //[34, 12, 22, 'Atish', 'Atish', 'Atish', 'Atish', 44]

//let w2 = marks.fill(100, 4);
//console.log(w2);//[34, 12, 22, 55, 100, 100, 100, 100]

// let w3 = marks.fill(500);
// console.log(w3); //[500, 500, 500, 500, 500, 500, 500, 500]

//21. concat()

// let a = [1, 2, 3, 4];
// let b = [45, 58, 58];

// let c = a.concat(b); //[1, 2, 3, 4, 45, 58, 58]
// console.log(c);

//22. at()

// let marks = [34, 12, 22, 55, 89, 90, 56, 44];
// //           0   1   2   3   4   5   6    7

// let u1 = marks.at(3);
// console.log(u1);

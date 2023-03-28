//7 trim
let city = " Pune ";
console.log(city.length);
let a1 = city.trim();
console.log(a1);
console.log(a1.length);

// 8 trimStart
let a2 = city.trimStart();
console.log(a2);
console.log(a2.length);

// 9 trimEnd
let a3 = city.trimEnd();
console.log(a3);
console.log(a3.length);

// 10 slice
let student = "Vaibhav";
//-7   -6  -5  -4  -3  -2  -1
// V    a   i   b   h   a   v
// 0    1   2   3   4   5   6

//left ==> right

// string.slice(startPosition, endPosition)
//endPosition is optional

let a4 = student.slice(5);
console.log(a4); //av

let a5 = student.slice(1, 3);
console.log(a5); //ai

let a6 = student.slice(-5, 4);
console.log(a6); //ib

let a7 = student.slice(-2, -5);
console.log(a7); //blank

let a8 = student.slice(5, 1);
console.log(a8); //blank

let a9 = student.slice(-7, -2);
console.log(a9); //Vaibh

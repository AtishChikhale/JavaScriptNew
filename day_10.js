// condition statement

// if => only for true single output
// syntax
// if(condition){
//     statement;
// }

// if (true) {
//   console.log("hello");
// }

// if (false) { //this will not print anything
//   console.log("bye");
// }

// let marks = 90;
// if (marks > 80) {
//   console.log("best student");
// }
// if (marks > 60) {
//   console.log("better student");
// }
// if (marks > 40) {
//   console.log("good student");
// }

// ===================================================================

// if-else => for 1 input two output. if firts condition will get false it will check next condition

// syntax
// if (codition) {
//   statement1
// } else {
//   statement2
// }

// if (false) {
//   console.log("hello");
// } else {
//   console.log("bye");
// }

// ===============================================================================

// if-else-if ===> one input mutiple output. every statement will check

// let marks = 45;
// if (marks > 80) {
//   console.log("best student");
// } else if (marks > 60) {
//   console.log("better student");
// } else if (marks > 40) {
//   console.log("good student");
// } else {
//   console.log("Keep learning");
// }

// =============================================================
// truthely values => 1, 'a'(character), "String", {}, [], " "(space), true

// if (1) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if ("a") {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if ("Atish") {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if ({}) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if ([]) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if (" ") {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if (true) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// ================================================================================================
// falsey values => 0, null, undefined, NaN, false

// if (0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if (null) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if (undefined) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if (NaN) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if (false) {
//   console.log("true");
// } else {
//   console.log("false");
// }

//=======================================================================================
// trnenary operator => single condition

// syntax
// (condition) ? true(satement) : false(statement)

let a = 100;
let b = 50;

// if (a > b) {
//   console.log("a is greter");
// } else {
//   console.log("b is greter");
// }

// a > b ? console.log("a is greter") : console.log("b is greter");

// let result = a > b ? "a is greter" : "b is greter";
// console.log(result);

// ===================================================================

// switch case => multiple output

// 1 - 7 => 1 - monday, 2 - tuesday

// without using break keyword
// let day = 5;
// switch (day) {
//   case 1:
//     console.log("Monday");
//   case 2:
//     console.log("Tuesday");
//   case 3:
//     console.log("Wednesday");
//   case 4:
//     console.log("Thursday");
//   case 5:
//     console.log("Friday");
//   case 6:
//     console.log("Satuerday");
//   case 7:
//     console.log("Sunday");
// }

let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("INVALID DAY");
}

// string concatination

// string + string => string
// number + string => string
// string + number => string
// number + number => string

// let a = 10;
// let b = "Atish";
// let c = 20;

// console.log(a + c + b); //30Atish
// console.log(a + b + c); //10Atish20
// console.log(b + a + c); //Atish1020

// let firstName = "Atish";
// let lastName = "Chikhale";

// console.log("My firstName is" + firstName + "and My lastName is" + lastName);
// //My firstName isAtishand My lastName isChikhale

// console.log(
//   "My firstName is" +
//     " " +
//     firstName +
//     " " +
//     "and My lastName is" +
//     " " +
//     lastName
// );
//My firstName is Atish and My lastName is Chikhale

//STRING INTERPOLATION

// console.log(`My firstName is ${firstName} and My lastName is ${lastName}`);
// //My firstName is Atish and My lastName is Chikhale

// let p1 = `${5 + 5}`;
// console.log(p1);
// console.log(typeof p1);

//=========================================================================================

// let fn = "Atish";
// for (let i = 0; i < fn.length; i++) {
//   console.log(fn[i]);
// }

//==========================================================================================
// for (let i = fn.length - 1; i >= 0; i--) {
//   console.log(fn[i]);
// }

//========================================================================================

//reverse

//Atish
//hsitA
// let rev = "";
// for (let i = 0; i < fn.length; i++) {
//   rev = fn[i] + rev;
// }
// console.log(rev);

//=========================================================================================

// let forw = "";

// for (let i = 0; i < fn.length; i++) {
//   forw = forw + fn[i];
// }
// console.log(forw);

//=========================================================================================

// let city = "Pune";
// let rev1 = "";

// for (let i = 0; i < city.length; i++) {
//   rev1 = city[i] + rev1;
// }
// console.log(rev1);

// let y1 = city.split("").reverse().join("");
// console.log(y1);

//========================================================================================

let firstName1 = "MayuriRoa"; //aeiou
let vowels = "aeiou";
let count = 0;

for (let i = 0; i < firstName1.length; i++) {
  if (vowels.includes(firstName1[i])) {
    count = count + 1;
  }
}
console.log(count);
              
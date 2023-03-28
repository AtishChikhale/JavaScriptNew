let city = "  Nagpur  ";
console.log(city.length);
let q = city.trim();
console.log(q);
console.log(q.length);

//11 split()

let firstName = "Atish";
let q1 = firstName.split("t");
console.log(q1); //['A','ish']

let q2 = firstName.split(" ");
console.log(q2); //['Atish]

let q3 = firstName.split("");
console.log(q3); //["A", "t", "i", "s", "h"];

let q4 = "200$00";
let q5 = q4.split("$");
console.log(q5); //['200','00']

//12 charAt()

let q6 = "Pune";
let q7 = q6.charAt(2);
console.log(q7); //n

let q8 = q6.charAt(7);
console.log(q8); //blank string

//13 charCodeAt()
// return ==> ASCII value

let u = q6.charCodeAt(2);
console.log(u);

let u1 = q6.charCodeAt(0);
console.log(u1);

let u2 = q6.charCodeAt(10);
console.log(u2); //NaN

//=================================================================
//MEHTOD CHAINING

let student = ["Atish", "Govinda"];
let u3 = student.join("-").toUpperCase().split("-").indexOf("ATISH");
console.log(u3);
//Atish-Govinda
//ATISH-GOVINDA
//['Atish','Govinda']
//0

//=========================================================================

//STRING INTERPOLATION

let firstName1 = "Atish";
console.log(firstName1);
let lastName1 = "Chikhale";
console.log(lastName1);

console.log("My fisrtName is" + firstName1 + "and my lastName is" + lastName1);
console.log(
  "My fisrtName is" +
    " " +
    firstName1 +
    " " +
    "and my lastName is" +
    " " +
    lastName1
);

console.log(`My firstName is ${firstName1} and my lastName is ${lastName1}`);

let a = 10;
console.log(a);
console.log(typeof a); //number

let n = "Atish";
console.log(n);
console.log(typeof n); //string

let b = true;
console.log(b);
console.log(typeof b); //boolean

// logical operators

// And && (multiplication)

// true && true => true
// true && false => false
// false && true => false
// false && false => false

console.log(7 == 7 && 8 !== "8"); //true
console.log(7 == "7" && 8 != "8"); //false
console.log(45 === "45" && 34 <= 100); //false
console.log(-3 > 0 && 12 >= 35); //false

// OR || (addition)

// true || true => true
// true || false => true
// false || true => true
// false || false => false

console.log(7 == 7 || 8 !== "8"); //true
console.log(7 == "7" || 8 != "8"); //true
console.log(45 === "45" || 34 <= 100); //true
console.log(-3 > 0 || 12 >= 35); //false

// NOT !
// true => false
// false => true

console.log(!(10 == "10")); //false
console.log(!(12 === "12")); //true

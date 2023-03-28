// using double quots
let firstName = "Atish";
console.log(firstName);
console.log(typeof firstName);

//using single quots
let lastName = "Chikhale";
console.log(lastName);
console.log(typeof lastName);

//using back tick
let city = `Pune`;
console.log(city);
console.log(typeof city);

//single char is also string
let a1 = "a";
console.log(a1);
console.log(typeof a1);

//value store by index wise
// M    a   h   a   r   a   s   t   r   a
// 0    1   2   3   4   5   6   7   8   9
let state = "Maharastra";
console.log(state[0]);
console.log(state[7]);

// length
console.log(state.length);
//last index of string
console.log(state[9]); //a
console.log(state.length - 1); //a

// 1 toUpperCase()
let a2 = state.toUpperCase();
console.log(a2); //MAHARASTRA

// 2 toLowerCase()
let a3 = state.toLowerCase();
console.log(a3); //maharastra

// 3 indexOf()
let a4 = state.indexOf("m");
console.log(a4); //-1

let a5 = state.indexOf("M");
console.log(a5); //0

// 4 include()
let a6 = state.includes("R");
console.log(a6); //false

let a7 = state.includes("r");
console.log(a7); //true

// 5 startWith()
let a8 = state.startsWith("m");
console.log(a8); //false

let a9 = state.startsWith("Mah");
console.log(a9); //true

// 6 endsWith()
let a10 = state.endsWith("a");
console.log(a10); //true

let a11 = state.endsWith("A");
console.log(a11); //false

let a12 = state.endsWith("tra");
console.log(a12);//true


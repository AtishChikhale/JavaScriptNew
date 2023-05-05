// // Polymorphism

// // 1. overriding => different class, same method name, same parameter(signature)

// class Shape {
//   draw() {
//     console.log("I am generic shape");
//   }
// }

// class Square extends Shape {
//   draw() {
//     console.log("I am square");
//   }
// }

// class Circle extends Shape {
//   draw() {
//     console.log("I am circle");
//   }
// }

// let s2 = new Square();
// s2.draw();

// ===============================================

// class Myntra {
//   image() {
//     console.log("I am image of different items");
//   }
// }

// class Shandle extends Myntra {
//   image() {
//     super.image();
//     console.log("I am image of shandle");
//   }
// }

// class Shoe extends Myntra {
//   image() {
//     super.image();
//     console.log("I am image of shoe");
//   }
// }

// let m1 = new Myntra();
// m1.image();

// let m2 = new Shoe();
// m2.image();

// let m3 = new Shandle();
// m3.image();

// // ===============================
// //  2. Overloading => same class, same method name, diff parameter

// class Calculator {
//   addition(a, b) {
//     console.log(a + b);
//   }
//   addition(a, b, c) {
//     console.log(a + b + c);
//   }
//   addition(a, b, c, d) {
//     console.log(a + b + c + d);
//   }
// }

// let sum = new Calculator();
// //sum.addition(1, 2, 5, 6);//14

// sum.addition(2, 5); //NaN

//overloading is not work in javascript

class Calculator {
  addition(a, b, c, d) {
    if (a != undefined && b != undefined && c != undefined && d != undefined) {
      console.log(a + b + c + d);
    } else if (a != undefined && b != undefined && c != undefined) {
      console.log(a + b + c);
    } else if (a != undefined && b != undefined) {
      console.log(a + b);
    }
  }
}

let sum = new Calculator();
sum.addition(2, 3);

sum.addition(2, 3, 5);

sum.addition(2, 3, 5, 4);

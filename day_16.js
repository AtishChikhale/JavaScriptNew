// 1 - 5 random number

// console.log(Math.floor(Math.random() * 5) + 1);//0.0 - 0.99 ==> 0.0 - 0.95 ==> 0 - 4 ==> 1 - 5

// guessing number

// system random number ==> Math.floor(Math.random()*5)+1 ==> 4
//user input number ==> 4
//system random no == user input number ==> guess correct

// Program 1

// let randomNumber = Math.floor(Math.random() * 5) + 1;
// console.log(randomNumber);

// let userInput = prompt("Please Enter any number between 1 - 5");

// if (randomNumber == userInput) {
//   console.log("Your guess is correct!!!");
// } else {
//   console.log("Your guess is incorrect!!!!");
// }

// Program 2

// let randomNumber = Math.floor(Math.random() * 5) + 1;
// console.log(randomNumber);

// let userInput =  prompt("Please enter the number 1 - 5");

// randomNumber == userInput
//   ? console.log("Your guess is correct")
//   : console.log("Your guess is incorrect");

// program 3

// let randomNumber = Math.floor(Math.random() * 5) + 1;
// console.log(randomNumber);
// console.log(typeof randomNumber);

// let userInput = prompt("please enter the number 1 - 5");
// console.log(typeof userInput);

// if (randomNumber == userInput) {
//   console.log("Your guessing is correct......");
// } else {
//   console.log("Your guessing is incorrect");
// }

//program 4
// let randomNumber = Math.floor(Math.random() * 5) + 1;
// console.log(randomNumber);
// console.log(typeof randomNumber);

// let userInput = prompt("please enter the number 1 - 5");
// console.log(typeof userInput);

// if (randomNumber == userInput) {
//   console.log("Your guessing is correct......");
// } else {
//   console.log("Your guessing is incorrect");
// }

//console.log("======================================================");

// let randomNumber = Math.floor(Math.random() * 5) + 1;
// console.log(randomNumber);
// for (let i = 1; i <= 5; i++) {
//   let userInput = Number(prompt("enter the your number 1 - 5"));
//   if (randomNumber === userInput) {
//     console.log("Your guess is correct");
//   } else {
//     console.log("Your guess is incorrect");
//   }
// }

// using break statement

// let randomNumber = Math.floor(Math.random() * 5) + 1;
// console.log(randomNumber);
// for (let i = 1; i <= 5; i++) {
//   let userInput = Number(prompt("enter the your number 1 - 5"));
//   if (randomNumber === userInput) {
//     console.log("Your guess is correct");
//     break;
//   } else {
//     console.log("Your guess is incorrect");
//   }
// }

// ==========================================================

// for loop (duretion is known)

// when duration is unknown (while loop)

// let randomNumber = Math.floor(Math.random() * 5) + 1;
// console.log(randomNumber);

// let userInput;

// while (randomNumber != userInput) {
//   userInput = Number(prompt("enter your number 1 - 5"));

//   if (randomNumber == userInput) {
//     console.log("Your guess is correct");
//   } else {
//     console.log("Your guess is incorrect");
//   }
// }

//program
// let randomNumber = Math.floor(Math.random() * 5) + 1;
// console.log(randomNumber);
// let userInput = Number(prompt("enter your number 1 - 5"));

// while (userInput != randomNumber) {
//   userInput = Number(prompt("enter your number 1-5"));
//   if (randomNumber == userInput) {
//     console.log("your guess is correct");
//     break
//   } else {
//     console.log("your guess is incorrect");
//   }
// }

//=========================================================================
//do-while loop

let randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber);
//let userInput = Number(prompt("enter your number 1 - 5"));
let userInput
do {
  userInput = Number(prompt("enter your number 1 - 5"));
  if (randomNumber == userInput) {
    console.log("your guess is correct");
  } else {
    console.log("your guess is incorrect");
  }
} while (randomNumber != userInput);

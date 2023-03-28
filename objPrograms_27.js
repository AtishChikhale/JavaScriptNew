let student = [
  {
    firtstName: "Atish",
    lastName: "Chikhale",
    age: 23,
    skill: ["js", "java", "cy"],
    city: "Pune",
  },
  {
    firtstName: "Govina",
    lastName: "Lashkare",
    age: 30,
    skill: ["cy", "java", "js"],
    city: "Hadapsar",
  },
  {
    firtstName: "Akash",
    lastName: "Shengale",
    age: 23,
    skill: ["html", "css", "php"],
    city: "Kolhapur",
  },
  {
    firtstName: "Laxman",
    lastName: "Battulwar",
    age: 40,
    skill: ["photographer", "java", "javascript"],
    city: "Solapur",
  },
  {
    firtstName: "Rahul",
    lastName: "roy",
    age: 30,
    skill: ["js", "java", "cy"],
    city: "Wagholi",
  },
];

//find length
//console.log(student.length);

// retrive 1st ele
//console.log(student[1]);

//program first
//retrive the fullname of all student

// for (let i = 0; i < student.length; i++) {
//   console.log(`${student[i].firtstName} ${student[i].lastName}`);
// }

//===============================OR======================================//

//using forEach

// student.forEach((el) => {
//   console.log(`${el.firtstName} ${el.lastName}`);
// });

//program 2
// find the  fullname of student whoes age is greter than 25

// for (let i = 0; i < student.length; i++) {
//   if (student[i].age > 25) {
//     console.log(`${student[i].firtstName} ${student[i].lastName}`);
//   }
// }

//===================or filter=================================================//

// let greterThan25 = student.filter((el) => {
//   return el.age > 25;
// });
// console.log(greterThan25);

// greterThan25.forEach((ele) => {
//   console.log(`${ele.firtstName} ${ele.lastName}`);
// });

// let greterThan25 = student
//   .filter((el) => {
//     return el.age > 25;
//   })
//   .forEach((el) => {
//     console.log(`${el.firtstName} ${el.lastName}`);
//   });

//Program 3
//sum of age

// let sumOfAge = 0;
// for (let i = 0; i < student.length; i++) {
//   sumOfAge = sumOfAge + student[i].age;
// }
// console.log(sumOfAge);

// let sumOfAge = student.reduce((acc, el) => {
//   return acc + el.age;
// }, 0);
// console.log(sumOfAge);

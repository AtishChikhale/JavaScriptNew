// let student = {
//   fullName: "Shami jha",
//   age: 40,
//   skill: ["java", "Paython", "selenium"],
//   isDoingJob: true,
// };

//add
//using dot notation
// student.city = "Pune";
// console.log(student);

//bracate notation
// student["city"] = "Mumbai";
// console.log(student);

// update
// using dot notation
// student.age = 45;
// console.log(student);

// using bracate notation
// student["age"] = 30;
// console.log(student);

// retrive
// using dot notation
// console.log(student.fullName);

//using bracate notation
// console.log(student["age"]);

// delete
//using dot notation
// delete student.isDoingJob;
// console.log(student);

// using bracate notation
// delete student["age"];
// console.log(student);

//================================================================================

//for in loops

let student = {
  fullName: "Atish Chikhale",
  age: 23,
  skill: ["java", "javascript", "cypress"],
  isDoingJob: true,
};

// for keys

// for (let keys in student) {
//   console.log(keys);
// }

//=====================================

//first way
//for value
// student.fullName
// ObjectName.key => value
// ObjectName[key] => value

// loop dose not support dot otation

//for values

// for (let key in student) {
//   console.log(student[key]);
// }

//==============================================

// for keys and values

// for (let k in student) {
//   console.log(k, student[k]);
// }

//==================================================

// 2nd way

// key print

// for (let key of Object.keys(student)) {
//   console.log(key);
// }

//value print

// for (let value of Object.values(student)) {
//   console.log(value);
// }

// keys and values

// for (let [key, value] of Object.entries(student)) {
//   console.log(key, value);
// }

//================================================================

// let employee = {
//   firstName: "Atish",
//   lastName: "Chikhale",
//   skills: ["js", "java", "py", "cy"],
//   salary: 25000,
//   family: {
//     fatherName: "Tanaji",
//     MotherName: "Mahananda",
//     sibling: ["Krishna", "Balaji", "Pooja"],
//     newFamily: {
//       fn: "Govinda",
//       ln: "lashkare",
//     },
//   },
// };

//retriv(fetch/print)
// console.log(employee.family.newFamily.fn);

//===================================================

// add new Element in skill and print length

// employee.skills.push("HTML");
// console.log(employee);
// console.log(employee.skills.length);

//===================================================

// employee.family.sibling.unshift("Kalidas");
// console.log(employee);

//========================================================

// for (let key in employee) {
//   console.log(key, employee[key]);
// }

//======================================================

//print pooja

// console.log(employee.family.sibling[2]);
// console.log(employee["family"]["sibling"][0]);

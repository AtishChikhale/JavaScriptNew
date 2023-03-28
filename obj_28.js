let emp = {
  firstName: "Atish",
  lastName: "Chikhale",
  empId: 2156,
};

// retrive
console.log(emp.firstName);
console.log(emp["firstName"]);

// add
emp.city = "Pune";
emp["city"] = "Nashik";
console.log(emp);

// update
emp.firstName = "Shubham";
emp["lastName"] = "Bukatar";
console.log(emp);

// delete
delete emp.city;
console.log(emp);

// for in loop
for (let key in emp) {
  console.log(key);
}

for (let key in emp) {
  console.log(emp[key]);
}

for (let key in emp) {
  console.log(key, emp[key]);
}

// ====================================================================================

// for of loop

// console.log(Object.keys(emp));
// console.log(Object.values(emp));
// console.log(Object.entries(emp));

for (let key of Object.keys(emp)) {
  console.log(key);
}

for (let key of Object.values(emp)) {
  console.log(key);
}

for (let [key, value] of Object.entries(emp)) {
  console.log(key, value);
}

// ===========================================================================

// let student = [
//   {
//     fn: "Atish",
//   },
//   {
//     fn: "Krishna",
//   },
// ];

// console.log(student[1].fn);

// =========================================================================

let student = [
  {
    firstName: "Atish",
    lastName: "Chikhale",
    age: 25,
    city: "Pune",
    skill: ["Js", "Py", "Cy", "Css"],
    marks: 45,
  },
  {
    firstName: "Krishna",
    lastName: "Raut",
    age: 12,
    city: "Jalgoan",
    skill: ["SQL", "selenium"],
    marks: 89,
  },
  {
    firstName: "ram",
    lastName: "Kulkarni",
    age: 32,
    city: "Sangamner",
    skill: ["java", "cypress", "Manual"],
    marks: 67,
  },
  {
    firstName: "Sam",
    lastName: "rao",
    age: 40,
    city: "Pune",
    skill: ["C#", "HTML", "Css"],
    marks: 12,
  },
  {
    firstName: "Govinda",
    lastName: "Lashkare",
    age: 56,
    city: "Nagpur",
    skill: ["JavaScript", "CSS", "python", "Cypress", "react"],
    marks: 50,
  },
];

// Atish:4

student.forEach((el) => {
  console.log(el.firstName + " " + el.skill.length);
});

student.forEach((el1) => {
  if (el1.firstName == "Sam") {
    console.log(el1.firstName, el1.skill.length);
  }
});

//=======================================================================

// Jmeter skill ad

student.forEach((el) => {
  el.skill.push("Jmeter");
});
console.log(student);

// =======================================================================

// Marks < 50 ==> 10 add
// Marks > 50 ==> sum

// step 1

student.forEach((el) => {
  if (el.marks < 50) {
    el.marks = el.marks + 10;
  }
});
console.log(student);

// step 2

let grester50 = [];
student.forEach((el) => {
  if (el.marks > 50) {
    grester50.push(el.marks);
  }
});
console.log(grester50);

// step 3

let sum = grester50.reduce((acc, el) => {
  return acc + el;
}, 0);
console.log(sum);

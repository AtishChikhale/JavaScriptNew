let student = "Atish";
console.log(student);

let student1 = ["Atish", "Krishna", "Rahul"];
console.log(student1);

//add
student1.push("Kumar");
console.log(student1);

student1.unshift("Govind");
console.log(student1);

// retrive
console.log(student1[0]);

console.log(student1[student1.length - 1]);

console.log(student1.at(2));

// Update

let u1 = (student1[0] = "Vaibhav");
console.log(student1);

let u2 = student1.fill("Ram", 0, 1);
console.log(u2);

//delete

let d1 = student1.pop();
console.log(d1);

let d2 = student1.shift();
console.log(d2);

//======================================================================================

//object

let info = {
  firstName: "Atish",
  lastName: "Chikhale",
  age: 23,
  rollNo: 56,
  skill: "JavaScript",
};
console.log(info);

//CURD

//create => add

//dot notation
//bracate notation

info.skill = "javaScript";
console.log(info);

info["language"] = "Marathi";
console.log(info);

// retrive
// objectname.key => value
console.log(info.lastName);

console.log(info["age"]);

// update
info.lastName = "kumari";
console.log(info);

info.firstName = "sharmila";
console.log(info);

//delete
delete info.firstName;
console.log(info);

delete info["lastName"];
console.log(info);

// duplicate are not allowed
let car = {
  color: "blue",
  wheel: "4",
  model: "audi",
  model: "suzuki",
};

console.log(car);

car.color = "red";
console.log(car);

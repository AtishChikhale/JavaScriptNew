let Atish = {
  firstName: "Atish",
  lastName: "Chikhale",
  age: 23,
  salary: 20000,
  skill: ["java", "js"],
  empId: 1211,
  info: function () {
    console.log(`${this.firstName}`);
  },
};

// object has property and methods
// methods mens functions

// curd

// create
Atish.city = "Pune";

// retrive
console.log(Atish.salary);

// console.log(Atish.info); // function body => print the function
Atish.info();

// update

Atish.age = 25;

// delete
delete Atish.empId;

console.log(Atish);

//===============================

let emp1 = {
  fullName: "firstName lastName",
  age: 25,
  salary: 25000,
  skill: ["skill1", "skill2"],
  empId: 2548,
  info: function () {
    console.log(`${this.fullName}`);
  },
};

let emp2 = {
  fullName: "firstName1 lastName1",
  age: 30,
  salary: 35000,
  skill: ["skill3", "skill4"],
  empId: 15780,
  info: function () {
    console.log(`${this.fullName}`);
  },
};

//  class ==> blue print => user defined datatype

// datatype

// string, array, undefined, number, null, Nan, Map, set, class

// ES6 => clas

class Employee {
  firstName = "ATish";
  age = 25;
  salary = 30000;
  empID = 5555;
  info() {
    console.log(`${this.firstName}`);
  }
}

let name4 = new Employee();
console.log(name4);

let name5 = new Employee();
console.log(name5);

class Employee1 {
  constructor(firstName, age, salary, empID) {
    this.firstName = firstName;
    this.age = age;
    this.salary = salary;
    this.empID = empID;
  }
  display() {
    console.log(this.firstName);
  }
}

let Atish1 = new Employee1("Atish", 23, "30000", 256);
console.log(Atish1);

let Krishna = new Employee1("Krishna", 18, "15000", 258794);
console.log(Krishna);

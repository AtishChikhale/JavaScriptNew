// Object literal

let Atish = {
  firstName: "Atish",
  lastName: "Chikhale",
  age: 23,
  skill: "JavaScript",
  display: function () {
    console.log(this.firstName);
  },
};
console.log(Atish.age);
Atish.display();

let Krishna = {
  firstName: "Krishna",
  lastName: "Chikhale",
  age: 18,
  display: function () {
    console.log(this.firstName);
  },
};
console.log(Krishna.age);
Krishna.display();

let Rahul = {
  firstName: "Rahul",
  lastName: "Roy",
  age: 25,
  display: function () {
    console.log(this.firstName);
  },
};

Rahul.display();

// 100 student ===> 100 Object

// Javascript ===> class ===> ES6

// string, array, number ==> predefined

// class ===> user defined datatype

class Student {
  constructor(firstName, lastName, age, skill) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skill = skill;
  }
  display() {
    console.log(this.firstName + " " + this.lastName);
  }
}

let Atish1 = new Student("Atish", "Chikhale", 23, "Java");
console.log(Atish1);

let Atish2 = new Student("Krishna", "Chikhale", 18, "javascript");
console.log(Atish2);


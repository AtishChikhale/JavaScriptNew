// class Student {
//   firstName = "Atish";
//   lastName = "Chikhale";
//   displayFullName() {
//     console.log(this.firstName, this.lastName);
//   }
// }

// let Atish = new Student();
// console.log(Atish.firstName);
// console.log(Atish.lastName);
// Atish.displayFullName();

// class Teacher extends Student {
//   salary = 45000;
// }

// let Atish = new Teacher();
// console.log(Atish.firstName);
// console.log(Atish.lastName);
// console.log(Atish.salary);
// Atish.displayFullName();

// Program 2

class Student {
  constructor(fn, ln) {
    this.firstName = fn;
    this.lastName = ln;
  }
  display() {
    console.log(this.firstName, this.lastName);
  }
}

class Teacher extends Student {
  constructor(fn, ln, sl) {
    super(fn, ln);
    this.salary = sl;
  }
  displaySalary() {
    console.log(this.salary);
  }
}

let Atish = new Teacher("Atish", "chikhale", 10000);
console.log(Atish.firstName);
console.log(Atish.lastName);
console.log(Atish.salary);
Atish.display();
Atish.displaySalary();

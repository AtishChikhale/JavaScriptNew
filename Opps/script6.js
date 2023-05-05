// inheritance
class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  displayName() {
    console.log(this.firstName, this.lastName);
  }
}

class Teacher extends Student {
  constructor(firstName, lastName, age, salary) {
    super(firstName, lastName, age);
    this.salary = salary;
  }
  displaySalary() {
    console.log(this.salary);
  }
}
let a1 = new Student("Krishna", "Chikhale", 18);
console.log(a1);
a1.displayName();
// a2.displaySalary();

let a2 = new Teacher("Atish", "Chikhale", 23, 84000);
console.log(a2);
a2.displayName();
a2.displaySalary();

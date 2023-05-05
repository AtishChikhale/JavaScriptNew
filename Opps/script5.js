// function constructor
// es6 class
// Object.create

// Es6 class
// 1. without constructor
// 2. with constructor
// 3. by using function
// 4. set and get keyword

// 1 without constructoe
class Person {
  fullName = "Atish Chikhale";
  displayName() {
    console.log(this.fullName);
  }
}

let a1 = new Person();
console.log(a1);
a1.displayName();

let a2 = new Person();
console.log(a2);
a2.displayName();

class PersonA {
  fullName = undefined;
  displayName() {
    console.log(this.fullName);
  }
}

let a3 = new PersonA();
console.log(a3);
a3.fullName = "Krishna Chikhale";
console.log(a3);
a3.displayName();

// ===================================

// 2. with constructor
class PersonB {
  constructor(fullName, age) {
    this.fullName = fullName;
    this.age = age;
  }
  displayName() {
    console.log(this.fullName);
  }
}

let a4 = new PersonB("Atish Chihale", 23);
console.log(a4);

// =======================================

// 3. by using function

class PersonC {
  fullName(fn) {
    this.fullName = fn;
  }
  displayName() {
    return this.fullName;
  }
}

let a5 = new PersonC();
console.log(a5);

a5.fullName("Krishna Chikhale");
console.log(a5);

console.log(a5.displayName());

// =======================================

// 4. set and get

class PersonD {
  set fullName1(fullNm) {
    this.fullName = fullNm;
  }
  get displayName() {
    return this.fullName;
  }
}

let a6 = new PersonD();
console.log(a6);

a6.fullName1 = "Atish Chikhale";
console.log(a6);
console.log(a6.displayName);

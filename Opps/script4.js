// function constructor
// Es6 class
// Object.create

// Es6 class
// 1. without constructor
// 2. with constructor
// 3. by using function
// 4. set and get keyword

// 1. without constructor
class Person {
  fullName = "Atish Chikhale";
  displayName() {
    console.log(this.fullName);
  }
}

let Atish = new Person();
console.log(Atish);
Atish.displayName();

let Krishna = new Person();
console.log(Krishna);
Krishna.displayName();

let Rahul = new Person();
console.log(Rahul);
Rahul.displayName();

class Person1 {
  fullName = undefined;
  displayName() {
    console.log(this.fullName);
  }
}

let Atish1 = new Person1();
console.log(Atish1);
Atish1.displayName();

Atish1.fullName = "Atish1 Chikhale";
console.log(Atish1);
Atish1.displayName();

let Krishna1 = new Person1();
Krishna1.fullName = "Krishna Chikhale";
console.log(Krishna1);
Krishna1.displayName();

//=======================================================================

// 2. with constructor

class Person2 {
  constructor(fullName, age) {
    this.fullName = fullName;
    this.age = age;
  }
  displayName() {
    console.log(this.fullName);
  }
}

let Atish2 = new Person2("Atish Chikhale", 23);
console.log(Atish2);

let Krishna2 = new Person2("Krishna Chikhale", 16);
console.log(Krishna2);

// =============================================================

// 3. by using function

class Person3 {
  fullName(fn) {
    this.fullName = fn;
  }
  displayName() {
    return this.fullName;
  }
}

let Rahul1 = new Person3();
console.log(Rahul1);

Rahul1.fullName("Rahul roy");
console.log(Rahul1);

console.log(Rahul1.displayName());

//========================================================================

// 4. set and get

class PersonA {
  set fullName1(fullNm) {
    this.fullName = fullNm;
  }
  get displayName() {
    return this.fullName;
  }
}

let Atish5 = new Person3();
console.log(Atish5);

Atish5.fullName1 = "Atish1 Chikhale";
console.log(Atish5);

console.log(Atish5.displayName);

let a2;
console.log(a2);

let a3 = null;
console.log(a3);

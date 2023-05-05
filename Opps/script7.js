// inheritance
// encapsulation
// abstraction
// polymorphism

// Inheritance
// superClass/parentClass
// subClass/childClass
// extends

// class GrandFather {
//   surname = "Chikhale";
//   money = 20000;
//   displayMoney() {
//     console.log(`I have ${this.money}`);
//   }
// }

// class Father extends GrandFather {
//   home = "shreeNiwas";
//   displayHome() {
//     console.log(`I have my own House name as ${this.home}`);
//   }
// }

// class Son extends Father {
//   car = "audi";
//   displayCar() {
//     console.log(`I have ${this.car}`);
//   }
// }

// let Dadarao = new GrandFather();
// console.log(Dadarao);
// Dadarao.displayMoney();
// // Atish.displayCar();
// console.log(Dadarao.surname);
// console.log(Dadarao.money);

// let Tanaji = new Father();
// console.log(Tanaji);
// // Tanaji.displayCar()
// Tanaji.displayHome();
// Tanaji.displayMoney();

// let Atish = new Son();
// console.log(Atish.money);
// console.log(Atish.surname);
// console.log(Atish.car);
// console.log(Atish.home);
// Atish.displayCar();
// Atish.displayHome();
// Atish.displayMoney();

// ====================================

// Parent having constructor and child don't have constructor

// class GrandFather {
//   constructor(surname, money) {
//     this.surname = surname;
//     this.money = money;
//   }
//   displayMoney() {
//     console.log(this.money);
//   }
// }

// class Father extends GrandFather {
//   home = "ShreeNiwas";
//   displayHome() {
//     console.log(`I have my house name as ${this.home}`);
//   }
// }

// let Dadarao = new GrandFather("Chikhale", 50000);
// console.log(Dadarao.surname);
// console.log(Dadarao.money);
// Dadarao.displayMoney();

// let Tanaji = new Father("Chikhale", 50000);
// console.log(Tanaji.surname);
// console.log(Tanaji.money);
// console.log(Tanaji.home);
// Tanaji.displayHome();
// Tanaji.displayMoney();

// =====================================================

// Parent having constructor and child also constructor

class GrandFather {
  constructor(surname, money) {
    this.surname = surname;
    this.money = money;
  }
  displayMoney() {
    console.log(this.money);
  }
}

class Father extends GrandFather {
  constructor(surname, money, home) {
    super(surname, money);
    this.home = home;
  }
  displayHome() {
    console.log(`home name ${this.home}`);
  }
}

let Atish = new Father("Chikhale", 50000, "ShreeNiwas");
console.log(Atish);

// single inheritance
// multilevel inheritance
// hirerchical inheritance

// ================================================

// texting()
// multimedia() => texting(), multimedia()
// calling() => texting(), multimedia(), calling()
class WatsApp {
  texting() {
    console.log(`i am texting feature`);
  }
}

class WatsApp1 extends WatsApp {
  multimedia() {
    console.log(`I am multimedia feature`);
  }
}

class WatsApp2 extends WatsApp1 {
  calling() {
    console.log(`I am calling feature`);
  }
}

let testWatsApp = new WatsApp2();
console.log(testWatsApp);

testWatsApp.texting();
testWatsApp.multimedia();
testWatsApp.calling();

// opps

// inheritance

// polymorphism

// poly ==> many
// morphism ==> form

// 1 function ==> diff state ==> diff behave

// boy => friend, son, brother, student

// 1. overriding ==> different class, same method, same signature(parameter)

// Program 1
/*
class worldBank {
  loan() {
    console.log(`I am loan mehtod from worldBank`);
  }
  save() {
    console.log(`I am save method from worldBank`);
  }
}

class SBI extends worldBank {
  loan() {
    console.log(`I am loan method from SBI`);
  }
  save() {
    console.log(`I am save method from SBI`);
  }
}

class HDFC extends SBI {
  loan() {
    console.log(`I am loan method from HDFC`);
  }
  save() {
    console.log(`I am save method from HDFC`);
  }
}

let hdfc = new HDFC();
console.log(hdfc);
hdfc.loan();
hdfc.save();

let sbi = new SBI();
sbi.loan();
sbi.save();

let WB = new worldBank();
WB.loan();
WB.save();
*/

// Program 2

class worldBank {
  loan() {
    console.log(`I am loan method from worldBank`);
  }
  save() {
    console.log(`I am save method from worldBank`);
  }
}

class SBI extends worldBank {
  loan() {
    super.loan();
    console.log(`I am loan from SBI`);
  }
  save() {
    console.log(`I am save method from SBI`);
  }
}

class HDFC extends SBI {
  loan() {
    super.loan();
    console.log(`I am loan method from HDFC`);
  }
  save() {
    console.log(`I am save method from HDFC`);
  }
}

let hdfc = new HDFC();
hdfc.loan();

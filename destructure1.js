// 1. array destructure

let nums = [21, 36, 65, 69];
let [a, b, c, d] = nums;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// 2. Nested Array destucture

let numbers = [
  [16, 55, 74, 87],
  [53, 41, 76, 43],
  [34, 53, 46, 54],
];

let [[a1, a2, a3, a4], [b1, b2, b3, b4], [c1, c2, c3, c4]] = numbers;
console.log(c1, c2, c3, c4);
console.log(b1, b2, b3, b4);
console.log(a1, a2, a3, a4);

// 3. array inside object

let vehicle = [
  {
    carName: "BMW",
    color: "blue",
    wheels: 4,
  },
  {
    carName: "marcedise",
    color: "red",
    wheels: 4,
  },
  {
    carName: "rolls roys",
    color: "purpul",
    wheels: 4,
  },
];
// using alias
let [
  { carName: car1, color: C1, wheels: w1 },
  { carName: car2, color: C2, wheels: w2 },
  { carName: car3, color: C3, wheels: w3 },
] = vehicle;
console.log(car1);
console.log(car2);
console.log(car3);

//===============================================================================================

// 4. Object destructure

let person = {
  firstName: "Atish",
  lastName: "Chikhale",
  rollNum: 45,
};

let { firstName, lastName, rollNum } = person;
console.log(lastName);
console.log(rollNum);
console.log(firstName);

// using alias
let { firstName: fn, lastName: ln, rollNum: rn } = person;
console.log(ln);
console.log(fn);
console.log(rn);

// 5. nested object
let student = {
  fullName: "Atish Chikhale",
  family: {
    father: "Tanaji",
    brother: "Krishna",
  },
};

let {
  fullName,
  family: { father, brother },
} = student;

console.log(father, brother, fullName);

// 6. object inside array

let collage = {
  clgName: "P.T.Pathare",
  Branches: ["BCA", "B.SC", "B.COM"],
  address: "kharadi",
};

let {
  clgName,
  Branches: [br1, br2, br3],
  address,
} = collage;

console.log(clgName);
console.log(br1, br2, br3);
console.log(address);

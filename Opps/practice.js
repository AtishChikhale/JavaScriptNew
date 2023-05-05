// declaration function
function add(x, y) {
  console.log(x + y);
}
add(10, 20);

// Arrow funt
let add1 = (a, b) => {
  return a + b;
};
let result = add1(20, 30);

// Expression function
let add2 = function (c, d) {
  return c + d;
};
let q = add2(20, 40);

function areaRectangle(length, Bredth) {
  return length * Bredth;
}
let w = areaRectangle(10, 5);
console.log(w);

// Object 
let data = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
];

for (let i = 0; i < data.length; i++) {
  if (data[i].first_name.length > 5) {
    console.log(data[i].last_name);
  }
}

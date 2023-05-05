{
  /* <h1>Hello</h1>
    <input type="text" />
    <button>click me</button> */
}

let headOne = document.querySelector("h1");
console.log(headOne);

let input = document.querySelector("input");
console.log(input);

let btn = document.querySelector("button");
console.log(btn);

btn.addEventListener("click", function () {
  let cl = input.value;
  console.log(cl);
  headOne.style.color = cl;
  input.value = ""
});

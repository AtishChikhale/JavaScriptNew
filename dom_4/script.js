{
  /* <h1 id="id1" class="classA" name="headingOne">Hello</h1>
    <button>click Me</button> */
}

let byTagName = document.querySelector("h1");
console.log(byTagName);
let btn = document.querySelector("button");
console.log(btn);

btn.addEventListener("click", function () {
  let text = byTagName.textContent;
  byTagName.style.color = "Blue";
});

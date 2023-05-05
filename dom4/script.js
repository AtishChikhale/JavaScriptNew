{
  /* <h1>Heading</h1>
    <ul>
      <li>Atish</li>
      <li>Amar</li>
      <li>Kumar</li>
      <li>Rahul</li>
    </ul>
    <input type="text" />
    <button>Add Me</button> */
}

let ulList = document.querySelector("ul");
console.log(ulList);

let inputBox = document.querySelector("input");
console.log(inputBox);

let btn = document.querySelector("button");
console.log(btn);

btn.addEventListener("click", function () {
  let text = inputBox.value;
  //   console.log(text);
  let newLiElement = document.createElement("li");
  newLiElement.textContent = text;
  ulList.appendChild(newLiElement);
  inputBox.value = "";
});

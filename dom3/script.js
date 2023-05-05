// <h1 id="one" class="two" name="nm">Color</h1>

// 4 ways to find element

// 1
let byTagName = document.querySelector("h1");
console.log(byTagName);

// 2 using id (#id)
let byId = document.querySelector("#one");
console.log(byId);

// 3 using class (.className)
let byClassName = document.querySelector(".two");
console.log(byClassName);

// 4 using genral formula
let byFormula = document.querySelector('h1[name="nm"]');
console.log(byFormula);

//==========================================================================================

// find the input box
let inputBox = document.querySelector('input[type="text"]');
console.log(inputBox);

// findinfg the button
let clickMeButton = document.querySelector("button");
console.log(clickMeButton);

clickMeButton.addEventListener("click", function () {
  // console.log(inputBox.value)
  // console.log(byTagName.textContent)
  byTagName.textContent = inputBox.value;
  byTagName.style.color = inputBox.value;
});

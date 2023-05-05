{
  /* <h1>Fruits</h1>
    <ol>
      <li>
        Apple
        <button class="remove">Remove</button>
        <button class="up">Up</button>
        <button class="down">Remove</button>
      </li>
      <li>
        Mango
        <button class="remove">Remove</button>
        <button class="up">Up</button>
        <button class="down">Remove</button>
      </li>
      <li>
        Banana
        <button class="remove">Remove</button>
        <button class="up">Up</button>
        <button class="down">Remove</button>
      </li>
    </ol>
    <input type="text" />
    <button id="one">Add</button> */
}

let olList = document.querySelector("ol");
let inputText = document.querySelector("input[type='text']");
let buttonA = document.querySelector("#one");

buttonA.addEventListener("click", function () {
  let text = inputText.value;
  let newLi = document.createElement("li");
  newLi.textContent = text;
  createBtn(newLi);
  olList.appendChild(newLi);
  inputText.value = "";
});

olList.addEventListener("click", function (e) {
  if (e.target.tagName == "BUTTON") {
    if (e.target.className == "remove") {
      let liElement = e.target.parentElement;
      let olList = liElement.parentElement;
      olList.removeChild(liElement);
    } else if (e.target.className == "up") {
      let liElement = e.target.parentElement;
      let olList = liElement.parentElement;
      let prevEle = liElement.previousElementSibling;
      if (prevEle) {
        olList.insertBefore(liElement, prevEle);
      }
    } else if (e.target.className == "down") {
      let liElement = e.target.parentElement;
      let olList = liElement.parentElement;
      let nextLi = liElement.nextElementSibling;
      if (nextLi) {
        olList.insertBefore(nextLi, liElement);
      }
    }
  }
});

function createBtn(li) {
  let removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  removeBtn.className = "remove";
  li.appendChild(removeBtn);

  let upBtn = document.createElement("button");
  upBtn.innerText = "Up";
  upBtn.className = "up";
  li.appendChild(upBtn);
  
  let downBtn = document.createElement("button");
  downBtn.innerText = "Down";
  downBtn.className = "down";
  li.appendChild(downBtn);
}

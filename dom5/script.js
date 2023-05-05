/*
<h1 class="one two three" id="h1" name="nm">Fruits</h1>
    <ol>
      <li class="ten">Banana</li>
      <li class="">Apple</li>
      <li class="">Papaya</li>
      <li class="">Grapes</li>
    </ol>
*/

let a1 = document.querySelector("#h1"); //using id
console.log(a1);

let a2 = document.querySelector(".ten"); //using class
console.log(a2);

let a3 = document.querySelector("h1"); //using tagName
console.log(a3);

let a4 = document.querySelector("h1[name = 'nm']"); //using attribute and value
console.log(a4);

// ================================================================

// console.log(document.getElementById("h1"));

// ===========================================================

// Multiple element selectors

// let a5 = document.querySelectorAll("li"); //using tagName
// console.log(a5); //return NodeList ==> static
// console.log(a5.length); //return length 4

// let a6 = a5[0].parentNode.appendChild(document.createElement("li"));
// console.log(a5.length);

// let a7 = document.getElementsByTagName("li"); //return htmlCollection
// console.log(a7.length);//4

// let a8 = a7[0].parentNode.appendChild(document.createElement("li"));
// console.log(a8);
// console.log(a7.length);//5

//<h1 class="one two three" id="h1" name="nm">Fruits</h1>
console.log(a1.className);
console.log(a1.classList);

a1.classList.remove("one");
console.log(a1.classList);

a1.classList.add("newClass");
console.log(a1.classList);

a1.classList.toggle("checkList");
console.log(a1.classList);

a1.classList.toggle("checkList");
console.log(a1.classList);

// getAttribute

console.log(a1.getAttribute("id"));
console.log(a1.getAttribute("class"));

// setAttribute

a1.setAttribute("para", "newPara");
console.log(a1);

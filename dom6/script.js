//<h1 id=""std" class="ten three one four" name="nm">StudentList</h1>

// single element
// let h1 = document.querySelector("h1");
// console.log(h1);

/*
        <li>Atish</li>
        <li>Krishna</li>
        <li>Amar</li>
        <li>Shubham</li>
*/

// let liEle = document.querySelector("li");
// console.log(liEle);

// Multiple element
// Nodelist ===>  Static

// let allLi = document.querySelectorAll("li");
// console.log(allLi);

// for (let i = 0; i < allLi.length; i++) {
//   console.log(allLi[i].textContent);
// }

// console.log(allLi.length);

// HTMLCollection ===> daynamic

// let allLiByHtmlCollection = document.getElementsByTagName("li");
// console.log(allLiByHtmlCollection);

// console.log(allLiByHtmlCollection.length);

// ========================================================

//<h1 id="std" class="ten three one four" name="nm">StudentList</h1>

// by tagName
// by className
// by id
// common formula

// document.querySelector()

// let a1 = document.getElementById("std");
// console.log(a1); //HTMLElement

// let a2 = document.getElementsByClassName("ten");
// console.log(a2); //HTMLCollection

// let a3 = document.getElementsByName("nm");
// console.log(a3); //NodeList

// let a4 = document.getElementsByTagName("h1");
// console.log(a4); //HTMLCollection

//=========================================================

let ele = document.querySelector("h1");
console.log(ele);

console.log(ele.className);
console.log(ele.classList);

// add()
// ele.classList.add("five");
// console.log(ele.classList);

// remove()
// ele.classList.remove("ten");
// console.log(ele.classList);

// toggle()
ele.classList.toggle("four");
console.log(ele.classList);

ele.classList.toggle("four");
console.log(ele.classList);

// ==========================================================
console.log(ele.getAttribute("id"));

ele.setAttribute("newAttri", "new");
console.log(ele);

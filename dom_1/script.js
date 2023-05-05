// <h1 id="one" , class="two" , name="nm"></h1>

// with javascript

// create element
// retrive element
// update element
// delete element

// add attribute
// update attribute
// delete attribute
// retrive attribute value

// =================================================================================

// id
let byId = document.querySelector("#one");
console.log(byId);

// class
let byClass = document.querySelector(".two");
console.log(byClass);

// tagName
let byTagName = document.querySelector("h1");
console.log(byTagName);

// attribute
let byAttribute = document.querySelector('h1[name="nm"]');
console.log(byAttribute);

byAttribute.addEventListener('click',function(){
    byAttribute.textContent = "HeadingFour"
    byAttribute.style.color = "red"
    byAttribute.style.backgroundColor = "yellow"
})
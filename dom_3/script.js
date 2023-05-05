{
  /* <h1 id="hedingOne" class="headingClass" name="heading">Hello</h1> */
}

let byId = document.querySelector("#hedingOne");
console.log(byId);

let byClass = document.querySelector(".headingClass");
console.log(byClass);

let byFormula = document.querySelector('h1[name="heading"]');
console.log(byFormula);

let tagName = document.querySelector("h1");
console.log(tagName);


tagName.addEventListener('click',function(){
    let cl = tagName.textContent
    tagName.style.color = "red"
})
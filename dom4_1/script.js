let bdy = document.querySelector("body");
console.log(bdy);

bdy.addEventListener("click", function () {
//   console.log(event.target);
//   console.log(event.target.tagName);
  console.log(event.target.className);
  console.log(event.target.textContent);

});

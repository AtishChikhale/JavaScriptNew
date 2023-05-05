let btn = document.querySelector("button");
console.log(btn);

let heading = document.querySelector("h1");
console.log(heading);

btn.addEventListener("click", function () {
  heading.textContent = "Bye";
  heading.style.color = "Blue";
});

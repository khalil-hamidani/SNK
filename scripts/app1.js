
//! index.html
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const compareContainer = document.querySelector(".compareContainer");
left.addEventListener("mouseenter", () => {
  compareContainer.classList.add("hover-left");
});
left.addEventListener("mouseleave", () => {
  compareContainer.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  compareContainer.classList.add("hover-right");
});
right.addEventListener("mouseleave", () => {
  compareContainer.classList.remove("hover-right");
});


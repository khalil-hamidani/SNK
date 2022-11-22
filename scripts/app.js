//! Titans.html
const panels = document.querySelectorAll(".panel");
const descriptions = [...document.querySelectorAll(".description")];

for (const [idx, panel] of panels.entries()) {
  panel.addEventListener("click", () => {
    let index = 0;
    for (const panel of panels) {
      panel.classList.remove("active");
      descriptions[index].classList.add("D-disabled");
      index++;
    }
    panel.classList.add("active");
    descriptions[idx].classList.remove("D-disabled");
  });
}
//! index.html
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const compareContainer = document.querySelector(".compareContainer");
console.dir(left);
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

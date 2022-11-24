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
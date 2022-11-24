//! personages.html
const humansImg = document.querySelectorAll(".humansImg");
const humansTxt = document.querySelectorAll(".humansTxt");
window.addEventListener("scroll", check);
check();
function check() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  console.log(triggerBottom);
  for (const [idx, element] of humansImg.entries()) {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      element.classList.add("show");
      humansTxt[idx].classList.add("show");
    } else {
      element.classList.remove("show");
      humansTxt[idx].classList.remove("show");
    }
  }
}

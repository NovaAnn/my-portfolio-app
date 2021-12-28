const titleEl = document.querySelectorAll(".heading");

scrollAnimation = () => {
  console.log("Inside event");
  let winHeight = window.innerHeight;
  titleEl.forEach((title) => {
    let elementPos = title.getBoundingClientRect().top;
    if (elementPos <= winHeight) {
      title.classList.add("show");
    } else {
      title.classList.remove("show");
    }
  });
};
document.addEventListener("DOMContentLoaded", scrollAnimation);
window.addEventListener("scroll", scrollAnimation);

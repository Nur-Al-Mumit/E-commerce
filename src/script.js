const menuIcon = document.querySelector(".menu-nav");
const nav = document.querySelector(".nav-links");
console.log(nav);
menuIcon.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  nav.classList.toggle("active-nav");
  // alert("work on click");
  console.log(nav);
});
function init() {
  console.log("i'm heare");
}
init();

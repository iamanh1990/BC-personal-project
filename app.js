//toggle navbar
const humburger = document.getElementById("humburger");
const navbar = document.querySelector(".navbar");

humburger.addEventListener("click", function () {
  this.classList.toggle("active");
  navbar.classList.toggle("responsive");
});

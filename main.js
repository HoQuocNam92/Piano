const bars = document.querySelector(".bars");
const nav = document.querySelector(".menu-list-mobile");

bars.addEventListener("click", () => {
  nav.classList.toggle("show");
});

bars.addEventListener("touchstart", () => {
  nav.classList.toggle("show");
});

const bar = document.querySelector(".bars");
const nav = document.querySelector(".menu-list-mobile");

bar.addEventListener("click", () => {
  nav.classList.toggle("show");
});

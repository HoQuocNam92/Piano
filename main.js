function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const bars = document.querySelector(".bars");
const nav = document.querySelector(".menu-list-mobile");

bars.addEventListener("click", () => {
  nav.classList.toggle("show");
});

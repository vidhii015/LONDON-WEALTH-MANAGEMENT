const sidebar = document.querySelector("#sidebar");
const nav = document.querySelector("header nav");

// Toggle sidebar visibility
sidebar.addEventListener("click", (event) => {
  event.stopPropagation();

  nav.classList.toggle("opacity-0");
  nav.classList.toggle("translate-x-3");
});

// Close nav
document.body.addEventListener("click", () => {
  nav.classList.add("opacity-0");
  nav.classList.add("translate-x-3");
});

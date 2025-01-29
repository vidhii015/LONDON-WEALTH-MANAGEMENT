const sidebar = document.querySelector("#sidebar");
const nav = document.querySelector("header nav");

// Sidebar click to toggle visibility
sidebar.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent body click from triggering

  // Toggle visibility and transition
  nav.classList.toggle("opacity-0");
  nav.classList.toggle("translate-x-3");
});

// Close nav when clicking outside
document.body.addEventListener("click", () => {
  nav.classList.add("opacity-0");
  nav.classList.add("translate-x-3");
});

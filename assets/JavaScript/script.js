// Client Section JS

const clients = document.querySelectorAll(".client-section .client");
const pages = document.querySelectorAll(".pages .page");

pages.forEach((page, index) => {
  page.addEventListener("click", () => {
    // Reset all pages
    pages.forEach((pg) => {
      pg.classList.remove("active");
      pg.classList.add("bg-white", "text-[#2e3b42]");
    });

    // Set active page styles
    page.classList.add("active");

    // Hide all clients
    clients.forEach((cli) => {
      cli.classList.add("hidden");
      cli.classList.remove("flex");
    });

    // Show selected client
    if (clients[index].classList.contains("hidden")) {
      clients[index].classList.remove("hidden");
      clients[index].classList.add("flex");
    }
  });
});

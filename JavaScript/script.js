const client = document.querySelectorAll(".client-section .client");
const pages = document.querySelectorAll(".pages .page");
console.log(client);

pages.forEach((page, index) => {
  page.addEventListener("click", () => {
    client.forEach((cli) => {
      cli.classList.add("hidden");
    });
    if (client[index].classList.contains("hidden")) {
      client[index].classList.remove("hidden");
      client[index].classList.add("flex");
    } else {
      client[index].classList.remove("hidden");
    }
  });
});

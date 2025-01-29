// CLIENT LOGIN JS

// Fetch and insert the card HTML into the container
fetch("/assets/components/client-login.html")
  .then((response) => response.text()) // Convert response to text
  .then((html) => {
    document.getElementById("card-container").innerHTML = html; // Insert HTML into container
  });

const loginLink = document.querySelector(".login-link");
const cardContainer = document.querySelector("#card-container");
const body = document.body;

// Event listener to open the login card when the login link is clicked
loginLink.addEventListener("click", () => {
  cardContainer.classList.remove("hidden"); // Show the login card
  body.classList.add("overflow-y-hidden"); // Prevent body from scrolling

  const close = document.querySelector(".close");

  // Event listener to close the login card when the close button is clicked
  close.addEventListener("click", () => {
    cardContainer.classList.add("hidden"); // Hide the login card
    body.classList.remove("overflow-y-hidden"); // Enable body scrolling
  });
});

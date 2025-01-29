document.addEventListener("DOMContentLoaded", function () {
  fetch("/assets/components/Loader.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("loader-container").innerHTML = html;

      setTimeout(() => {
        document.querySelector(".loader-overlay").style.display = "none";
      }, 5000);
    });
});

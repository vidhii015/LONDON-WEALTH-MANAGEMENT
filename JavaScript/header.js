const sidebar = document.getElementById("sidebar");
const nav = document.querySelector("header nav");

const navClasses = [
  "flex",
  "flex-col",
  "absolute",
  "bg-[#b09abb]",
  "rounded-md",
  "px-5",
  "py-7",
  "top-20",
  "right-5",
  "opacity-90",
];

sidebar.addEventListener("click", (event) => {
  event.stopPropagation();

  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
    nav.classList.add(...navClasses);
  } else {
    nav.classList.add("hidden");
    nav.classList.remove(...navClasses);
  }
});

document.body.addEventListener("click", () => {
  nav.classList.add("hidden");
  nav.classList.remove(...navClasses);
});

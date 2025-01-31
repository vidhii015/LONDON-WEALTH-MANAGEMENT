import loader from "../components/loader.js";
import loginComponent from "../components/login-comp.js";

export function setLoader() {
  document.addEventListener("DOMContentLoaded", function () {
    let newLoader = document.createElement("div");
    newLoader.innerHTML = loader;
    newLoader.className =
      "fixed top-0 left-0 w-full h-screen flex justify-center items-center z-10";

    document.body.append(newLoader);

    setTimeout(() => {
      newLoader.remove();
    }, 3000);
  });
}

export function showModal() {
  let newModal = document.createElement("div");
  newModal.className =
    "login-modal h-screen w-full fixed flex justify-center items-center z-10";

  newModal.innerHTML = loginComponent;

  document.body.append(newModal);
  document.body.style.height = "100vh";
  document.body.style.overflow = "hidden";
  let closeBtn = document.querySelector(".login-modal .close");
  closeBtn.addEventListener("click", () => {
    newModal.remove();
    document.body.style.height = "initial";
    document.body.style.overflow = "visible";
  });
}

"use strict";

let modalOpen = document.querySelectorAll("#modal-open");
let modalPopUp = document.getElementById("modal-popup");
let overlay = document.getElementById("overlay");
let modalClose = document.getElementById("modal-close");

let modalOpenFunc = function () {
  modalPopUp.classList.add("active");
  overlay.classList.add("modal-overlay");
};

let modalCloseFunc = function () {
  modalPopUp.classList.remove("active");
  overlay.classList.remove("modal-overlay");
};

for (let i = 0; i < modalOpen.length; i++) {
  modalOpen[i].addEventListener("click", modalOpenFunc);
  modalClose.addEventListener("click", modalCloseFunc);
  overlay.addEventListener("click", modalCloseFunc);
  document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
      modalCloseFunc();
    }
  });
}

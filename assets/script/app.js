"use strict";

const menu = document.querySelector(".burger-menu");
const closePopupBtn = document.querySelector(".close-btn");
const navigation = document.getElementById("navigation");
const popupBox = document.getElementById("success-message");
const contactForm = document.getElementById("contact-form");

menu.addEventListener("click", () => {
  navigation.classList.toggle("show-menu");
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (contactForm.checkValidity()) {
    popupBox.classList.add("success-message");
  } else {
    contactForm.reportValidity();
  }
});

closePopupBtn.addEventListener("click", () => {
  popupBox.classList.remove("success-message");
});

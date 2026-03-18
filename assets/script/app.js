"use strict";

const menu = document.querySelector(".burger-menu");
const navigation = document.getElementById("navigation");

menu.addEventListener("click", () => {
  navigation.classList.toggle("show-menu");
});

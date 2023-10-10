"use strict";

document.querySelector("a").addEventListener("click", (event) => {
  event.preventDefault();
  window.history.back();
});

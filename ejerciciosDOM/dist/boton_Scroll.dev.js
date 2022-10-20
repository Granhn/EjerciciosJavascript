"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = scrollTopButton;
var d = document,
    w = window;

function scrollTopButton(btn) {
  var $btn = d.querySelector(btn);
  w.addEventListener("scroll", function (e) {
    var scrollTop = d.documentElement.scrollTop;

    if (scrollTop > 600) {
      $btn.classList.remove("hidden");
    } else {
      $btn.classList.add("hidden");
    }
  });
  d.addEventListener("click", function (e) {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0
      });
    }
  });
}
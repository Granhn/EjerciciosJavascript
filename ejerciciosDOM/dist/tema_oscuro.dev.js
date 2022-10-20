"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = darkTheme;
var d = document,
    ls = localStorage;

function darkTheme(btn, classDark) {
  var $btn = d.querySelector(btn),
      $selectors = d.querySelectorAll("[data-dark]"),
      luna = "🌒",
      sol = "☀️";

  var lightMode = function lightMode() {
    $selectors.forEach(function (selector) {
      selector.classList.add(classDark);
    });
    $btn.textContent = sol;
    ls.setItem("theme", "light");
  };

  var darkMode = function darkMode() {
    $selectors.forEach(function (el) {
      return el.classList.remove(classDark);
    });
    $btn.textContent = luna;
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", function (e) {
    if (e.target.matches(btn)) {
      if ($btn.textContent === luna) lightMode();else darkMode();
    }
  });
  d.addEventListener("DOMContentLoaded", function (e) {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
}
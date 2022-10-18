"use strict";

var _menu_hambuguesa = _interopRequireDefault(require("./menu_hambuguesa.js"));

var _reloj = require("./reloj.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var d = document;
d.addEventListener("DOMContentLoaded", function (e) {
  (0, _menu_hambuguesa["default"])(".panel-btn", ".panel", ".menu a");
  (0, _reloj.digitalClock)("#reloj", "#activar-reloj", "#desactivar-reloj");
});
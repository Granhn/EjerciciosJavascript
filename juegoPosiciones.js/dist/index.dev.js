"use strict";

var _funciones = _interopRequireDefault(require("./funciones.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var d = document;
d.addEventListener("DOMContentLoaded", function (e) {
  _funciones["default"].insertFirst("#boton1", ".cards");

  _funciones["default"].insertLast("#boton2", ".cards");

  _funciones["default"].insertAfter("#boton3", ".cards");

  _funciones["default"].insertBefore("#boton4", ".cards");
});
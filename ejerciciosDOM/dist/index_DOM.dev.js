"use strict";

var _cuenta_regresiva = _interopRequireDefault(require("./cuenta_regresiva.js"));

var _menu_hambuguesa = _interopRequireDefault(require("./menu_hambuguesa.js"));

var _reloj = require("./reloj.js");

var _teclado = require("./teclado.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var d = document;
d.addEventListener("DOMContentLoaded", function (e) {
  (0, _menu_hambuguesa["default"])(".panel-btn", ".panel", ".menu a");
  (0, _reloj.digitalClock)("#reloj", "#activar-reloj", "#desactivar-reloj");
  (0, _reloj.alarm)("assests/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  (0, _cuenta_regresiva["default"])("countdown", "Nov 30, 2022", "Feliz cumpleaños Diego!!!");
});
d.addEventListener("keydown", function (e) {
  (0, _teclado.shortCuts)(e);
  (0, _teclado.moveBall)(e, ".ball", ".stage");
});
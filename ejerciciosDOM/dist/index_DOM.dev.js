"use strict";

var _boton_Scroll = _interopRequireDefault(require("./boton_Scroll.js"));

var _cuenta_regresiva = _interopRequireDefault(require("./cuenta_regresiva.js"));

var _menu_hambuguesa = _interopRequireDefault(require("./menu_hambuguesa.js"));

var _objeto_responsive = _interopRequireDefault(require("./objeto_responsive.js"));

var _reloj = require("./reloj.js");

var _teclado = require("./teclado.js");

var _tema_oscuro = _interopRequireDefault(require("./tema_oscuro.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var d = document;
d.addEventListener("DOMContentLoaded", function (e) {
  (0, _menu_hambuguesa["default"])(".panel-btn", ".panel", ".menu a");
  (0, _reloj.digitalClock)("#reloj", "#activar-reloj", "#desactivar-reloj");
  (0, _reloj.alarm)("assests/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  (0, _cuenta_regresiva["default"])("countdown", "Nov 30, 2022", "Feliz cumpleaños Diego!!!");
  (0, _boton_Scroll["default"])(".scroll-top-btn");
  (0, _objeto_responsive["default"])("youtube", "(min-width: 1024px", "<a href=\"https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91\">Ver video</a>", "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/6IwUl-4pAzc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>");
  (0, _objeto_responsive["default"])("gmaps", "(min-width: 1024px", "<a href=\"https://goo.gl/maps/BSJaAsD9cfkaGhM76\">Ver mapa</a>", "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104602.76904975703!2d-71.28357753241161!3d-34.98575908030492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966457a7e52d4497%3A0xd97e4dafb29a1c7c!2sPlaza%20de%20Armas!5e0!3m2!1ses-419!2scl!4v1666295270726!5m2!1ses-419!2scl\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>");
});
d.addEventListener("keydown", function (e) {
  (0, _teclado.shortCuts)(e);
  (0, _teclado.moveBall)(e, ".ball", ".stage");
});
(0, _tema_oscuro["default"])(".dark-theme-btn", "dark-mode");
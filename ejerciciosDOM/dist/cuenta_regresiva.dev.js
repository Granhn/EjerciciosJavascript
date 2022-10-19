"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = countdown;
var d = document;

function countdown(id, limitDate, finalMessage) {
  var $countdown = d.getElementById(id),
      countdownDate = new Date(limitDate).getTime();
  var countDownTempo = setInterval(function () {
    var now = new Date().getTime(),
        limitTime = countdownDate - now,
        days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
        hours = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2),
        minutes = ("0" + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2),
        seconds = ("0" + Math.floor(limitTime % (1000 * 60) / 1000)).slice(-2);
    $countdown.innerHTML = "<h3>Faltan : ".concat(days, " dias, ").concat(hours, " horas, ").concat(minutes, " minutos y ").concat(seconds, " segundos");
  }, 1000);
}
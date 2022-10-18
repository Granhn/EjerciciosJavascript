"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.digitalClock = digitalClock;
exports.alarm = alarm;
var d = document;

function digitalClock(clock, btnPlay, btnStop) {
  var clockTempo = null;
  d.addEventListener("click", function (e) {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(function () {
        var clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = "<h3>".concat(clockHour, "</h3>");
      }, 1000);
      e.target.disabled = true;
      d.querySelector(btnStop).disabled = false;
    }

    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      e.target.disabled = true;
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}

function alarm() {}
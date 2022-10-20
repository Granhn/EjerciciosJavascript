"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = responsiveMedia;
var d = document,
    w = window;

function responsiveMedia(id, mq, mobileContent, desktopContent) {
  var breakpoint = w.matchMedia(mq);

  var responsive = function responsive(e) {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
  };

  breakpoint.addListener(responsive);
  responsive(breakpoint);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shortCuts = shortCuts;
exports.moveBall = moveBall;
var d = document;
var x = 0,
    y = 0;

function shortCuts(e) {
  if (e.key === "a" && e.ctrlKey) {
    alert("Alrta con shortcut");
  }
}

function moveBall(e, ball, stage) {
  var $ball = d.querySelector(ball);
  var $stage = d.querySelector(stage),
      limitsBall = $ball.getBoundingClientRect(),
      limitStage = $stage.getBoundingClientRect();
  ;
  console.log($ball);

  switch (e.keyCode) {
    case 37:
      //arrowLeft
      e.preventDefault();
      if (limitsBall.left > limitStage.left) x--;
      break;

    case 38:
      //ArrowUp
      if (limitsBall.top > limitStage.top) y--;
      e.preventDefault();
      break;

    case 39:
      //ArrowRIght
      if (limitsBall.right < limitStage.right) x++;
      e.preventDefault();
      break;

    case 40:
      //ArrowDown
      if (limitsBall.bottom < limitStage.bottom) y++;
      e.preventDefault();
      break;

    default:
      break;
  }

  $ball.style.transofrm = "translate(".concat(x * 10, ", ").concat(y * 10, ")");
  console.log(x, y);
}
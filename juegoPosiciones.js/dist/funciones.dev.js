"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var d = document;
var $newCard = d.createElement("figure"),
    $img = d.createElement("img"),
    $figcaption = d.createElement("figcaption"),
    $figtext = d.createTextNode("Any"),
    cardsArray = [];

function createCard() {
  //Setting clases and attributes
  $img.setAttribute("src", "https://placeimg.com/200/200/any");
  $img.setAttribute("alt", "Any");
  $figcaption.appendChild($figtext); //Creatin the card

  $newCard.appendChild($img);
  $newCard.appendChild($figcaption);
  $newCard.classList.add("card");
  cardsArray.push($newCard);
  console.log(cardsArray);
}

function insertFirst(btnBefore, parent) {
  var parentNode = d.querySelector(parent);
  d.addEventListener("click", function (e) {
    if (e.target.matches(btnBefore)) {
      createCard();
      parentNode.prepend(cardsArray[cardsArray.length - 1]);
    }
  });
}

function insertLast(btnLast, parent) {
  var parentNode = d.querySelector(parent);
  d.addEventListener("click", function (e) {
    if (e.target.matches(btnLast)) {
      createCard();
      parentNode.append($newCard);
    }
  });
}

function insertAfter(btnAfter, parent) {
  var parentNode = d.querySelector(parent);
  d.addEventListener("click", function (e) {
    if (e.target.matches(btnAfter)) {
      createCard();
      parentNode.after($newCard);
    }
  });
}

function insertBefore(btnBefore, parent) {
  var parentNode = d.querySelector(parent);
  d.addEventListener("click", function (e) {
    if (e.target.matches(btnBefore)) {
      createCard();
      parentNode.before($newCard);
    }
  });
}

var functions = {
  createCard: createCard,
  insertAfter: insertAfter,
  insertFirst: insertFirst,
  insertLast: insertLast,
  insertBefore: insertBefore
};
var _default = functions;
exports["default"] = _default;
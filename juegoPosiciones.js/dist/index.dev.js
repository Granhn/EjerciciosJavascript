"use strict";

var d = document,
    $button1 = d.getElementById("boton1"),
    $button2 = d.getElementById("boton2"),
    $button3 = d.getElementById("boton3"); //Creating the card 

var $newCard = d.createElement("figure"),
    $img = d.createElement("img"),
    $figcaption = d.createElement("figcaption"),
    $figtext = d.createTextNode("Any"); //Setting clases and attributes

$img.setAttribute("src", "https://placeimg.com/200/200/any");
$img.setAttribute("alt", "Any");
$figcaption.appendChild($figtext); //Adding the nodes to the new card

$newCard.appendChild($img);
$newCard.appendChild($figcaption);
$newCard.classList.add("card");
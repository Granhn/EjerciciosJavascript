
const d = document;
const $newCard = d.createElement("figure"),
$img = d.createElement("img"),
$figcaption = d.createElement("figcaption"),
$figtext = d.createTextNode("Any");

function createTarjeta(){

    //Setting clases and attributes
    $img.setAttribute("src","https://placeimg.com/200/200/any");
    $img.setAttribute("alt","Any");
    $figcaption.appendChild($figtext);

    //Creatin the card
    $newCard.appendChild($img); 
    $newCard.appendChild($figcaption);
    $newCard.classList.add("card");

}

function insertFirstChiled(){
    d.prepend($newCard);
}

function insertLastChild(){
    d.append($card);
}

function insertBeforeElement(){
    d.insertBefore($card);
}

export const functions= {
    createTarjeta,
    insertFirstChiled,
    insertLastChild,
    insertBeforeElement
};



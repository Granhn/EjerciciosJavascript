
const d = document;
const $newCard = d.createElement("figure"),
$img = d.createElement("img"),
$figcaption = d.createElement("figcaption"),
$figtext = d.createTextNode("Any"),
cardsArray = [];

function createCard(){
    //Setting clases and attributes
    $img.setAttribute("src","https://placeimg.com/200/200/any");
    $img.setAttribute("alt","Any");
    $figcaption.appendChild($figtext);

    //Creatin the card
    $newCard.appendChild($img); 
    $newCard.appendChild($figcaption);
    $newCard.classList.add("card");

    cardsArray.push($newCard);
    console.log(cardsArray);
}


function insertFirst(btnBefore, parent){

    const parentNode = d.querySelector(parent);
    d.addEventListener("click", e => {
        
        if( e.target.matches(btnBefore) ){
            createCard();
            parentNode.prepend(cardsArray[cardsArray.length - 1]);
        }
    })

}

function insertLast(btnLast, parent){

    const parentNode = d.querySelector(parent);
    d.addEventListener("click", e => {
        
        if( e.target.matches(btnLast) ){
            createCard();
            parentNode.append($newCard);
        }
    });

}

function insertAfter(btnAfter, parent){

    const parentNode = d.querySelector(parent);
    d.addEventListener("click", e => {
        
        if( e.target.matches(btnAfter) ){
            createCard();
            parentNode.after($newCard);
        }
    })

}

function insertBefore(btnBefore, parent){

    const parentNode = d.querySelector(parent);
    d.addEventListener("click", e => {
        if( e.target.matches(btnBefore) ){
            createCard();
            parentNode.before($newCard);
        }
    })

}

const functions= {
    createCard,
    insertAfter,
    insertFirst,
    insertLast,
    insertBefore
};


export default functions;
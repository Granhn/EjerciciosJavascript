import functions from "./funciones.js";

const d = document;


d.addEventListener("DOMContentLoaded", e => {

    
    functions.insertFirst("#boton1",".cards");
    functions.insertLast("#boton2",".cards");
    functions.insertAfter("#boton3",".cards");
    functions.insertBefore("#boton4",".cards");
});

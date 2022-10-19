import countdown from "./cuenta_regresiva.js";
import hamburgerMenu from "./menu_hambuguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortCuts, moveBall} from "./teclado.js";


const d = document;
d.addEventListener("DOMContentLoaded", e =>{
    hamburgerMenu(".panel-btn",".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assests/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Nov 30, 2022","Feliz cumpleaños Diego!!!");

});
 
d.addEventListener("keydown", e =>{
    shortCuts(e);
    moveBall(e, ".ball", ".stage");
})
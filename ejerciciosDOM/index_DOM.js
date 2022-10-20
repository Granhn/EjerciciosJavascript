import scrollTopButton from "./boton_Scroll.js";
import countdown from "./cuenta_regresiva.js";
import hamburgerMenu from "./menu_hambuguesa.js";
import responsiveMedia from "./objeto_responsive.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortCuts, moveBall} from "./teclado.js";
import darkTheme from "./tema_oscuro.js";


const d = document;
d.addEventListener("DOMContentLoaded", e =>{
    hamburgerMenu(".panel-btn",".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assests/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Nov 30, 2022","Feliz cumpleaños Diego!!!");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube",
        "(min-width: 1024px",
        `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91">Ver video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        );
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px",
        `<a href="https://goo.gl/maps/BSJaAsD9cfkaGhM76">Ver mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104602.76904975703!2d-71.28357753241161!3d-34.98575908030492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966457a7e52d4497%3A0xd97e4dafb29a1c7c!2sPlaza%20de%20Armas!5e0!3m2!1ses-419!2scl!4v1666295270726!5m2!1ses-419!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        );
});
 
d.addEventListener("keydown", e =>{
    shortCuts(e);
    moveBall(e, ".ball", ".stage");
});
darkTheme(".dark-theme-btn", "dark-mode");
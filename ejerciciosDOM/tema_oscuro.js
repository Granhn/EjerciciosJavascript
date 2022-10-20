const d = document,
ls = localStorage;
export default function darkTheme(btn, classDark){

    let $btn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]"),
    luna = "🌒",
    sol = "☀️";
        
    const lightMode = () =>{
        $selectors.forEach((selector) => { selector.classList.add(classDark) });
        $btn.textContent = sol;
        ls.setItem("theme","light");
    }
    const darkMode = () =>{
        $selectors.forEach(el => el.classList.remove(classDark));
        $btn.textContent = luna;
        ls.setItem("theme","dark");
    }
    d.addEventListener("click", e => {
        if( e.target.matches(btn)){
            if ( $btn.textContent === luna ) lightMode();
            else  darkMode();
        }
    });
    d.addEventListener("DOMContentLoaded", e => {
        if( ls.getItem("theme") === null) ls.setItem("theme","light");
        if( ls.getItem("theme") === "light" ) lightMode();
        if( ls.getItem("theme") === "dark" ) darkMode();
    });
}
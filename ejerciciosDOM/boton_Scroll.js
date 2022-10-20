const d  = document,
w = window;
export default function scrollTopButton(btn){

    const $btn = d.querySelector(btn);
    

    w.addEventListener("scroll", e =>{ 
        let scrollTop = d.documentElement.scrollTop;
        if( scrollTop > 600 ){
            $btn.classList.remove("hidden");
        }
        else{
            $btn.classList.add("hidden");
        }
     });
    d.addEventListener("click", e => {  
        if (e.target.matches(btn)){
            w.scrollTo({
                behavior: "smooth",
                top: 0
            });
        }
    });

}
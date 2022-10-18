const d = document;
export function digitalClock(clock, btnPlay, btnStop){
    let clockTempo = null;
    d.addEventListener("click", e =>{
        if (e.target.matches(btnPlay)){
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
            },1000);
            e.target.disabled = true;
            d.querySelector(btnStop).disabled = false;
        }
        if (e.target.matches(btnStop)){
            clearInterval(clockTempo);
            e.target.disabled = true;
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        }
    });
}
export function alarm(){
    
}
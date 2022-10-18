const d = document;
let x = 0,
y = 0;
export function shortCuts(e){
    
    if(e.key === "a" && e.ctrlKey ){
        alert("Alrta con shortcut");
    }

}


export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();;
    console.log($ball);
    
    switch (e.keyCode){
        case 37://arrowLeft
            e.preventDefault();
            if(limitsBall.left > limitStage.left) x--;
            break;
        case 38://ArrowUp
            if(limitsBall.top > limitStage.top) y--;
            e.preventDefault();
            break;
        case 39: //ArrowRIght
        if(limitsBall.right < limitStage.right) x++;
            e.preventDefault();
            break;
        case 40: //ArrowDown
            if (limitsBall.bottom  < limitStage.bottom) y++;
            e.preventDefault();
            break;
        default:
            break;

    }
    $ball.style.transofrm = `translate(${x * 10}, ${y * 10})`;
    console.log(x, y)
}
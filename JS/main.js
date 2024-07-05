//* ELEMENTOS PRINCIPALES DEL DOM

// pantallas
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const finalScreenNode = document.querySelector("#winner-screen");

// botones
const startBtnNode = document.querySelector("#start-btn");

// game box
const gameBoxNode = document.querySelector("#game-box");


//* VARIABLES GLOBALES DEL JUEGO
let mainIntervalId = null;
let ballObj = null;
let strikerObjRed = null;
let strikerObjBlue = null;
let defenderObjRed = null;
let defenderObjBlue = null;
let goalKeeperRed = null;
let goalKeeperBlue = null;


//* FUNCIONES GLOBALES DEL JUEGO
function startGame(){
    splashScreenNode.style.display = "none";

    gameScreenNode.style.display = "flex";
    
    ballObj = new Ball();
    
    strikerObjRed = new Striker("red");
    goalKeeperRed = new GoalKeeper("red");
    
    strikerObjBlue = new Striker("blue");
    goalKeeperBlue = new GoalKeeper("blue");
    

    
    mainIntervalId = setInterval(() => {
        gameLoop();
    }, Math.round(1000/60));

    
}

function gameLoop(){
    ballObj.move();
    goalKeeperRed.goalKeeperMovement();
    goalKeeperRed.goalKeeperLimits();

    goalKeeperBlue.goalKeeperMovement();
    goalKeeperBlue.goalKeeperLimits();
}

function gameOver(){
    clearInterval(mainIntervalId);
}

//* EVENT LISTENERS

startBtnNode.addEventListener("click", () =>{
    
    startGame();
})

window.addEventListener("keydown", (event) =>{
    
    if(event.code === "ArrowLeft"){
        strikerObjBlue.x -= 40;
        
        strikerObjBlue.updateStrikerPositionX();
        
    } else if(event.code === "ArrowDown"){
        strikerObjBlue.y += 40;
        
        strikerObjBlue.updateStrikerPositionY();

    } else if(event.code === "ArrowUp"){
        strikerObjBlue.y -= 40;
        
        strikerObjBlue.updateStrikerPositionY();

    } else if(event.code === "ArrowRight"){
        strikerObjBlue.x += 40;
        
        strikerObjBlue.updateStrikerPositionX();

    }
})

window.addEventListener("keydown", (event) =>{
    
    if(event.code === "KeyA"){
        strikerObjRed.x -= 40;
        
        strikerObjRed.updateStrikerPositionX();
        
    } else if(event.code === "KeyS"){
        strikerObjRed.y += 40;
        
        strikerObjRed.updateStrikerPositionY();

    } else if(event.code === "KeyW"){
        strikerObjRed.y -= 40;
        
        strikerObjRed.updateStrikerPositionY();

    } else if(event.code === "KeyD"){
        strikerObjRed.x += 40;
        
        strikerObjRed.updateStrikerPositionX();

    }
})
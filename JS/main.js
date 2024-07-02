//* ELEMENTOS PRINCIPALES DEL DOM

// pantallas
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const finalScreenNode = document.querySelector("#winner-screen");

// botones
const startBtnNode = document.querySelector("#start-btn");

// game box
const gameBoxNode = document.querySelector("game-box");


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
    defenderObjRed = new Defender("red");
    goalKeeperRed = new GoalKeeper("red");
    
    strikerObjBlue = new Striker("blue");
    defenderObjBlue = new Defender("blue");
    goalKeeperBlue = new GoalKeeper("blue");

    
    mainIntervalId = setInterval(() => {
        gameLoop();
    }, Math.round(1000/60));

    
}

function gameLoop(){

}

function gameOver(){
    clearInterval(mainIntervalId);
}

//* EVENT LISTENERS

startBtnNode.addEventListener("click", () =>{
    
    startGame();
})
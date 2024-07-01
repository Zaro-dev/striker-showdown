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



//* FUNCIONES GLOBALES DEL JUEGO
function startGame(){
    splashScreenNode.style.display = "none";

    gameScreenNode.style.display = "flex";

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
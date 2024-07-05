//* ELEMENTOS PRINCIPALES DEL DOM

// pantallas
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const finalScreenNode = document.querySelector("#winner-screen");

// botones
const startBtnNode = document.querySelector("#start-btn");

// game box
const gameBoxNode = document.querySelector("#game-box");


const bottomSide = 470;
console.log(bottomSide)


//* VARIABLES GLOBALES DEL JUEGO
let mainIntervalId = null;
let ballObj = null;
let strikerObjRed = null;
let strikerObjBlue = null;
let goalKeeperRed = null;
let goalKeeperBlue = null;
const winCondition = 5;


//* FUNCIONES GLOBALES DEL JUEGO

//iniciamos el intervalo en el que se rige el juego y creamos los objetos que necesitaremos para jugar.
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

//indicador de quién gana. Resetea marcadores a 0, limpia el intervalo y deja vacío de elementos el game box.
function gameWinner(){
    
    if(document.querySelector("#marcador-a").innerText >= winCondition ){
        
        gameScreenNode.style.display = "none";
        splashScreenNode.style.display = "flex";
        window.alert("HA GANADO EL EQUIPO VERDE");

        document.querySelector("#marcador-a").innerText = 0;
        document.querySelector("#marcador-b").innerText = 0;

        clearInterval(mainIntervalId);
        document.querySelector("#game-box").innerHTML = "";

    } else if(document.querySelector("#marcador-b").innerText >= winCondition){
        
        gameScreenNode.style.display = "none";
        splashScreenNode.style.display = "flex";
        window.alert("HA GANADO EL EQUIPO ROJO")

        document.querySelector("#marcador-a").innerText = 0;
        document.querySelector("#marcador-b").innerText = 0;

        clearInterval(mainIntervalId);
        document.querySelector("#game-box").innerHTML = "";
    }
}

// funciones que ocurren dentro del game loop
function gameLoop(){
    ballObj.ballMovement();
    goalKeeperRed.goalKeeperMovement();
    goalKeeperRed.goalKeeperLimits();

    goalKeeperBlue.goalKeeperMovement();
    goalKeeperBlue.goalKeeperLimits();
    ballCollision();
    gameWinner();
}

//actualiza la posición del balón a la inicial tras marcar gol
function isGoal(){
    ballObj.x = 250
    ballObj.y = 250

}

// establecemos las colisiones de la pelota y lo que ocurre. Rebota en paredes laterales y jugadores/porteros. En las lineas de fondo cuenta como gol.

function ballCollision(){
    
    if(ballObj.x > 700){
       isGoal(); 
       document.querySelector("#marcador-a").innerText++;
    }
    
    if(ballObj.x < 0){
        isGoal();
        document.querySelector("#marcador-b").innerText++;
    }

    if(ballObj.y > bottomSide){
        ballObj.isBallMovingDown = false;
    }
    if(ballObj.y < 0){
       
        ballObj.isBallMovingDown = true;
    }

    if (
        ballObj.x < strikerObjRed.x + strikerObjRed.w &&
        ballObj.x + ballObj.w > strikerObjRed.x &&
        ballObj.y < strikerObjRed.y + strikerObjRed.h &&
        ballObj.y + ballObj.h > strikerObjRed.y
      ) {
        ballObj.isBallMovingDown = true;
        ballObj.isBallMovingRight = true;
    }

    if (
        ballObj.x < goalKeeperRed.x + goalKeeperRed.w &&
        ballObj.x + ballObj.w > goalKeeperRed.x &&
        ballObj.y < goalKeeperRed.y + goalKeeperRed.h &&
        ballObj.y + ballObj.h > goalKeeperRed.y
      ) {
        ballObj.isBallMovingDown = true;
        ballObj.isBallMovingRight = true;
    }

    if (
        ballObj.x < strikerObjBlue.x + strikerObjBlue.w &&
        ballObj.x + ballObj.w > strikerObjBlue.x &&
        ballObj.y < strikerObjBlue.y + strikerObjBlue.h &&
        ballObj.y + ballObj.h > strikerObjBlue.y
      ) {
        ballObj.isBallMovingDown = false;
        ballObj.isBallMovingRight = false;
    }
    if (
        ballObj.x < goalKeeperBlue.x + goalKeeperBlue.w &&
        ballObj.x + ballObj.w > goalKeeperBlue.x &&
        ballObj.y < goalKeeperBlue.y + goalKeeperBlue.h &&
        ballObj.y + ballObj.h > goalKeeperBlue.y
      ) {
        ballObj.isBallMovingDown = false;
        ballObj.isBallMovingRight = false;
    }
}
    

//* EVENT LISTENERS

startBtnNode.addEventListener("click", () =>{
    
    startGame();
})

//movimiento para jugador de la derecha

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


//movimiento para jugadore de la izquierda
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
//* ELEMENTOS PRINCIPALES DEL DOM

// pantallas
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const finalScreenNode = document.querySelector("#winner-screen");

// botones
const startBtnNode = document.querySelector("#start-btn");

// game box
const gameBoxNode = document.querySelector("#game-box");

/* const goalRight = gameBoxNode.offsetWidth; */
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
    ballObj.ballMovement();
    goalKeeperRed.goalKeeperMovement();
    goalKeeperRed.goalKeeperLimits();

    goalKeeperBlue.goalKeeperMovement();
    goalKeeperBlue.goalKeeperLimits();
    ballCollision();
    gameWinner();
}

function isGoal(){
    ballObj.x = 250
    ballObj.y = 250

}

function gameWinner(){
    
    if(document.querySelector("#marcador-a").innerText >= winCondition ){
        
        gameScreenNode.style.display = "none";
        splashScreenNode.style.display = "flex";
        window.alert("HA GANADO EL EQUIPO VERDE");

        document.querySelector("#marcador-a").innerText = 0;
        document.querySelector("#marcador-b").innerText = 0;

        clearInterval(mainIntervalId);

    } else if(document.querySelector("#marcador-b").innerText >= winCondition){
        
        gameScreenNode.style.display = "none";
        splashScreenNode.style.display = "flex";
        window.alert("HA GANADO EL EQUIPO ROJO")

        document.querySelector("#marcador-a").innerText = 0;
        document.querySelector("#marcador-b").innerText = 0;

        clearInterval(mainIntervalId);
    }
}




/* function ballCollisionPlayers{

} */

function ballCollision(){
    
    if(ballObj.x > 500){
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


     /* if(ballObj.y > strikerObjBlue.y && (ballObj.y + ballObj.h) < (strikerObjBlue.y + strikerObjBlue.h) && (ballObj.x + ballObj.w) > strikerObjBlue.h ){
        
        ballObj.isBallMovingRight = false;
        ballObj.isBallMovingDown = true;
     }
     
     if(ballObj.y > strikerObjRed.y && (ballObj.y + ballObj.h) < (strikerObjRed.y + strikerObjRed.h) && (ballObj.x + ballObj.w) < strikerObjRed.h ){
        ballObj.isBallMovingRight = true;
        ballObj.isBallMovingDown =  true;
     }
 
     if(ballObj.y > goalKeeperBlue.y && (ballObj.y + ballObj.h) < (goalKeeperBlue.y + goalKeeperBlue.h) && (ballObj.x + ballObj.w) > goalKeeperBlue.h){
         ballObj.isBallMovingDown = false;
         ballObj.isBallMovingRight = false;
     }
     if(ballObj.y > goalKeeperRed.y && (ballObj.y + ballObj.h) < (goalKeeperRed.y + goalKeeperRed.h) && (ballObj.x + ballObj.w) < goalKeeperRed.h){
         ballObj.isBallMovingDown = true;
         ballObj.isBallMovingRight = false;
     } */
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
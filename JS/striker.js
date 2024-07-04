class Player{
    constructor(team){
        //propiedades jugador
        this.node = document.createElement("img");
        gameBoxNode.append(this.node);
        this.team = team;

        
        this.x = 300;
        this.y = 200;
        this.w = 30;
        this.h = 30;

        //configuración inicial del elemento

        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = "absolute";
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;

        this.playerSpeed = 3;
    }

    //aquí irán los métodos de cada jugador


}

class Striker extends Player{
    constructor(team){
        super(team);
        if(team === "red"){
            this.node.src = "./images/player-green.png"

            this.h = 75;
            this.w = 65;
            this.x = 200;
            this.y = 200;

            this.node.style.width = `${this.w}px`;
            this.node.style.height = `${this.h}px`;
            this.node.style.position = "absolute";
            this.node.style.top = `${this.y}px`;
            this.node.style.left = `${this.x}px`;

        } else if(team === "blue"){
            this.node.src = "./images/player-yellow.png"

            this.h = 75;
            this.w = 65;
            this.x = 500;
            this.y = 200;

            this.node.style.width = `${this.w}px`;
            this.node.style.height = `${this.h}px`;
            this.node.style.position = "absolute";
            this.node.style.top = `${this.y}px`;
            this.node.style.left = `${this.x}px`;
        }
    }
}

class GoalKeeper extends Player{
    constructor(team){
        super(team);
        this.isGkMovingDown = true;
        this.topLimit = 0;
        this.botLimit = gameBoxNode.offsetHeight;

        if(team === "red"){
            this.node.src = "./images/goalkeeper.png"
            this.x = 0;
            this.node.style.left = `${this.x}px`;
        } else if(team === "blue"){
            this.node.src = "./images/goalkeeper.png"
            this.x =300;
            this.node.style.left = `(${this.x}-${this.w})px`;
        }
        
        
    }
    goalKeeperMovement(){
        if(this.isGkMovingDown === true){
            this.y += this.playerSpeed;
            this.node.style.top = `${this.y}px`;
        } else if(this.isGkMovingDown === false){
            this.y -= this.playerSpeed;
            this.node.style.top = `${this.y}px`;
        }
    }

    goalKeeperLimits(){
        
    
        if(this.y > this.botLimit - this.h){
            this.isGkMovingDown = false;
        }
        if(this.y < 0){
            this.isGkMovingDown = true;
        }
    }
}



/* class Defender extends Player{
    constructor(team){
        super(team);
        if(team === "red"){
            this.node.src = "./images/player-red.png"
        } else if(team === "blue"){
            this.node.src = "./images/player-blue.png"
        }
    }
} */
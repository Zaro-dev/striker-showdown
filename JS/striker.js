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
    }

    //aquí irán los métodos de cada jugador


}

class Striker extends Player{
    constructor(team){
        super(team);
        if(team === "red"){
            this.node.src = "./images/player-red.png"
        } else if(team === "blue"){
            this.node.src = "./images/player-blue.png"
        }
    }
}

class GoalKeeper extends Player{
    constructor(team){
        super(team);
        if(team === "red"){
            this.node.src = "./images/gk-red.png"
        } else if(team === "blue"){
            this.node.src = "./images/gk-blue.png"
        }
    }
}

class Defender extends Player{
    constructor(team){
        super(team);
        if(team === "red"){
            this.node.src = "./images/player-red.png"
        } else if(team === "blue"){
            this.node.src = "./images/player-blue.png"
        }
    }
}
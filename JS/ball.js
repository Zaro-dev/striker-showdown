class Ball{
    constructor(){
        //propiedades balón
        this.node = document.createElement("img");
        this.node.src="./images/ball.png";
        gameBoxNode.append(this.node);

        
        this.x = 50;
        this.y = 50;
        this.w = 40;
        this.h = 35;

        //configuración inicial del elemento

        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = "absolute";
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
    }

    

    
    
    //métodos balón

}
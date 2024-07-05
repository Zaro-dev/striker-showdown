class Ball {
  constructor() {
    //propiedades balón
    this.node = document.createElement("img");
    this.node.src = "./images/disc.png";
    gameBoxNode.append(this.node);

   

    this.x = 355;
    this.y = 225;
    this.w = 30;
    this.h = 30;

    //configuración inicial del elemento

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    this.speed = 4;
    this.isBallMovingRight = false;
    this.isBallMovingDown = false;

    
  }

  // Desplazamiento de balón

  ballMovement() {
    if (this.isBallMovingRight) {
      this.x += this.speed;
      this.node.style.left = `${this.x}px`;
    } else {
      this.x -= this.speed;
      this.node.style.left = `${this.x}px`;
    }

    if (this.isBallMovingDown) {
      this.y += this.speed;
      this.node.style.top = `${this.y}px`;
    } else {
      this.y -= this.speed;
      this.node.style.top = `${this.y}px`;
    }
  }
}

# HOCKEY SHOWDOWN

## [Play the Game!](www.your-deploy-url-here.com)




# Description

Hockey Showdown es un juego para dos personas que busca compartir la diversión en compañía a través de un juego tan clásico como es el air-hockey.


# Main Functionalities

- Desplazamiento manual de distintos jugadores de forma simultánea.
- Movimiento periódico delimitado de elementos.
- Sistema de colisiones entre disco y distintos elementos jugables.
- Sistema de puntuación marcador actualizado con cada gol.
- Restaurado de posiciones con cada gol.

# Backlog Functionalities

- Histórico de victorias con jugadores
- Modalidades distintas de juego (con temporizador // mayor cantidad de goles)
- Variar ángulo de rebote según golpeo.

# Technologies used

- HTML, CSS, JavaScript, DOM manipulation.

# States

- Pantalla de inicio.
- Pantalla de juego.

# Proyect Structure

- List here sections for your your different JS files.
- One for main.js to manage DOM elements, one for the Game class and one for each other class file of your game.
- Inside each file you can list the functions, clases, properties and methods of your code.

Example:

## main.js

- startGame(): Se encarga de accionar todos los elementos que interactúan en el inicio del juego a través del botón de start inicial. Activa el intervalo de tiempo en el que se basa el tempo del juego.

- gameWinner(): Se encarga de limpiar el game box de elementos y resetea el intervalo de tiempo del juego junto con los marcadores.

- gameLoop(): se encarga de recoger en su haber todas las funciones que necesitan ser chekeadas constantemente en el intervalo, ej: colisiones.

-isGoal(): Se encarga de recolocar el disco en su posición inicial cada vez que se canta un gol.

-ballCollition(): Se encarga de configurar todas las mecánicas de colisión introducidas en el juego.


## striker.js 

- Player () {
    this.x;
    this.y;
    this.w;
    this.h;
}
- Tiene dos subclases: Striker y Goalkeeper.
- Striker tiene movilidad completa por el mapa y es controlado por el usuario a través de las teclas WASD o Arrow Directions:
- Goalkeeper tiene una movilidad limitada al eje Y donde se dedica a subir y bajar de forma constante

## ball.js
- Aquí se recogen todas las características del disco y la mecánica de movimiento que va a llevar.

# Extra Links 

### Sketch
[Link](www.your-excalidraw-url-here.com)

### Trello
[Link](www.your-trello-url-here.com)

### Slides
[Link](www.your-slides-url-here.com)

## Deploy
[Link](www.your-deploy-url-here.com)
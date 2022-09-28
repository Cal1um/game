import Game from "/game.js";

let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext('2d');



const GAME_WIDTH = 1170;
const GAME_HEIGHT = 630;


let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();



let LastTime = 0;

function gameLoop(TimeStamp) {
    let deltaTime = TimeStamp - LastTime;
    LastTime = TimeStamp;

    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);

    game.update(deltaTime)
    game.draw(ctx)

    requestAnimationFrame(gameLoop);
}
gameLoop();
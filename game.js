import Player from "/player.js";
import InputHandler from "/input.js";
import Rock from "/Rock.js"


import { buildLevel, level1 } from "/levels.js"
import Projectile from "/projectile.js";


export default class Game{
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        
    }

    start(){

        this.player = new Player(this);

        this.projectile = new Projectile(this)

        let tile = buildLevel(this, level1);

        new InputHandler(this.player, this.projectile);


        this.gameObjects = [...tile, this.projectile, this.player,];

    }

    update(deltaTime){
        this.gameObjects.forEach((Object) => Object.update(deltaTime))
    }
    draw(ctx){
        this.gameObjects.forEach((Object) => Object.draw(ctx))
    };
}
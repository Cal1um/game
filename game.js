import Player from "/player.js";
import InputHandler from "/input.js";
import Rock from "/Rock.js"
import ProjectileDely from "/projectiledely.js";


import { buildLevel, level1, level2 } from "/levels.js"
import ProjectileUp from "/projectileup.js";
import ProjectileDown from "/projectiledown.js";
import ProjectileLeft from "/projectileleft.js";
import ProjectileRight from "/projectileright.js";


export default class Game{
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.currentLevel = 0;
        
    }

    start(){

        this.player = new Player(this);

        this.projectileup = new ProjectileUp(this)
        this.projectiledown = new ProjectileDown(this)
        this.projectileleft = new ProjectileLeft(this)
        this.projectileright = new ProjectileRight(this)

        this.projectiledely = new ProjectileDely(this)

        this.levels = [level1, level2]

        let tile = buildLevel(this, this.levels[this.currentLevel]);

        new InputHandler(this.player, this.projectileup, this.projectiledown, this.projectileleft, this.projectileright);


        this.gameObjects = [...tile, this.projectileup, this.projectiledown, this.projectileleft, this.projectileright, this.player, this.projectiledely];

        this.currentLevel = 1 

    }

    

    update(deltaTime){
        this.gameObjects.forEach((Object) => Object.update(deltaTime))
    }
    draw(ctx){
        this.gameObjects.forEach((Object) => Object.draw(ctx))
    };
}
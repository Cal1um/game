import Player from "/player.js";
import InputHandler from "/input.js";
import Rock from "/Rock.js"
import ProjectileDely from "/projectiledely.js";
import Enemy from "/enemy.js";


import { buildLevel, level0, level1, level2, level3, level4, level5, level6 } from "/levels.js"
import ProjectileUp from "/projectileup.js";
import ProjectileDown from "/projectiledown.js";
import ProjectileLeft from "/projectileleft.js";
import ProjectileRight from "/projectileright.js";

import Collision from "/collision.js";


export default class Game{
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;    
        
        this.firstloop = 0

        this.RightLeft = 5
        this.UpDown = 5
        
        this.layer = []
        
    }
    
    newlevel(){
        
        
        this.random = Math.floor(Math.random() * 6) + 1;
        if(this.firstloop === 0){
            
            for (var i = 0; i < 11; i++){
                this.layer[i] = [];
                for (var j = 0; j < 11; j++){
                    this.layer[i][j] = Math.floor(Math.random() * 6) + 1;
    
                }
            }
            this.layer[5][5] = 0
            console.log(this.layer)
        }
        
        
        this.firstloop = 1

        this.currentLevel = this.layer[this.RightLeft][this.UpDown]

        if(this.player.newlevel === 1){ //right door
            this.RightLeft += 1
            this.room = this.layer[this.RightLeft][this.UpDown]
            this.currentLevel = this.room

            console.log(this.player.newlevel)
            this.player.position.x = this.gameWidth - this.player.width
            this.player.newlevel = 0
        }

        if(this.player.newlevel === 2){ //left door
            this.RightLeft -= 1
            this.room = this.layer[this.RightLeft][this.UpDown]
            this.currentLevel = this.room

            console.log(this.player.newlevel)
            this.player.position.x = 0
            this.player.newlevel = 0
        }

        if(this.player.newlevel === 3){ //bottum door
            this.UpDown += 1
            this.room = this.layer[this.RightLeft][this.UpDown]
            this.currentLevel = this.room

            
            console.log(this.player.newlevel)
            this.player.position.y = this.gameHeight - this.player.height
            this.player.newlevel = 0
        }

        if(this.player.newlevel === 4){ //top door
            this.UpDown -= 1
            this.room = this.layer[this.RightLeft][this.UpDown]
            this.currentLevel = this.room


            this.player.position.y = 0
            this.player.newlevel = 0
        }
        
        this.levels = [level0, level1, level2, level3, level4, level5, level6]

        let tile = buildLevel(this, this.levels[this.currentLevel]);
        this.tile = tile
        this.collision = new Collision(this, this.tile, this.projectileup, this.projectiledown, this.projectileleft, this.projectileright, this.player);

        new InputHandler(this.player, this.projectileup, this.projectiledown, this.projectileleft, this.projectileright);

        this.gameObjects = [...tile, this.projectileup, this.projectiledown, this.projectileleft, this.projectileright, this.player, this.projectiledely, this.collision];
        
        
    }

    start(){
        this.player = new Player(this, this.currentLevel);
        this.enemy = new Enemy(this);

        this.projectileup = new ProjectileUp(this);
        this.projectiledown = new ProjectileDown(this);
        this.projectileleft = new ProjectileLeft(this);
        this.projectileright = new ProjectileRight(this);
        this.rock = new Rock(this);

        this.projectiledely = new ProjectileDely(this);

        
        

        if(this.firstloop === 0){
            this.newlevel()            
        }
        this.firstloop = 1      

        this.levels = [level0, level1, level2, level3, level4, level5, level6]

        let tile = buildLevel(this, this.levels[this.currentLevel]);

        new InputHandler(this.player, this.projectileup, this.projectiledown, this.projectileleft, this.projectileright, this.collision);
        
        this.tile = tile
        
        this.gameObjects = [...tile, this.projectileup, this.projectiledown, this.projectileleft, this.projectileright, this.player, this.projectiledely, this.collision];
        
    }

    

    update(deltaTime){
        this.gameObjects.forEach((Object) => Object.update(deltaTime))
    }
    draw(ctx){
        this.gameObjects.forEach((Object) => Object.draw(ctx))
    };
}
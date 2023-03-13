import Player from "./player.js";
import InputHandler from "./input.js";
import Rock from "./rock.js"
import ProjectileDely from "./projectiledely.js";
import Enemy from "./enemy.js";
import EnemyScaling from "./enemyscaling.js";


import { buildLevel, level0, level1, level2, level3, level4, level5, level6, levelboss, levelitem, level1clear, level2clear, level3clear, level4clear, level5clear, level6clear, levelitemclear, levelbossclear } from "./levels.js"
import ProjectileUp from "./projectileup.js";
import ProjectileDown from "./projectiledown.js";
import ProjectileLeft from "./projectileleft.js";
import ProjectileRight from "./projectileright.js";

import Collision from "./collision.js";


export default class Game{
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;    
        
        this.firstloop = 0;

        this.RightLeft = 5;
        this.UpDown = 5;
        
        this.layer = [];

        this.removeprojctile = false;

        this.menu = 1;
        
        this.deathfloor = 0;
        this.paused = 0;
    }
    
    newlevel(){
        
        //map generation
        this.random = Math.floor(Math.random() * 6) + 1;
        if(this.firstloop === 0){
            
            for (var i = 0; i < 11; i++){
                this.layer[i] = [];
                for (var j = 0; j < 11; j++){
                    this.layer[i][j] = Math.floor(Math.random() * 6) + 1;
    
                }
            }
            this.layer[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)] = 8
            this.layer[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)] = 8
            this.layer[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)] = 8
            this.layer[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)] = 8
            this.layer[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)] = 8
            this.layer[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)] = 8
            this.layer[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)] = 8
            this.layer[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)] = 8
            this.layer[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)] = 8
            this.layer[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)] = 8
            this.layer[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)] = 8
            this.layer[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)] = 8
            this.layer[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)] = 8
            this.layer[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)] = 8
            this.layer[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)] = 8
            this.layer[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)] = 8
            this.layer[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)] = 8
            this.layer[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)] = 8
            this.layer[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)] = 8
            this.layer[Math.floor(Math.random() * 11)][Math.floor(Math.random() * 11)] = 8
            this.layer[5][5] = 0
        }
        
        
        this.firstloop = 1

        this.currentLevel = this.layer[this.RightLeft][this.UpDown]

        try{
            if(this.player.newlevel === 1){ //right door
                this.RightLeft += 1
                this.room = this.layer[this.RightLeft][this.UpDown]
                this.currentLevel = this.room
    
                this.player.position.x = this.gameWidth - this.player.width
                this.player.newlevel = 0
            }
    
            if(this.player.newlevel === 2){ //left door
                this.RightLeft -= 1
                this.room = this.layer[this.RightLeft][this.UpDown]
                this.currentLevel = this.room
    
                this.player.position.x = 0
                this.player.newlevel = 0
            }
    
            if(this.player.newlevel === 3){ //top door
                this.UpDown += 1
                this.room = this.layer[this.RightLeft][this.UpDown]
                this.currentLevel = this.room
    
                
                this.player.position.y = this.gameHeight - this.player.height
                this.player.newlevel = 0
            }
    
            if(this.player.newlevel === 4){ //bottom door
                this.UpDown -= 1
                this.room = this.layer[this.RightLeft][this.UpDown]
                this.currentLevel = this.room
    
    
                this.player.position.y = 0
                this.player.newlevel = 0
            }
            if(this.RightLeft > 10 || this.RightLeft < 0 || this.UpDown > 10 || this.UpDown < 0){
                this.RightLeft = 5;
                this.UpDown = 5;
                this.layer[5][5] = 7;
                this.player.position.x = this.gameWidth / 2;
                this.player.position.y = this.gameHeight - 120;
                this.currentLevel = this.layer[this.RightLeft][this.UpDown];
            }
        }
        catch{
            this.RightLeft = 5;
            this.UpDown = 5;
            this.layer[5][5] = 7;
            this.player.position.x = this.gameWidth / 2;
            this.player.position.y = this.gameHeight - 120;
            this.currentLevel = this.layer[this.RightLeft][this.UpDown];
        }


        this.levels = [level0, level1, level2, level3, level4, level5, level6, levelboss, levelitem, level0, level1clear, level2clear, level3clear, level4clear, level5clear, level6clear, levelbossclear, levelitemclear]

        let tile = buildLevel(this, this.levels[this.currentLevel]);
        this.tile = tile
        this.collision = new Collision(this, this.tile, this.projectileup, this.projectiledown, this.projectileleft, this.projectileright, this.player);

        new InputHandler(this.player, this.projectileup, this.projectiledown, this.projectileleft, this.projectileright);

        this.gameObjects = [...tile, this.projectileup, this.projectiledown, this.projectileleft, this.projectileright, this.player, this.projectiledely, this.collision, this.enemyscaling];

        
        
    }
    

    start(){
        this.enemyscaling = new EnemyScaling(this);
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
                console.log(this.player.health)           
            }
            this.firstloop = 1

        this.levels = [level0, level1, level2, level3, level4, level5, level6, levelboss, levelitem, level0, level1clear, level2clear, level3clear, level4clear, level5clear, level6clear, levelbossclear, levelitemclear]
    
        let tile = buildLevel(this, this.levels[this.currentLevel]);

        new InputHandler(this.player, this.projectileup, this.projectiledown, this.projectileleft, this.projectileright, this.collision);
        
        this.tile = tile
        
        this.gameObjects = [...tile, this.projectileup, this.projectiledown, this.projectileleft, this.projectileright, this.player, this.projectiledely, this.collision, this.enemyscaling];
            
        localStorage.floor = Number(localStorage.floor)
        if(this.deathfloor > localStorage.floor){
            localStorage.floor = this.deathfloor
        }
        if(localStorage.floor <! 0 ){
            this.localStorage.floor = 0
        }
       
    }

    

    update(deltaTime){
        if(this.paused == 0){
            this.gameObjects.forEach((Object) => Object.update(deltaTime))
        }
        

    }
    draw(ctx){
        this.gameObjects.forEach((Object) => Object.draw(ctx))
        ctx.fillStyle = "lime"
        ctx.fillText("Health " + Math.round(this.player.health), this.gameWidth / 2 - 540, this.gameHeight - 60)
        ctx.fillStyle = "crimson"
        ctx.fillText("Damage " + this.player.damage, this.gameWidth / 2 - 360, this.gameHeight - 60)
        ctx.fillStyle = "lightblue"
        ctx.fillText("Speed " + this.player.maxspeed.x, this.gameWidth / 2 - 180, this.gameHeight - 60)
        ctx.fillStyle = "yellow"
        ctx.fillText("FireRate " + this.projectiledely.delybetweenshot, this.gameWidth / 2 - 470, this.gameHeight - 20)
        ctx.fillStyle = "blue"
        ctx.fillText("ShotSpeed " + this.player.projectilespeed, this.gameWidth / 2 - 290, this.gameHeight - 20)
        ctx.fillStyle = "black"
        ctx.fillText("Floors cleared " + this.enemyscaling.floorscleared, this.gameWidth - 540, this.gameHeight - 35)
        ctx.fillStyle = "black"
        ctx.fillText("Current Room " + "[" + this.RightLeft + "]" + " " + "[" + this.UpDown + "]", this.gameWidth - 300, this.gameHeight - 35)

        if(this.menu == 1){
            ctx.fillStyle = "burlywood";
            ctx.fillRect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = "black";
            ctx.font = "30px Arial"
            ctx.fillText("Press space bar to begin", this.gameWidth / 2 - 500, this.gameHeight / 2)
            ctx.fillText("Your highest floor reached: " + localStorage.floor, this.gameWidth / 2 - 500, this.gameHeight / 2 + 100)
        }
        if(this.menu == 2){
            ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
            ctx.fillRect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
            ctx.font = "30px Arial"
            ctx.fillText("Press space bar to continue", this.gameWidth / 2 - 500, this.gameHeight / 2)
        }
    };
}
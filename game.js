import Player from "/player.js";
import InputHandler from "/input.js";
import Rock from "/Rock.js"
import ProjectileDely from "/projectiledely.js";


import { buildLevel, level0, level1, level2, level3, level4, level5, level6 } from "/levels.js"
import ProjectileUp from "/projectileup.js";
import ProjectileDown from "/projectiledown.js";
import ProjectileLeft from "/projectileleft.js";
import ProjectileRight from "/projectileright.js";


export default class Game{
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;    
        
        this.firstloop = 0

        this.RightLeft = 5
        this.UpDown = 5

       
    }

    newlevel(){
        console.log(map[5][7])

        if(this.player.newlevel === 1){ //right door
            this.room = map[this.RightLeft][this.UpDown]
            this.currentLevel = this.room

            console.log(this.player.newlevel)
            this.player.position.x = this.gameWidth - this.player.width
        }

        if(this.player.newlevel === 2){ //left door
            this.room = map[this.RightLeft][this.UpDown]
            this.currentLevel = this.room

            console.log(this.player.newlevel)
            this.player.position.x = 0
        }

        if(this.player.newlevel === 3){ //bottum door
            this.room = map[this.RightLeft][this.UpDown]
            this.currentLevel = this.room

            
            console.log(this.player.newlevel)
            this.player.position.y = this.gameHeight - this.player.height
        }

        if(this.player.newlevel === 4){ //top door
            this.room = map[this.RightLeft][this.UpDown]
            this.currentLevel = this.room


            console.log(this.player.newlevel)
            this.player.position.y = 0
        }
        
        this.levels = [level0, level1, level2, level3, level4, level5, level6]

        let tile = buildLevel(this, this.levels[this.currentLevel]);

        new InputHandler(this.player, this.projectileup, this.projectiledown, this.projectileleft, this.projectileright);

        
        this.gameObjects = [...tile, this.projectileup, this.projectiledown, this.projectileleft, this.projectileright, this.player, this.projectiledely];

    }

    start(){
        this.random = Math.floor(Math.random() * 6) + 1;
        this.player = new Player(this, this.currentLevel);

        this.projectileup = new ProjectileUp(this);
        this.projectiledown = new ProjectileDown(this);
        this.projectileleft = new ProjectileLeft(this);
        this.projectileright = new ProjectileRight(this);

        this.projectiledely = new ProjectileDely(this);

        var map = [];
        for (var i = 0; i < 10; i++){
            map[i] = [];
            for (var j = 0; j < 10; j++){
                map[i][j] = Math.floor(Math.random() * 6) + 1;
                
            }
        }
        
        map[5][5] = 0

        
        console.log(map[5][7])
        

        this.currentLevel = map[this.RightLeft][this.UpDown]

        this.levels = [level0, level1, level2, level3, level4, level5, level6]

        let tile = buildLevel(this, this.levels[this.currentLevel]);

        new InputHandler(this.player, this.projectileup, this.projectiledown, this.projectileleft, this.projectileright);

        
        this.gameObjects = [...tile, this.projectileup, this.projectiledown, this.projectileleft, this.projectileright, this.player, this.projectiledely];
        
    }

    

    update(deltaTime){
        this.gameObjects.forEach((Object) => Object.update(deltaTime))
    }
    draw(ctx){
        this.gameObjects.forEach((Object) => Object.draw(ctx))
    };
}
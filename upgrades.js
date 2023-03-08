export default class Upgrade {
    constructor(game, position) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game
        this.maxspeed = {
            x: 0,

            y: 0
        };
        this.speed = {
            x: 0,

            y: 0
        };
        this.width = 30
        this.height = 30

        this.position = position;
        this.size = 30;
        this.health = 1
        this.colorselection = ["crimson", "lime", "lightblue", "yellow", "blue"]
        this.color = this.colorselection[Math.floor(Math.random() * 5)]

        this.id = 400
        this.collided = 0
    }

    colliderLeft(Collider){
        if(Collider.id != 200){
            this.collided = 1
            this.health = 0  
        }
    }
    colliderRight(Collider){
        if(Collider.id != 200){
            this.collided = 1
            this.health = 0  
        }
    }
    colliderUp(Collider){
        if(Collider.id != 200){
            this.collided = 1
            this.health = 0  
        }
    }
    colliderDown(Collider){
        if(Collider.id != 200){
            this.collided = 1
            this.health = 0  
        }
    }


    update(deltaTime){
        this.game.tile = this.game.tile.filter(object => object.health > 0)

        //health increase
        if(this.collided === 1 && this.color === "lime"){
            this.game.player.health += 10
            this.color = "burlywood"
        }
        //damage
        if(this.collided === 1 && this.color === "crimson"){
            this.game.player.damage += 2
            this.color = "burlywood"
        }
        //speed
        if(this.collided === 1 && this.color === "lightblue"){
            this.game.player.maxspeed.y += 1
            this.game.player.maxspeed.x += 1
            this.color = "burlywood"
        }
        //firerate
        if(this.collided === 1 && this.color === "yellow"){
            this.game.projectiledely.delybetweenshot -= 2
            this.color = "burlywood"
        }
        //shotspeed
        if(this.collided === 1 && this.color === "blue"){
            if(this.game.enemy.size - this.game.enemy.speed.x - this.game.player.maxspeed.x > this.game.player.projectilespeed){
                this.game.player.projectilespeed += 1 
            }
            this.color = "burlywood"
        }

    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(
            this.position.x, 
            this.position.y, 
            this.size, 
            this.size
            );
    }

}
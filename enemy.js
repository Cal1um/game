export default class Enemy {
    constructor(game, position) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game

        this.health = 2

        this.id = 300
        this.damage = 1

        this.position = position
        this.width = 30;
        this.height = 30;
        this.size = 30;
        this.speed = 2.5;
        this.maxspeed = {
            x: 2.5,

            y: 2.5
        };
        this.dely = 0

        this.time = 0
        this.delybetweenattack = 15
    }

    colliderLeft(Collider){
        this.position.x = Collider.position.x - this.width
        if(Collider == this.game.player){
            if(this.dely >= 1){
                this.dely = 0
                this.game.player.health -= 1
                console.log(this.game.player.health)                
            }
        }
    }
    colliderRight(Collider){
        this.position.x = Collider.position.x + Collider.size
        if(Collider == this.game.player){
            if(this.dely >= 1){
                this.dely = 0
                this.game.player.health -= 1
                console.log(this.game.player.health)                
            }
        }
    }
    colliderUp(Collider){
        this.position.y = Collider.position.y + Collider.size
        if(Collider == this.game.player){
            if(this.dely >= 1){
                this.dely = 0
                this.game.player.health -= 1
                console.log(this.game.player.health)                
            }
        }
    }
    colliderDown(Collider){
        this.position.y = Collider.position.y - this.width
        if(Collider == this.game.player){
            if(this.dely >= 1){
                this.dely = 0
                this.game.player.health -= 1
                console.log(this.game.player.health)                
            }
        }
    }

    update(deltaTime){
        if(this.position.x < this.game.player.position.x + 10){
            this.position.x += this.speed
        }
        if(this.position.x > this.game.player.position.x + 10){
            this.position.x -= this.speed
        }
        if(this.position.y < this.game.player.position.y + 10){
            this.position.y += this.speed
        }
        if(this.position.y > this.game.player.position.y + 10){
            this.position.y -= this.speed
        }

        this.time++
        if(this.time >= this.delybetweenattack){
            if(this.dely < 1){
                this.dely++
                this.time = 0
            }
        }
        console.log(this.health)
    }

    draw(ctx){
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x, 
            this.position.y, 
            this.width, 
            this.height
            );
    }
}
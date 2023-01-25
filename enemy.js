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
        this.speed = {
            x: 2.5,

            y: 2.5
        };
        this.maxspeed = {
            x: 2.5,

            y: 2.5
        };
        this.dely = 0

        this.time = 0
        this.delybetweenattack = 15
        this.color = "rgba(255, 0, 0, 1)"
    }

    colliderLeft(Collider){
        this.position.x = Collider.position.x - this.width
        if(Collider == this.game.player){
            if(this.dely >= 1){
                this.dely = 0
                this.game.player.health -= 1              
            }
        }
    }
    colliderRight(Collider){
        this.position.x = Collider.position.x + Collider.size
        if(Collider == this.game.player){
            if(this.dely >= 1){
                this.dely = 0
                this.game.player.health -= 1                
            }
        }
    }
    colliderUp(Collider){
        this.position.y = Collider.position.y + Collider.size
        if(Collider == this.game.player){
            if(this.dely >= 1){
                this.dely = 0
                this.game.player.health -= 1              
            }
        }
    }
    colliderDown(Collider){
        this.position.y = Collider.position.y - this.width
        if(Collider == this.game.player){
            if(this.dely >= 1){
                this.dely = 0
                this.game.player.health -= 1               
            }
        }
    }

    update(deltaTime){
        if(this.health > 0){
            if(this.position.x < this.game.player.position.x + 10){
                this.position.x += this.speed.x
            }
            if(this.position.x > this.game.player.position.x + 10){
                this.position.x -= this.speed.x
            }
            if(this.position.y < this.game.player.position.y + 10){
                this.position.y += this.speed.y
            }
            if(this.position.y > this.game.player.position.y + 10){
                this.position.y -= this.speed.y
            }

            this.time++
            if(this.time >= this.delybetweenattack){
                if(this.dely < 1){
                    this.dely++
                    this.time = 0
                }
            }
        }

        this.game.tile = this.game.tile.filter(object => object.health != 0)
        if(this.health === 0){
            this.color = "rgba(255, 0, 0, 0)"
        }
        console.log(this.position)
    }

    draw(ctx){
        ctx.opacity = this.opacity
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, 
            this.position.y, 
            this.width, 
            this.height
            );
    }
}
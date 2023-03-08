export default class Enemy {
    constructor(game, position) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game

        this.health = this.game.enemyscaling.enemyhealth

        this.id = 300
        this.damage = this.game.enemyscaling.enemydamage

        this.position = position
        this.width = 30;
        this.height = 30;
        this.size = 30;
        this.speed = {
            x: this.game.enemyscaling.enemyspeed.x,

            y: this.game.enemyscaling.enemyspeed.y
        };
        this.maxspeed = {
            x: this.game.enemyscaling.enemymaxspeed.x,

            y: this.game.enemyscaling.enemymaxspeed.y
        };
        this.dely = 0

        this.time = 0
        this.delybetweenattack = 20
        this.color = "rgba(255, 0, 0, 1)"
    }

    colliderLeft(Collider){
        if(Collider.id != 200){
            this.position.x = Collider.position.x - this.width                
        }
        if(Collider == this.game.player){
            if(this.dely >= 1){
                this.dely = 0
                this.game.player.health -= this.damage        
            }
        }
    }
    colliderRight(Collider){
        if(Collider.id != 200){
            this.position.x = Collider.position.x + Collider.size         
        }
        if(Collider == this.game.player){
            if(this.dely >= 1){
                this.dely = 0
                this.game.player.health -= this.damage                      
            }
        } 

    }
    colliderUp(Collider){
        if(Collider.id != 200){
            this.position.y = Collider.position.y + Collider.size         
        }
        if(Collider == this.game.player){
            if(this.dely >= 1){
                this.dely = 0
                this.game.player.health -= this.damage               
            }
        } 
        
    }
    colliderDown(Collider){
        if(Collider.id != 200){
            this.position.y = Collider.position.y - this.width      
        }
        if(Collider == this.game.player){
            if(this.dely >= 1){
                this.dely = 0
                this.game.player.health -= this.damage              
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

        this.game.tile = this.game.tile.filter(object => object.health > 0)
        if(this.health <= 0){
            this.color = "rgba(255, 0, 0, 0)"
        }
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
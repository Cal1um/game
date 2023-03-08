export default class Boss {
    constructor(game, position) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game
        this.maxspeed = {
            x: this.game.enemyscaling.bossmaxspeed.x,

            y:  this.game.enemyscaling.bossmaxspeed.y
        };
        this.speed = {
            x: this.game.enemyscaling.bossspeed.x,

            y: this.game.enemyscaling.bossspeed.y
        };
        this.width = 90
        this.height = 90

        this.dely = 0

        this.time = 0
        this.delybetweenattack = 15

        this.position = position;
        this.size = 90;
        this.health = this.game.enemyscaling.bosshealth
        this.id = 300
        this.color = "rgba(255, 0, 0, 1)"
        this.damage = this.game.enemyscaling.bossdamage
        this.delete = false
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
        this.game.tile = this.game.tile.filter(object => object.health > 0)
        if(this.health <= 0){
            this.color = "rgba(255, 0, 0, 0)"
            this.game.firstloop = 0
            this.game.player.newlevel = 0
            this.game.player.position.x = this.game.gameWidth / 2
            this.game.player.position.y = this.game.gameHeight / 2
            this.game.enemyscaling.scale();
            this.game.newlevel();
        }
        console.log(this.health)

        if(this.health > 0){
            if(this.position.x < this.game.player.position.x - 20){
                this.position.x += this.speed.x
            }
            if(this.position.x > this.game.player.position.x - 20){
                this.position.x -= this.speed.x
            }
            if(this.position.y < this.game.player.position.y - 20){
                this.position.y += this.speed.y
            }
            if(this.position.y > this.game.player.position.y - 20){
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
export default class Boss {
    constructor(game, position) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game
        this.maxspeed = {
            x: 3,

            y: 3
        };
        this.speed = {
            x: 3,

            y: 3
        };
        this.width = 90
        this.height = 90

        this.position = position;
        this.size = 90;
        this.health = 50
        this.delete = false
    }

    colliderLeft(Collider){
        if(Collider.id != 200){
            this.position.x = Collider.position.x - this.width                
        }
        if(Collider == this.game.player){
            if(this.dely >= 1){
                this.dely = 0
                this.game.player.health -= 1           
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
                this.game.player.health -= 1                        
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
                this.game.player.health -= 1                    
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
                this.game.player.health -= 1                    
            }
        }
    }


    update(deltaTime){
        this.game.tile = this.game.tile.filter(object => object.health > 0)
        if(this.health <= 0){
            this.color = "rgba(255, 0, 0, 0)"
        }
    }

    draw(ctx){
        ctx.fillStyle = "red";
        ctx.fillRect(
            this.position.x, 
            this.position.y, 
            this.size, 
            this.size
            );
    }

}
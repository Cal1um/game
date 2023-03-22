export default class ProjectileUp {
    constructor(game) {

        this.game = game

        this.position = {
            x: this.game.player.position.x + 20,

            y: this.game.player.position.y + 20
        }
        this.damage = 1
        this.width = this.game.player.projectilewidth
        this.height = this.game.player.projectileheight
        this.size = this.game.player.projectilesize
        this.speed = {
            x: -this.game.player.projectilespeed,

            y: -this.game.player.projectilespeed
        };
        this.maxspeed = {
            x: this.game.player.projectilespeed,

            y: this.game.player.projectilespeed
        }
        this.delete = false;
        this.id = 200
    }

    projectiles = [];

    shootup(){
        this.game.projectiledown.shoot = 0
        this.game.projectileleft.shoot = 0
        this.game.projectileright.shoot = 0
        this.shoot = 1
    }

    shootstop(){
        this.shoot = 0
    }

    colliderLeft(Collider){
        if(Collider.id != 200){
        if(Collider != this.game.player){
            this.delete = true
        }
        if(Collider.id === 300){
            if(this.dely >= 1){

            }
            this.delete = true
            Collider.health -= this.game.player.damage;
        }
    }
    }
    colliderRight(Collider){
        if(Collider.id != 200){
            if(Collider != this.game.player){
                this.delete = true
            }
            if(Collider.id === 300){
                if(this.dely >= 1){
    
                }
                this.delete = true
                Collider.health -= this.game.player.damage;
            }
        }
    }
    colliderUp(Collider){
        if(Collider.id != 200){
            if(Collider != this.game.player){
                this.delete = true
            }
            if(Collider.id === 300){
                if(this.dely >= 1){
    
                }
                this.delete = true
                Collider.health -= this.game.player.damage;
            }
        }
    }
    colliderDown(Collider){
        if(Collider.id != 200){
            if(Collider != this.game.player){
                this.delete = true
            }
            if(Collider.id === 300){
                if(this.dely >= 1){
    
                }
                this.delete = true
                Collider.health -= this.game.player.damage;
            }
        }
    }



    update(deltaTime){
        if(this.shoot === 1){
            if(this.game.projectiledely.dely >= 1){
                this.projectiles.push(new ProjectileUp(this.game));
                this.game.projectiledely.dely = 0
            }
        }

        this.projectiles = this.projectiles.filter(object => object.delete === false);
    }



    draw(ctx){
        this.projectiles.forEach((ProjectileUp) => ProjectileUp.draw(ctx));
        this.position.y += this.speed.x
            ctx.fillStyle = "green"
            ctx.fillRect(
                this.position.x, 
                this.position.y, 
                this.size, 
                this.size
            )
    }
}

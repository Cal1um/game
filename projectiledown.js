export default class ProjectileDown {
    constructor(game) {

        this.game = game

        this.damage = 1
        this.speed = {
            x: this.game.player.projectilespeed,

            y: this.game.player.projectilespeed
        };

        this.width = this.game.player.projectilewidth
        this.height = this.game.player.projectileheight
        this.size = this.game.player.projectilesize
        this.maxspeed = {
            x: this.game.player.projectilespeed,

            y: this.game.player.projectilespeed
        }
        this.delete = false;
        this.id = 200

        this.position = {
            x: this.game.player.position.x + this.game.player.size - this.size * 3,

            y: this.game.player.position.y + this.game.player.size - this.size * 3
        }
    }

    projectiles = [];

    shootdown(){
        this.game.projectileup.shoot = 0
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
                this.projectiles.push(new ProjectileDown(this.game));
                this.game.projectiledely.dely = 0
            }
        }

        this.position = {
            x: this.game.player.position.x + this.size,

            y: this.game.player.position.y + this.size
        }

        this.projectiles = this.projectiles.filter(object => object.delete === false);
    }
    
    draw(ctx){
        this.projectiles.forEach((ProjectileDown) => ProjectileDown.draw(ctx));
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

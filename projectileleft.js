export default class ProjectileLeft {
    constructor(game) {

        this.game = game

        this.position = {
            x: this.game.player.position.x + 20,

            y: this.game.player.position.y + 20
        }
        this.damage = 1
        this.speed = {
            x: -this.game.player.projectilespeed,

            y: -this.game.player.projectilespeed
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
    }

    projectiles = [];

    shootleft(){
        this.game.projectiledown.shoot = 0
        this.game.projectileup.shoot = 0
        this.game.projectileright.shoot = 0
        this.shoot = 1
    }

    shootstop(){
        this.shoot = 0
    }

    colliderLeft(Collider){
        if(Collider != this.game.player){
            this.delete = true
        }
        if(Collider.id === 300){
            Collider.health -= this.game.player.damage;
            this.delete = true
        }
    }
    colliderRight(Collider){
        if(Collider != this.game.player){
            this.delete = true
        }
        if(Collider.id === 300){
            Collider.health -= this.game.player.damage;
            this.delete = true
        }
    }
    colliderUp(Collider){
        if(Collider != this.game.player){
            this.delete = true
        }
        if(Collider.id === 300){
            Collider.health -= this.game.player.damage;
            this.delete = true
        }
    }
    colliderDown(Collider){
        if(Collider != this.game.player){
            this.delete = true
        }
        if(Collider.id === 300){
            Collider.health -= this.game.player.damage;
            this.delete = true
        }
    }



    update(deltaTime){
        if(this.shoot === 1){
            if(this.game.projectiledely.dely >= 1){
                this.projectiles.push(new ProjectileLeft(this.game));
                this.game.projectiledely.dely = 0
            }
        }

        this.projectiles = this.projectiles.filter(object => object.delete === false);
    }

    
    
    draw(ctx){
        this.projectiles.forEach((ProjectileLeft) => ProjectileLeft.draw(ctx));
        this.position.x += this.speed.x
        ctx.fillStyle = "green"
        ctx.fillRect(
            this.position.x, 
            this.position.y, 
            this.size, 
            this.size
        )
    }
}

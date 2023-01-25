export default class ProjectileUp {
    constructor(game) {

        this.game = game

        this.position = {
            x: this.game.player.position.x + 20,

            y: this.game.player.position.y + 20
        }
        this.damage = 1
        this.size = 10;
        this.speed = {
            x: -10,

            y: -10
        };
        this.maxspeed = {
            x: 10,

            y: 10
        }
        this.width = 10
        this.height = 10
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
        this.position.x = Collider.position.x - this.width
        if(Collider != this.game.player){
            this.delete = true
        }
        if(Collider.id === 300){
            Collider.health -= 1;
        }
    }
    colliderRight(Collider){
        this.position.x = Collider.position.x + Collider.size
        if(Collider != this.game.player){
            this.delete = true
        }
        if(Collider.id === 300){
            Collider.health -= 1;
        }
    }
    colliderUp(Collider){
        this.position.y = Collider.position.y + Collider.size
        if(Collider != this.game.player){
            this.delete = true
        }
        if(Collider.id === 300){
            Collider.health -= 1;
        }
    }
    colliderDown(Collider){
        this.position.y = Collider.position.y - this.width
        if(Collider != this.game.player){
            this.delete = true
        }
        if(Collider.id === 300){
            Collider.health -= 1;
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

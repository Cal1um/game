export default class ProjectileUp {
    constructor(game) {

        this.game = game

        this.position = {
            x: this.game.player.position.x + 20,

            y: this.game.player.position.y + 20
        }

        this.size = 10;
        this.speed = -10
        this.maxspeed = {
            x: 10,

            y: 10
        }
        this.width = 10
        this.height = 10
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

    update(deltaTime){
        if(this.shoot === 1){
            if(this.game.projectiledely.dely >= 1){
                this.projectiles.push(new ProjectileUp(this.game));
                this.game.projectiledely.dely = 0
            }
        }
    }



    draw(ctx){
        this.projectiles.forEach((ProjectileUp) => ProjectileUp.draw(ctx));
        this.position.y += this.speed
            ctx.fillStyle = "green"
            ctx.fillRect(
                this.position.x, 
                this.position.y, 
                this.size, 
                this.size
            )
    }
}

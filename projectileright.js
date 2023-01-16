export default class ProjectileRight {
    constructor(game) {

        this.game = game

        this.position = {
            x: this.game.player.position.x + 20,

            y: this.game.player.position.y + 20
        }
        this.damage = 1
        this.size = 10;
        this.speed = 10
        this.width = 10
        this.maxspeed = {
            x: 10,

            y: 10
        }
        this.height = 10
    }

    projectiles = [];

    shootright(){
        this.game.projectiledown.shoot = 0
        this.game.projectileleft.shoot = 0
        this.game.projectileup.shoot = 0
        this.shoot = 1
    }

    shootstop(){
        this.shoot = 0
    }

      colliderLeft(Collider){
        this.position.x = Collider.position.x - this.width
    }
    colliderRight(Collider){
        this.position.x = Collider.position.x + Collider.size
    }
    colliderUp(Collider){
        this.position.y = Collider.position.y + Collider.size
    }
    colliderDown(Collider){
        this.position.y = Collider.position.y - this.width
    }


    update(deltaTime){
        if(this.shoot === 1){
            if(this.game.projectiledely.dely >= 1){
                this.projectiles.push(new ProjectileRight(this.game));
                this.game.projectiledely.dely = 0
            }
        }
    }
    
    draw(ctx){
        this.projectiles.forEach((ProjectileRight) => ProjectileRight.draw(ctx));
        this.position.x += this.speed
            ctx.fillStyle = "green"
            ctx.fillRect(
                this.position.x, 
                this.position.y, 
                this.size, 
                this.size
            )
    }
}
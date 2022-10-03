export default class Projectile {
    projectiles = [];
    constructor(game) {

        this.game = game

        this.position = {
            x: this.game.player.position.x + 20,

            y: this.game.player.position.y + 20
        }

        this.size = 10;
        this.speed = 10
        this.direction = ""
    }

    update(deltaTime){
        
    }

    shootup(){
        this.projectiles.push(new Projectile(this.game));
        this.direction = "up"
    }

    shootdown(){
        this.projectiles.push(new Projectile(this.game));
        this.direction = "down"
    }

    draw(ctx){
        this.projectiles.forEach((Projectile) => Projectile.draw(ctx));
            ctx.fillStyle = "green"
            this.position.y -= this.speed
            ctx.fillRect(
                this.position.x, 
                this.position.y, 
                this.size, 
                this.size
            )
        
    }
}

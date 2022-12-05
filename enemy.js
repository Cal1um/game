export default class Enemy {
    constructor(game, position) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game

        this.position = position
        this.width = 30;
        this.height = 30;
        this.size = 30;
        this.speed = 2.5;
        this.maxspeed = 2.5;
    }

    update(deltaTime){
        if(this.position.x - 30 < this.game.player.position.x){
            this.position.x += this.speed
        }
        if(this.position.x + 30 > this.game.player.position.x){
            this.position.x -= this.speed
        }
        if(this.position.y - 30 < this.game.player.position.y){
            this.position.y += this.speed
        }
        if(this.position.y + 30 > this.game.player.position.y){
            this.position.y -= this.speed
        }
    }

    draw(ctx){
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x, 
            this.position.y, 
            this.width, 
            this.height
            );
    }
}
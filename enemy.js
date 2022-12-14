export default class Enemy {
    constructor(game, position) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game

        this.id = 300
        this.damage = 1

        this.position = position
        this.width = 30;
        this.height = 30;
        this.size = 30;
        this.speed = 2.5;
        this.maxspeed = {
            x: 2.5,

            y: 2.5
        };
    }

    colliderLeft(Collider){
        this.position.x = Collider.position.x - this.width
        console.log("working")
    }
    colliderRight(Collider){
        this.position.x = Collider.position.x + Collider.size
        console.log("working")
    }
    colliderUp(Collider){
        this.position.y = Collider.position.y + Collider.size
        console.log("working")
    }
    colliderDown(Collider){
        this.position.y = Collider.position.y - this.width
        console.log("working")
    }

    update(deltaTime){
        if(this.position.x < this.game.player.position.x + 10){
            this.position.x += this.speed
        }
        if(this.position.x > this.game.player.position.x + 10){
            this.position.x -= this.speed
        }
        if(this.position.y < this.game.player.position.y + 10){
            this.position.y += this.speed
        }
        if(this.position.y > this.game.player.position.y + 10){
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
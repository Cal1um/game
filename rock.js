export default class Rock {
    constructor(game, position) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game
        this.maxspeed = {
            x: 0,

            y: 0
        };
        this.speed = {
            x: 0,

            y: 0
        };
        this.width = 90
        this.height = 90

        this.position = position;
        this.size = 90;
        this.health = 100
    }

    colliderLeft(Collider){
    }
    colliderRight(Collider){
    }
    colliderUp(Collider){
    }
    colliderDown(Collider){
    }


    update(deltaTime){
    }

    draw(ctx){
        ctx.fillStyle = "grey";
        ctx.fillRect(
            this.position.x, 
            this.position.y, 
            this.size, 
            this.size
            );
    }

}
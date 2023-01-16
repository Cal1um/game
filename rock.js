export default class Rock {
    constructor(game, position) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game
        this.maxspeed = {
            x: 0,

            y: 0
        };
        this.speed = 0
        this.width = 90
        this.height = 90

        this.position = position;
        this.size = 90;
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
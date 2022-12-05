export default class Rock {
    constructor(game, position) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game
        this.maxspeed = 0
        this.speed = 0

        this.position = position;
        this.size = 90;
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
export default class Floor {
    constructor(game, position) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game

        this.position = position;
        this.size = 90;
    }

    update(){

    }

    draw(ctx){
        ctx.fillStyle = "burlywood";
        ctx.fillRect(this.position.x, 
            this.position.y, 
            this.size, 
            this.size
            );
    }
}
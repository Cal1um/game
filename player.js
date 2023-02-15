


export default class Player{
    constructor(game, buildLevel){
        this.width = 50;
        this.height = 50;
        this.size = 50;

        this.health  = 10

        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
    
        this.newlevel = 0
        this.damage = 1

        this.projectilewidth = 10
        this.projectileheight = 10
        this.projectilesize = 10

        this.projectilespeed = 10


        this.maxspeed = {
            x: 5,
            y: 5
        };
        this.speed = {
            x: 0,
            y: 0,
        }
        
        this.build = buildLevel
        this.game = game
        this.color = "green"

        this.position = {
            x: game.gameWidth / 2 - this.width / 2,

            y: game.gameHeight / 2 - this.height / 2


        };
    }

    moveleft(stopleft){
        this.speed.x = -this.maxspeed.x;
    }
    moveright(){
        this.speed.x = this.maxspeed.x;
    }
    stopx(){
        this.speed.x = 0;
    }
    moveup(){
        this.speed.y = -this.maxspeed.y;
    }
    movedown(){
        this.speed.y = this.maxspeed.y;
    }
    stopy(){
        this.speed.y = 0;
    }

    colliderLeft(Collider){
        if(Collider != this.game.player && Collider.id != 200){
        this.position.x = Collider.position.x - this.width
        }
    }
    colliderRight(Collider){
        if(Collider != this.game.player && Collider.id != 200){
        this.position.x = Collider.position.x + Collider.size
    }
    }
    colliderUp(Collider){
        if(Collider != this.game.player && Collider.id != 200){
        this.position.y = Collider.position.y + Collider.size
        }
    }
    colliderDown(Collider){
        if(Collider != this.game.player && Collider.id != 200){
        this.position.y = Collider.position.y - this.width
        }
    }




    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    }
    update(deltaTime){
        if(!deltaTime) return;

        if(this.health < 1){
            this.game.RightLeft = 5
            this.game.UpDown = 5
            this.game.firstloop = 0
            this.game.start()
        }
        
        
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if(this.position.x < 0){
            this.position.x = 0
            if(this.game.collision.clearroom == 1){
                this.newlevel = 1
                this.game.newlevel()
            }
        }
        if(this.position.x + this.width > this.gameWidth){ 
            this.position.x = this.gameWidth - this.width;
            if(this.game.collision.clearroom == 1){
                this.newlevel = 2
                this.game.newlevel()
            }
        }

        if(this.position.y < 0){
            this.position.y = 0;
            if(this.game.collision.clearroom == 1){
                this.newlevel = 3
                this.game.newlevel()
            }
        }
        if(this.position.y + this.height > this.gameHeight){
            this.position.y = this.gameHeight - this.height;
            if(this.game.collision.clearroom == 1){
                this.newlevel = 4
                this.game.newlevel()
            }
        }
        
    }
}
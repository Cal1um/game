

export default class Rock {
    constructor(game, position) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game

        this.position = position;
        this.size = 90;
    }

    update(deltaTime){

        //Top Right Side Of Player side Collision
        if(this.position.x <= this.game.player.position.x + this.game.player.width){
            if(this.game.player.position.x + this.game.player.width < this.position.x + this.size){   //checks the area of the "rock"
                if(this.position.y < this.game.player.position.y){
                    if(this.game.player.position.y < this.position.y + this.size){
                        if(this.game.player.speed.x == this.game.player.maxspeed.x){ //check if moving right
                            this.game.player.position.x = this.position.x - this.game.player.width - 5
                        } 
                    }
                }
            }
        }

         //Top Left Side Of Player side Collision
         if(this.position.x < this.game.player.position.x){
            if(this.game.player.position.x <= this.position.x + this.size){    //checks the area of the "rock"
                if(this.position.y < this.game.player.position.y){
                    if(this.game.player.position.y < this.position.y + this.size){
                        if(this.game.player.speed.x == -this.game.player.maxspeed.x){ //check if moving left
                            this.game.player.position.x = this.position.x + this.size + 5
                        } 
                    }
                }
            }
        }

        //Bottum Left Side Of Player side Collision
        if(this.position.x < this.game.player.position.x){
            if(this.game.player.position.x <= this.position.x + this.size){   //checks the area of the "rock"
                if(this.position.y < this.game.player.position.y + this.game.player.height){
                    if(this.game.player.position.y + this.game.player.height < this.position.y + this.size){
                        if(this.game.player.speed.x == -this.game.player.maxspeed.x){ //check if moving left
                            this.game.player.position.x = this.position.x + this.size + 5
                        } 
                    }
                }
            }
        }

        //Bottum Right Side Of Player side Collision
        if(this.position.x <= this.game.player.position.x + this.game.player.width){
            if(this.game.player.position.x + this.game.player.width < this.position.x + this.size){   //checks the area of the "rock"
                if(this.position.y < this.game.player.position.y + this.game.player.height){
                    if(this.game.player.position.y + this.game.player.height < this.position.y + this.size){
                        if(this.game.player.speed.x == this.game.player.maxspeed.x){ //check if moving right
                            this.game.player.position.x = this.position.x - this.game.player.width - 5
                        } 
                    }
                }
            }
        }


        ////////////////////////////////////////////////////////////////////////////////////////////////////

        //Top Right Side Of Player Up And Down Collision
        if(this.position.x < this.game.player.position.x + this.game.player.width){
            if(this.game.player.position.x + this.game.player.width < this.position.x + this.size){   //checks the area of the "rock"
                if(this.position.y < this.game.player.position.y){
                    if(this.game.player.position.y <= this.position.y + this.size){
                        if(this.game.player.speed.y == -this.game.player.maxspeed.y){ //check if moving up
                            this.game.player.position.y = this.position.y + this.size + 5
                        } 
                    }
                }
            }
        }

         //Top Left Side Of Player Up And Down Collision
         if(this.position.x < this.game.player.position.x){
            if(this.game.player.position.x < this.position.x + this.size){   //checks the area of the "rock"
                if(this.position.y < this.game.player.position.y){
                    if(this.game.player.position.y <= this.position.y + this.size){
                        if(this.game.player.speed.y == -this.game.player.maxspeed.y){ //check if moving down
                            this.game.player.position.y = this.position.y + this.size + 5
                        } 
                    }
                }
            }
        }

        //Bottum Left Side Of Player Up And Down Collision
        if(this.position.x < this.game.player.position.x){
            if(this.game.player.position.x < this.position.x + this.size){   //checks the area of the "rock"
                if(this.position.y <= this.game.player.position.y + this.game.player.height){
                    if(this.game.player.position.y + this.game.player.height < this.position.y + this.size){
                        if(this.game.player.speed.y == this.game.player.maxspeed.y){ //check if moving down
                            this.game.player.position.y = this.position.y - this.game.player.height - 5
                        } 
                    }
                }
            }
        }

        //Bottum Right Side Of Player Up And Down Collision
        if(this.position.x < this.game.player.position.x + this.game.player.width){
            if(this.game.player.position.x + this.game.player.width < this.position.x + this.size){   //checks the area of the "rock"
                if(this.position.y <= this.game.player.position.y + this.game.player.height){
                    if(this.game.player.position.y + this.game.player.height < this.position.y + this.size){
                        if(this.game.player.speed.y == this.game.player.maxspeed.y){ //check if moving up
                            this.game.player.position.y = this.position.y - this.game.player.height - 5
                        } 
                    }
                }
            }
        }

        
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